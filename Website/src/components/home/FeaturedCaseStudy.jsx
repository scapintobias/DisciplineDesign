import { Link } from 'react-router-dom';
import { Section, Heading, Body, Stack, Eyebrow, Meta } from '../ui';
import { getFeaturedCaseStudy } from '@/lib/content';

/**
 * FeaturedCaseStudy - Display the most recent case study
 */
export default function FeaturedCaseStudy({ lang = 'en' }) {
	const featured = getFeaturedCaseStudy(lang);
	const basePath = lang === 'it' ? '/it' : '';
	const copy = {
		en: {
			eyebrow: 'Featured work',
			link: 'View case study',
		},
		it: {
			eyebrow: 'Lavoro in evidenza',
			link: 'Vedi il case study',
		},
	}[lang] || { eyebrow: 'Featured work', link: 'View case study' };

	if (!featured) return null;

	return (
		<Section spacing="xl" className="bg-neutral-100">
			<div className="rounded-2xl border border-neutral-200 bg-white px-8 py-10 lg:px-12 lg:py-14 group cursor-pointer">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
					{/* Text content */}
					<Stack gap="lg" className="max-w-2xl">
						<div className="space-y-3">
							<Eyebrow className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
								{copy.eyebrow}
							</Eyebrow>
							<Heading level="h2" size="section">
								{featured.title}
							</Heading>
							<Meta className="text-xs uppercase tracking-[0.12em] text-neutral-500">
								{featured.client}
							</Meta>
						</div>

						<Body size="lg" className="text-neutral-700">
							{featured.summary}
						</Body>

						{/* Metrics */}
						{featured.metrics && featured.metrics.length > 0 && (
							<div className="mt-8 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
								{featured.metrics
									.slice(0, 3)
									.map((metric, index) => (
										<div key={index} className="space-y-2">
											<div className="text-2xl font-semibold tracking-tight text-neutral-900">
												{metric.value}
											</div>
											<div className="text-sm leading-relaxed text-neutral-600">
												{metric.label}
											</div>
										</div>
									))}
							</div>
						)}

						<div className="mt-8">
							<Link
								to={`${basePath}/work/${featured.slug}`}
								className="inline-flex items-center text-sm font-medium text-neutral-900 transition-transform duration-200 hover:translate-x-0.5 hover:text-swr group-hover:translate-x-1 group-hover:text-swr"
							>
								{copy.link}
								<svg
									className="ml-2 h-4 w-4 transition-colors group-hover:text-swr group-hover:translate-x-0.5"
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
							</Link>
						</div>
					</Stack>

					{/* Image placeholder */}
					<div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
						<div className="flex h-full min-h-[320px] items-center justify-center bg-neutral-100">
							{featured.coverImage ? (
								<img
									src={featured.coverImage}
									alt={featured.title}
									className="h-full w-full object-cover"
									loading="lazy"
								/>
							) : (
								<div className="px-10 py-24 text-center text-sm uppercase tracking-[0.2em] text-neutral-400">
									Case study image
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
