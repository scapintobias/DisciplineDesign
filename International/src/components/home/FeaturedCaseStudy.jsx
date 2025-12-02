/** @format */

import { Link } from 'react-router-dom';
import { Section, Heading, Body, Stack, Eyebrow, Meta } from '../ui';
import { getAllCaseStudies } from '@/lib/content';

/**
 * FeaturedCaseStudy - Display the most recent case study
 */
export default function FeaturedCaseStudy({ lang = 'en' }) {
	const studies = getAllCaseStudies(lang);
	const featured =
		studies.length > 0
			? studies[Math.floor(Math.random() * studies.length)]
			: null;
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

	const metrics = Array.isArray(featured.metrics)
		? [...featured.metrics].sort(() => 0.5 - Math.random()).slice(0, 2)
		: [];

	return (
		<Section
			width='wide'
			spacing='3xl'
			className='bg-neutral-100'>
			<Link
				to={`${basePath}/work/${featured.slug}`}
				className='group block overflow-hidden rounded-2xl border border-neutral-200 bg-white px-8 py-10 lg:px-12 lg:py-14'>
				<div className='grid items-stretch gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.45fr)]'>
					{/* Text content */}
					<div className='flex h-full flex-col gap-8 xl:max-w-2xl'>
						<div className='space-y-3'>
							<Eyebrow className='text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-neutral-500'>
								{copy.eyebrow}
							</Eyebrow>
							<Heading
								level='h2'
								size='section'>
								{featured.title}
							</Heading>
							<Meta className='text-xs uppercase tracking-[0.12em] text-neutral-500'>
								{featured.client}
							</Meta>
						</div>

						<Body
							size='lg'
							className='text-neutral-700'>
							{featured.summary}
						</Body>

						<div className='flex flex-1 flex-col justify-end gap-8'>
							{/* Metrics */}
							{metrics.length > 0 && (
								<div className='grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-2'>
									{metrics.map((metric, index) => (
										<div
											key={index}
											className='space-y-2'>
											<div className='text-2xl font-semibold tracking-tight text-neutral-900'>
												{metric.value}
											</div>
											<div className='text-sm leading-relaxed text-neutral-600'>
												{metric.label}
											</div>
										</div>
									))}
								</div>
							)}

							<div className='flex items-center'>
								<span className='inline-flex items-center text-sm font-medium text-neutral-900 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-swr'>
									{copy.link}
									<svg
										className='ml-2 h-4 w-4 transition-colors group-hover:text-swr group-hover:translate-x-0.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 8l4 4m0 0l-4 4m4-4H3'
										/>
									</svg>
								</span>
							</div>
						</div>
					</div>

					{/* Image placeholder */}
					<div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50'>
						{featured.coverImage ? (
							<img
								src={featured.coverImage}
								alt={featured.title}
								className='absolute inset-0 h-full w-full object-cover'
								loading='lazy'
							/>
						) : (
							<div className='absolute inset-0 flex items-center justify-center px-10 text-center text-sm uppercase tracking-[0.2em] text-neutral-400'>
								Case study image
							</div>
						)}
					</div>
				</div>
			</Link>
		</Section>
	);
}
