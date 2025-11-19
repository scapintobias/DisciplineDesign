import Text from './text';

export default function Footer() {
	return (
		<footer>
			<div className='relative overflow-hidden bg-black text-neutral-200'>
				<div className='relative px-6 py-24 mx-auto max-w-7xl'>
					<div className='grid gap-16 md:grid-cols-3'>
						<div className='space-y-6 md:col-span-1'>
							<div>
								<Text
									type='custom'
									className='text-3xl font-extrabold tracking-tight text-ruby-400'>
									Discipline<span className='text-white'>Design</span>
								</Text>
								<Text type='subsection'>Software a misura d'uomo</Text>
							</div>
							<Text
								type='small'
								className='max-w-md leading-relaxed text-neutral-400'>
								Trasformiamo idee, requisiti e vincoli in sistemi chiari:
								architetture, flussi, prototipi e interfacce che i team tecnici
								possono implementare senza incertezze.
							</Text>
						</div>

						<div className='space-y-6'>
							<Text type='label' className='text-white/80'>
								Parliamone
							</Text>
							<Text type='small' className='leading-relaxed text-neutral-400'>
								Raccontaci la tua sfida: iniziamo con un confronto gratuito e
								senza impegno.
							</Text>

							<button type='button' className='mt-8 lowercase btn btn-primary'>
								<a href='mailto:info@discipline.design?subject=Nuovo progetto'>
									Scrivi a info@discipline.design
								</a>
							</button>
						</div>
						<div className='space-y-6 text-sm'>
							<Text type='label' className='text-white/80'>
								Dove
							</Text>
							<Text type='small' className='leading-relaxed text-neutral-400'>
								La nostra base è Verona; online ovunque.
							</Text>
						</div>
					</div>

					<div className='flex flex-col gap-6 pt-8 mt-20 border-t border-neutral-700/40 md:flex-row md:items-center md:justify-between'>
						<p className='text-s text-neutral-500'>
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
