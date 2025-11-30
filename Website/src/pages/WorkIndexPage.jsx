import { useDocumentTitle } from '@/lib/seo';
import { getAllCaseStudies } from '@/lib/content';
import {
	Section,
	Heading,
	Stack,
	Grid,
	Card,
	Meta,
} from '../components/ui';

/**
 * WorkIndexPage - Case studies listing
 */
export default function WorkIndexPage({ lang = 'en' }) {
	const pageCopy = {
		en: {
			title: 'Work',
			description:
				'A selection of projects across enterprise software, operations platforms, mobile tools, workflow redesign and complex data interfaces. Each case study is documented in detail, from architectural decisions to interaction models.',
		},
		it: {
			title: 'Lavori',
			description:
				'Selezione di progetti su software enterprise, piattaforme operative, strumenti mobile, redesign di workflow e interfacce dati complesse. Ogni case study documenta in dettaglio decisioni architetturali e modelli di interazione.',
		},
	}[lang] || {
		title: 'Work',
		description:
			'A selection of projects across enterprise software, operations platforms, mobile tools, workflow redesign and complex data interfaces. Each case study is documented in detail, from architectural decisions to interaction models.',
	};

	useDocumentTitle(pageCopy.title, pageCopy.description);

	const caseStudies = getAllCaseStudies(lang);
	const basePath = lang === 'it' ? '/it' : '';

	return (
		<>
			<Section spacing="xl">
				<Stack gap="xl">
					<div>
						<Heading level="h1" size="hero">
							{pageCopy.title}
						</Heading>
						<p className="mt-6 max-w-2xl text-lg text-neutral-600">
							{pageCopy.description}
						</p>
					</div>

					<Grid cols={3} gap="lg" className="mt-12">
						{caseStudies.map((study) => (
							<Card
								key={study.slug}
								to={`${basePath}/work/${study.slug}`}
							>
								<Stack gap="sm">
									<Meta>
										<p>{study.client}</p>
										<p>{study.sector}</p>
									</Meta>
									<Heading level="h2" size="card">
										{study.title}
									</Heading>
									<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
										{study.summary}
									</p>
								</Stack>
							</Card>
						))}
					</Grid>
				</Stack>
			</Section>
		</>
	);
}
