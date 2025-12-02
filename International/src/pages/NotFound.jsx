/** @format */

import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Body, Stack, Eyebrow, Button } from '../components/ui';

export default function NotFoundPage({ lang = 'en' }) {
	const basePath = lang === 'it' ? '/it' : '/';
	const copy = {
		en: {
			eyebrow: 'Page not found',
			title: 'This page is missing or was moved.',
			description:
				'The link may be out of date or the page no longer exists. You can return to the homepage or browse the work we can share publicly.',
			home: 'Back to homepage',
			work: 'View our work',
		},
		it: {
			eyebrow: 'Pagina non trovata',
			title: 'Questa pagina non esiste più o è stata spostata.',
			description:
				'Il link potrebbe essere obsoleto oppure la pagina non è più disponibile. Torna alla home o guarda i case study pubblici.',
			home: 'Torna alla home',
			work: 'Vedi i lavori',
		},
	}[lang] || {
		eyebrow: 'Page not found',
		title: 'This page is missing or was moved.',
		description:
			'The link may be out of date or the page no longer exists. You can return to the homepage or browse the work we can share publicly.',
		home: 'Back to homepage',
		work: 'View our work',
	};

	useDocumentTitle(copy.title, copy.description);

	return (
		<Section spacing="3xl" className="bg-white">
			<Stack gap="lg" className="max-w-3xl">
				<Eyebrow className="text-neutral-500">{copy.eyebrow}</Eyebrow>
				<Heading level="h1" size="section">
					{copy.title}
				</Heading>
				<Body size="lg" className="text-neutral-700">
					{copy.description}
				</Body>
				<div className="flex flex-wrap gap-3 pt-2">
					<Button to={basePath} size="md">
						{copy.home}
					</Button>
					<Button to={`${basePath}/work`} variant="secondary" size="md">
						{copy.work}
					</Button>
				</div>
			</Stack>
		</Section>
	);
}
