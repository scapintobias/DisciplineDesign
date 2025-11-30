import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/seo';
import { getCaseStudyBySlug } from '@/lib/content';
import {
	Section,
	Heading,
	Stack,
	Grid,
	Stat,
	Meta,
	Eyebrow,
} from '../components/ui';

/**
 * WorkDetailPage - Individual case study page
 */
export default function WorkDetailPage({ lang = 'en' }) {
	const { slug } = useParams();
	const caseStudy = getCaseStudyBySlug(slug, lang);

	useDocumentTitle(caseStudy?.title, caseStudy?.summary);
	const copy = {
		en: {
			notFound: 'Case study not found',
			impact: 'Impact',
		},
		it: {
			notFound: 'Case study non trovato',
			impact: 'Impatto',
		},
	}[lang] || { notFound: 'Case study not found', impact: 'Impact' };

	if (!caseStudy) {
		return (
			<Section>
				<Heading level="h1" size="hero">
					{copy.notFound}
				</Heading>
			</Section>
		);
	}

	const { Component } = caseStudy;

	return (
		<>
			{/* Header */}
			<Section spacing="xl">
				<Stack gap="lg" className="max-w-4xl">
					<div>
						<Meta className="mb-4">
							<p>{caseStudy.client}</p>
							<p>{caseStudy.sector}</p>
						</Meta>
						<Heading level="h1" size="hero">
							{caseStudy.title}
						</Heading>
					</div>
					<p className="text-xl leading-relaxed text-neutral-600">
						{caseStudy.summary}
					</p>
				</Stack>
			</Section>

			{/* Metrics */}
			{caseStudy.metrics && caseStudy.metrics.length > 0 && (
				<Section spacing="lg" className="bg-neutral-50">
					<Eyebrow className="mb-8">{copy.impact}</Eyebrow>
					<Grid cols={3} gap="lg">
						{caseStudy.metrics.map((metric, index) => (
							<Stat
								key={index}
								value={metric.value}
								label={metric.label}
							/>
						))}
					</Grid>
				</Section>
			)}

			{/* Content */}
			<Section spacing="xl">
				<div className="prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-4xl">
					<Component />
				</div>
			</Section>
		</>
	);
}
