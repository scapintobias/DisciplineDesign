import Text from '../components/text';

export function Card({
	title,
	subtitle,
	icon,
	border = '',
	borderColorClass = '!border-gray-400',
	className = '',
}) {
	return (
		<article
			className={`${border} pb-8 border-0 border-b ${borderColorClass} ${className}`}>
			<div className='flex flex-col gap-4'>
				<div className='flex items-center justify-center flex-none w-12 h-12 rounded-lg bg-ruby-400/10'>
					{icon}
				</div>
				<div>
					<Text type='label'>{title}</Text>
					<Text type='subsection' className='font-light'>
						{subtitle}
					</Text>
				</div>
			</div>
		</article>
	);
}

export default function Servizi() {
	return (
		<main>
			<article className='flex flex-col sm:gap-32 md:gap-52'>
				<h1>Servizi</h1>
				<div className='grid gap-6 mx-auto cards-grid sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<Card
						border='border-t pt-8'
						title='Product Discovery'
						subtitle='Definizione rapida del problema, priorità chiare e prime soluzioni testabili senza impegnare sviluppo.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<circle
									cx='11'
									cy='11'
									r='6'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M21 21l-4.35-4.35'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					/>

					<Card
						border='md:border-t md:pt-8'
						title='Ricerca UX'
						subtitle='Interviste e analisi del comportamento reale per capire dove gli utenti si bloccano e cosa serve davvero.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M12 2v4'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5 8h14'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M7 12h10'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M9 16h6'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					/>

					<Card
						border='lg:border-t lg:pt-8'
						title='Strategia UX'
						subtitle='Allineamento tra business e prodotto: cosa sviluppare, in che ordine, con quali metriche di successo.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M3 12h18'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12 3v18'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					/>

					<Card
						title='Information Architecture'
						subtitle='Struttura dei contenuti e percorsi logici che rendono il prodotto intuitivo fin dal primo accesso.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M4 6h16'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M4 12h16'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M4 18h16'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					/>

					<Card
						title='Prototipazione'
						subtitle='Flussi, wireframe e prototipi realistici per validare decisioni e ridurre il rischio prima del codice.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M3 7h18v10H4z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M7 3v4'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					/>

					<Card
						title='Test e validazione'
						subtitle='Sessioni con utenti reali, misurazioni e insights che rendono le scelte di prodotto più sicure.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M12 8v8'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8 12h8'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
								/>
							</svg>
						}
					/>

					<Card
						title='UI Design'
						subtitle='Interfacce sistematiche, coerenti e subito implementabili dai team di sviluppo.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<rect
									x='3'
									y='6'
									width='18'
									height='12'
									rx='2'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
								<path
									d='M7 10h10'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
								/>
							</svg>
						}
					/>

					<Card
						title='Accessibilità'
						subtitle='Controlli concreti e standard WCAG per rendere il prodotto utilizzabile da chiunque.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M12 2a10 10 0 100 20 10 10 0 000-20z'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
								<path
									d='M12 8v4l3 3'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
								/>
							</svg>
						}
					/>

					<Card
						title='Sistemi di design'
						subtitle='Componenti, token e processi che eliminano incoerenze e accelerano lo sviluppo su larga scala.'
						icon={
							<svg
								className='w-6 h-6 text-ruby-400'
								viewBox='0 0 24 24'
								fill='none'
								aria-hidden>
								<path
									d='M4 6h16M4 12h16M4 18h16'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
							</svg>
						}
					/>
				</div>
			</article>
		</main>
	);
}
