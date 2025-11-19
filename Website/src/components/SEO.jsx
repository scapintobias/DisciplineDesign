// src/components/SEO.jsx
import { useEffect } from 'react';

const DEFAULT_TITLE = 'DisciplineDesign';
const DEFAULT_DESCRIPTION =
	'Siamo il ponte tra chi vuole il software e chi lo sviluppa. Trasformiamo idee, requisiti e vincoli in architetture, flussi e interfacce chiare, pronte per lo sviluppo.';
const DEFAULT_URL = 'https://discipline.design';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

function setMetaName(name, content) {
	if (!content) return;
	let tag = document.querySelector(`meta[name="${name}"]`);
	if (!tag) {
		tag = document.createElement('meta');
		tag.setAttribute('name', name);
		document.head.appendChild(tag);
	}
	tag.setAttribute('content', content);
}

function setMetaProperty(property, content) {
	if (!content) return;
	let tag = document.querySelector(`meta[property="${property}"]`);
	if (!tag) {
		tag = document.createElement('meta');
		tag.setAttribute('property', property);
		document.head.appendChild(tag);
	}
	tag.setAttribute('content', content);
}

function setLinkRel(rel, href) {
	if (!href) return;
	let link = document.querySelector(`link[rel="${rel}"]`);
	if (!link) {
		link = document.createElement('link');
		link.setAttribute('rel', rel);
		document.head.appendChild(link);
	}
	link.setAttribute('href', href);
}

export function useSEO({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	ogUrl = DEFAULT_URL,
	canonical = DEFAULT_URL,
	ogImage = DEFAULT_OG_IMAGE,
}) {
	useEffect(() => {
		// Titolo
		document.title = title;

		// Meta base
		setMetaName('description', description);

		// Canonical
		setLinkRel('canonical', canonical);

		// Open Graph
		setMetaProperty('og:type', 'website');
		setMetaProperty('og:title', title);
		setMetaProperty('og:description', description);
		setMetaProperty('og:url', ogUrl);
		setMetaProperty('og:image', ogImage);

		// Twitter
		setMetaName('twitter:card', 'summary_large_image');
		setMetaName('twitter:title', title);
		setMetaName('twitter:description', description);
		setMetaName('twitter:image', ogImage);

		// JSON-LD
		const scriptId = 'structured-data-professional-service';
		let script = document.getElementById(scriptId);
		if (!script) {
			script = document.createElement('script');
			script.type = 'application/ld+json';
			script.id = scriptId;
			document.head.appendChild(script);
		}

		const ld = {
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			'name': 'DisciplineDesign',
			'url': ogUrl,
			'logo': `${ogUrl}/logo.png`,
			description,
			'address': {
				'@type': 'PostalAddress',
				'addressLocality': 'Italia',
			},
			'service': {
				'@type': 'Service',
				'name': 'Progettazione UX/UI e architetture per software complessi',
				'description':
					'Trasformiamo idee e vincoli in sistemi chiari: modelli, flussi, interfacce e documentazione pronti per lo sviluppo.',
			},
		};

		script.textContent = JSON.stringify(ld);
	}, [title, description, ogUrl, canonical, ogImage]);
}

/**
 * Componente comodo per continuare a usare <SEO ... /> nelle pagine
 */
export default function SEO(props) {
	useSEO(props || {});
	return null;
}
