function Card({ title, subtitle, icon, border }) {
	return (
		<article className={`${border} pb-8 border-0 border-b !border-gray-400`}>
			<div className='flex flex-col gap-4'>
				<div className='flex items-center justify-center flex-none w-12 h-12 rounded-lg bg-ruby-400/10'>
					{icon}
				</div>
				<div>
					<h4>{title}</h4>
					<h5 className='font-light'>{subtitle}</h5>
				</div>
			</div>
		</article>
	);
}

export default function Cards() {
	return (
		<div className='grid gap-6 mx-auto cards-grid sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
			<Card
				border='border-t pt-8'
				title='Product Discovery'
				subtitle={
					'Sessioni rapide di esplorazione per definire problemi, ipotesi e primi esperimenti prima di investire nello sviluppo.'
				}
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
				subtitle={
					'Interviste, metriche e observed behavior per capire i bisogni reali degli utenti.'
				}
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
				subtitle={
					'Prioritizzazione, roadmap e allineamento tra obiettivi di business e utenti.'
				}
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
				title={`information architecture`}
				subtitle={
					'Organizziamo contenuti e percorsi per rendere i prodotti immediati e utili.'
				}
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
				subtitle={
					'Wireframe e prototipi interattivi per validare flussi e comportamenti prima del codice.'
				}
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
				subtitle={
					'Sessioni con utenti reali e misurazioni per ridurre incertezze e migliorare le decisioni.'
				}
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
							strokeLinejoin='round'
						/>
					</svg>
				}
			/>

			<Card
				title='UI Design'
				subtitle={
					'Interfacce coerenti e pronte per lo sviluppo, con attenzione a microinterazioni e usabilità.'
				}
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
				subtitle={
					'Standard WCAG e controlli pratici per rendere i prodotti fruibili da tutti.'
				}
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
				subtitle={
					'Pattern library, token e componenti per uno sviluppo più rapido e coerente.'
				}
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
	);
}
