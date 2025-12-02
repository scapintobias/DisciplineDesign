/** @format */

export const meta = {
	title: 'SILS — Unified Social Services Information System',
	slug: 'sils-system',
	client: 'Regione Veneto',
	summary:
		'Creating a single system where nine separate organisations previously followed different rules and workflows.',
	sector: 'Public Sector / Social Services',
	featured: true,
	publishedAt: '2024-03-10',
	lang: 'en',
	metrics: [
		{ label: 'Local organisations unified', value: '9' },
		{ label: 'Processes covered', value: 'End-to-end' },
	],
	coverImage: '/cases/sils.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Information architecture for regional social policies
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					Nine local health authorities, nine interpretations of the
					same process, nine parallel ways to manage social policies.
					SILS rebuilds this fragmented reality into a single,
					verifiable system.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architecture
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Before SILS, each AULSS used its own tools, formats and
					procedures to manage social policy interventions. The
					objective was not to “roll out a new software product”, but
					to define a shared structural model that removed ambiguity
					at the root.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The work focused on designing a single, explicit backbone:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>clear roles and responsibilities;</li>
					<li>
						a unified lifecycle for users, pathways, activities and
						reporting;
					</li>
					<li>the same states and rules across all territories.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Every action now has a defined place in the system, a
					position in the sequence and a set of dependencies. The
					architecture removes the need for tacit knowledge and local
					interpretation.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Systems
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The key shift was the introduction of a single end-to-end
					flow: from intake to closure. Verification, ownership,
					pathways, activities, documentation, disbursements and
					monitoring follow the same logic, regardless of where the
					work happens.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Reporting, historically the most painful part, becomes a
					natural consequence of the system. Data is captured along
					the way, at the right step of the process, instead of being
					rebuilt at the end from partial traces.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					At regional level, monitoring moves from estimation to
					evidence:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>active pathways and activities;</li>
					<li>workload across services;</li>
					<li>use and status of funds;</li>
					<li>progress against objectives.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					This is not a “dashboard for show”, but a linear reading
					sustained by a stable data model.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interface
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The interface is intentionally restrained. It exists to
					implement structural clarity: linear layouts, predictable
					components, explicit states. Screens are designed to support
					complex decisions without relying on visual spectacle.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					For software houses and technical teams, SILS introduces
					predictability. When each module follows the same logic, and
					states and roles are fully specified, development becomes
					linear: integrations no longer require “archeology”, and new
					features do not trigger uncontrolled side effects.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Conclusion
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					SILS was not created to be “the new regional software”, but
					to bring order where it was missing. The result is not
					spectacular; it is solid. A reliable base designed to last,
					capable of holding policy, operators and development
					together without friction.
				</p>
			</section>
		</div>
	);
}
