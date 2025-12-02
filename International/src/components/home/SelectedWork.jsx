import {
	Section,
	Heading,
	Eyebrow,
	Card,
	Stack,
	Meta,
	Grid,
	Button,
} from '../ui';
import { getAllCaseStudies } from '@/lib/content';

/**
 * SelectedWork - Grid of case study cards
 */
export default function SelectedWork({ lang = 'en' }) {
	const caseStudies = [...getAllCaseStudies(lang)]
		.sort(() => 0.5 - Math.random())
		.slice(0, 3);
	const basePath = lang === 'it' ? '/it' : '';
	const copy = {
		en: {
			eyebrow: 'Selected Work',
			heading: 'Case Studies',
			button: 'View all work',
			cta: 'Read more',
		},
		it: {
			eyebrow: 'Lavori selezionati',
			heading: 'Case Study',
			button: 'Vedi tutti i lavori',
			cta: 'Scopri di più',
		},
	}[lang] || {
		eyebrow: 'Selected Work',
		heading: 'Case Studies',
		button: 'View all work',
		cta: 'Read more',
	};

	return (
		<Section spacing="3xl" className="bg-neutral-100">
			<Stack gap="xl">
				{/* Header */}
				<div className="flex items-end justify-between">
					<div>
						<Eyebrow className="mb-4">{copy.eyebrow}</Eyebrow>
						<Heading level="h2" size="section">
							{copy.heading}
						</Heading>
					</div>
					<Button to={`${basePath}/work`} variant="ghost" size="sm">
						{copy.button}
					</Button>
				</div>

				{/* Grid */}
				<Grid cols={3} gap="lg">
					{caseStudies.map((study) => (
						<Card
							key={study.slug}
							to={`${basePath}/work/${study.slug}`}
							className="bg-white"
						>
							<Stack gap="sm">
								<Meta>
									{study.client}
									{study.sector ? (
										<>
											<br />
											{study.sector}
										</>
									) : null}
								</Meta>
								<Heading level="h3" size="card">
									{study.title}
								</Heading>
								<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
									{study.summary}
								</p>
								<div className="flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors group-hover:text-swr">
									<span>{copy.cta}</span>
									<svg
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</div>
							</Stack>
						</Card>
					))}
				</Grid>
			</Stack>
		</Section>
	);

}
