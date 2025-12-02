/** @format */

import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/seo';
import { getAllCaseStudies } from '@/lib/content';
import { Section, Heading, Stack, Meta } from '../components/ui';

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
			<Section spacing='xl'>
				<Stack gap='xl'>
					<div>
						<Heading
							level='h1'
							size='hero'>
							{pageCopy.title}
						</Heading>
						<p className='max-w-3xl mt-6 text-lg text-neutral-600'>
							{pageCopy.description}
						</p>
					</div>

					<div className='overflow-hidden bg-white border rounded-2xl border-neutral-200'>
						<div className='divide-y divide-neutral-200'>
							{caseStudies.map((study) => (
								<Link
									key={study.slug}
									to={`${basePath}/work/${study.slug}`}
									className='group grid items-stretch gap-8 px-6 py-10 transition-colors duration-200 hover:bg-neutral-50 md:px-12 md:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'>
									<div className='flex flex-col h-full space-y-4'>
										<div className='space-y-4'>
											<Meta className='flex flex-wrap items-center gap-3 text-[11px] tracking-[0.14em] text-neutral-500'>
												<span>{study.client}</span>
												<span className='w-8 h-px bg-neutral-200' />
												<span>{study.sector}</span>
											</Meta>
											<Heading
												level='h2'
												size='section'
												className='text-[1.35rem] font-semibold text-neutral-900'>
												{study.title}
											</Heading>
										</div>
										<div className='flex-1'>
											<div className='flex items-center h-full'>
												<p className='max-w-2xl text-base leading-relaxed text-neutral-600'>
													{study.summary}
												</p>
											</div>
										</div>
										<div className='inline-flex items-center gap-2 mt-auto text-sm font-semibold text-neutral-900'>
											<span className='transition-colors duration-200 group-hover:text-accent'>
												View case study
											</span>
											<span className='transition-transform duration-200 text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-700'>
												→
											</span>
										</div>
									</div>

									<div className='relative overflow-hidden border rounded-2xl bg-neutral-50 border-neutral-200'>
										<div className='aspect-[4/3] w-full h-full'>
											{study.coverImage ? (
												<img
													src={study.coverImage}
													alt={study.title}
													className='object-fill w-full h-full'
													loading='lazy'
												/>
											) : (
												<div className='flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400'>
													Case study image
												</div>
											)}
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</Stack>
			</Section>
		</>
	);
}
