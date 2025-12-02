/** @format */

export const meta = {
	title: 'Yape — Remote Driving Interface for Delivery UGV',
	slug: 'yape-remote-driving',
	client: 'Yape / e-Novia',
	summary:
		'Designing a remote driving interface for an autonomous delivery robot, making teleoperation safe and intelligible through HMI and human-factors research.',
	sector: 'Robotics & Human–Machine Interaction',
	featured: false,
	publishedAt: '2018-11-01',
	lang: 'en',
	metrics: [
		{ label: 'Primary research areas', value: '3' },
		{ label: 'Perception issues addressed', value: '10+' },
		{ label: 'Milestone impact', value: 'Helped secure new investors' },
	],
	coverImage: '/cases/yape.png',
};

export default function YapeCaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Remote driving interface for an autonomous delivery robot
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					To validate a delivery UGV, Yape needed safe teleoperation
					from a control room. Operators had to drive using a video
					feed and sensors instead of direct perception. The interface
					made remote driving intelligible enough to reach the
					milestone and unlock the next stage of autonomy.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Role and setup
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					I led the driving interface from July to November 2018,
					working with the CEO, PM, an industrial designer and a
					developer. Mechanics and a drive-by-sight alpha already
					existed; my mandate was to make fully remote driving viable
					and safe.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					The chassis, motors and early control software were defined.
					The next step was delivering a usable HMI that could
					compensate for filtered vision, provide operational cues,
					and define the minimum set of aids required for confident
					teleoperation.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Challenges
				</h2>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>
						Perception: depth, curvature, slope and acceleration
						under a noisy, wide-angle feed.
					</li>
					<li>
						Driving: a stable reference system, pointing, and
						calibrated controller sensitivity.
					</li>
					<li>
						Positioning: making LIDAR data and city context legible
						for the operator.
					</li>
				</ul>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Research approach
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Research combined human factors and cognitive psychology
					with HMI analogues: HUDs in fighter jets, Da Vinci
					telesurgery, parking sensors and control rooms. We studied
					how perception changes when filtered through screens and
					what cues restore confidence.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Technical exploration covered LIDAR outputs, camera
					distortion, transmission limits and drive-train constraints,
					defining what the interface could reliably convey without
					overwhelming the operator.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Key interface solutions
				</h2>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Driving reference system
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						A noisy webcam feed made straight driving unreliable. A
						reference grid in the viewport provided consistent
						alignment, stabilising straight lines and curves despite
						video artefacts.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Pointing and direction
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						A central viewfinder paired with trajectory
						curves—similar to reverse-parking aids—used wheel-speed
						differentials to render Bezier paths, giving the
						operator a projected line before turning.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Inclination and slope
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						An artificial-horizon-inspired indicator added fixed
						vertical lines (calibrated to lens distortion) with
						colour states to read tilt and prevent unsafe climbs or
						descents.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Speed and acceleration
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						Discrete joysticks offered no tactile feedback. Dual
						indicators showed both “gear” levels and joystick
						pressure, with an always-on km/h readout for precise
						control.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Depth and environment
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						LIDAR was simplified into azimuthal lines instead of
						noisy raw scans, and a compact high-contrast Mapbox view
						(built on OpenStreetMap) gave urban context without
						distracting from the camera feed.
					</p>
				</div>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Visual Identity
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The coordinated image for the project — including the logo,
					symbol system, colour palette and communication assets — was
					developed by{' '}
					<a
						href='https://northeast.productions'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-swr'>
						Northeast Productions
					</a>
					, our visual-design counterpart. The Yape logo created
					during this phase has since become a registered trademark.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Outcome
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					The interface delivered a proof of concept for
					teleoperation, validated assumptions about remote driving
					and supported further autonomy work. It contributed to
					securing new investors and international pilots.
				</p>
			</section>
		</div>
	);
}
