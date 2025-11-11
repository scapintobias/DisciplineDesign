export default function Footer() {
	return (
		<footer>
			<div className='relative overflow-hidden bg-black text-neutral-200'>
				<div className='relative px-6 py-24 mx-auto max-w-7xl'>
					<div className='grid gap-16 md:grid-cols-3'>
						<div className='space-y-6 md:col-span-1'>
							<div>
								<h2 className='text-3xl font-extrabold tracking-tight text-ruby-400'>
									Discipline<span className='text-white'>Design</span>
								</h2>
								<h3>Software a misura d'uomo</h3>
							</div>
							<h5 className='max-w-md leading-relaxed text-neutral-400'>
								Mettiamo ordine prima del codice: traduciamo bisogni in
								interfacce chiare e pronte per essere sviluppate senza intoppi.
							</h5>
						</div>

						<div className='space-y-6'>
							<h3 className='text-xs font-semibold tracking-wide uppercase text-neutral-100'>
								Parliamone
							</h3>
							<p className='text-sm leading-relaxed text-neutral-400'>
								Raccontaci la tua sfida: iniziamo con un confronto gratuito e
								senza impegno.
							</p>

							<button
								type='submit'
								className='group relative w-full overflow-hidden rounded-xl bg-ruby-500 px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-ruby-500/30 transition hover:bg-ruby-400 focus:outline-none focus:ring-2 focus:ring-ruby-400/60'>
								<span className='relative z-10'>scrivici</span>
								<span className='absolute inset-0 transition-transform duration-300 translate-y-full bg-gradient-to-t from-black/40 to-transparent group-hover:translate-y-0'></span>
							</button>
						</div>
						<div className='space-y-6 text-sm'>
							<h3 className='text-xs font-semibold tracking-wide uppercase text-neutral-100'>
								Dove
							</h3>
							<p className='text-sm leading-relaxed text-neutral-400'>
								La nostra base è Verona; online ovunque.
							</p>
						</div>
					</div>

					<div className='flex flex-col gap-6 pt-8 mt-20 border-t border-neutral-700/40 md:flex-row md:items-center md:justify-between'>
						<p className='text-xs text-neutral-500'>
							© {new Date().getFullYear()} DisciplineDesign è un progetto di
							Sofia Righetti—P.IVA 04364000234—e Tobia Scapin—P.IVA
							04273780272—Tutti i diritti riservati.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
