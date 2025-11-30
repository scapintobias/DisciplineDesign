import { useEffect } from 'react';

/**
 * Set document title and meta description
 * @param {string} title - Page title
 * @param {string} [description] - Meta description
 */
export function useDocumentTitle(title, description) {
	useEffect(() => {
		document.title = title
			? `${title} – DisciplineDesign`
			: 'DisciplineDesign';

		if (description) {
			let metaDescription = document.querySelector(
				'meta[name="description"]'
			);
			if (!metaDescription) {
				metaDescription = document.createElement('meta');
				metaDescription.name = 'description';
				document.head.appendChild(metaDescription);
			}
			metaDescription.content = description;
		}
	}, [title, description]);
}

/**
 * Generate page title
 * @param {string} [pageTitle] - Specific page title
 * @returns {string} Full document title
 */
export function getPageTitle(pageTitle) {
	return pageTitle ? `${pageTitle} – DisciplineDesign` : 'DisciplineDesign';
}
