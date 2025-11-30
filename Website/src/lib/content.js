/**
 * Content loader utilities for JSX files with exported metadata
 * Uses Vite's glob imports to load content with an exported `meta` object
 */

/**
 * Normalize a glob import result into a content array
 * @param {Object} modules - Result from import.meta.glob
 * @returns {Array} Processed content items
 */
function processModules(modules) {
	return Object.entries(modules).map(([path, module]) => {
		const meta = module.meta || module.frontmatter || {};
		const slug =
			meta.slug ||
			path
				.split('/')
				.pop()
				.replace(/\.jsx?$/, '');

		const content = {
			slug,
			...meta,
			Component: module.default,
		};

		if (content.publishedAt) {
			content.publishedAt = new Date(content.publishedAt);
		}

		return content;
	});
}

/**
 * Load all case studies
 * @param {string} [lang] - Filter by language
 * @returns {Array<CaseStudy>} Case studies sorted by publishedAt (newest first)
 */
export function getAllCaseStudies(lang = null) {
	const modules = import.meta.glob('/src/components/work/*.jsx', {
		eager: true,
	});
	let items = processModules(modules);

	if (lang) {
		items = items.filter((item) => (item.lang || 'en') === lang);
	}

	const getTime = (item) =>
		item.publishedAt instanceof Date ? item.publishedAt.getTime() : 0;

	return items.sort((a, b) => getTime(b) - getTime(a));
}

/**
 * Get a single case study by slug
 * @param {string} slug
 * @param {string} [lang]
 * @returns {CaseStudy | null}
 */
export function getCaseStudyBySlug(slug, lang = null) {
	const modules = import.meta.glob('/src/components/work/*.jsx', {
		eager: true,
	});
	const items = processModules(modules);
	const filtered =
		lang === null
			? items
			: items.filter((item) => (item.lang || 'en') === lang);
	return filtered.find((item) => item.slug === slug) || null;
}

/**
 * Get featured case study (most recent)
 * @param {string} [lang] - Filter by language
 * @returns {CaseStudy | null}
 */
export function getFeaturedCaseStudy(lang = null) {
	const studies = getAllCaseStudies(lang);
	const featured = studies.find((study) => study.featured);
	return featured || studies[0] || null;
}
