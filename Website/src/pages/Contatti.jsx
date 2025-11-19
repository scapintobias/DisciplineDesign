import Text from '../components/text.jsx';

export default function Contatti() {
	return (
		<main>
			<article className='flex flex-col pt-20 pb-40 sm:gap-32 md:gap-52'>
				<h1>Contatti</h1>
				<section className='flex flex-col gap-32 pb-40 mt-20 scroll-mt-20'>
					<h1 className='font-light leading-loose text-ruby-400'>
						Pronti a mettere ordine?
						<br />
						<span className='font-bold tracking-tighter text-ruby-400'>
							Parliamone.
						</span>
					</h1>

					<div className='flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between'>
						<div className='flex flex-col gap-4 md:w-1/2 md:pr-8'>
							<h3>Parliamo del progetto</h3>
							<Text type='lead' className=''>
								Raccontateci il vostro prodotto.
								<br />
								Vi aiutiamo a trasformare requisiti, flussi e vincoli in un
								sistema chiaro, documentato e facile da implementare.
							</Text>

							<div className='mt-auto space-y-4'>
								<button type='button'>
									<a href='mailto:info@discipline.design?subject=Progetto%20UX'>
										Raccontateci il progetto
									</a>
								</button>
							</div>
						</div>

						<div className='flex flex-col gap-4 md:w-1/2 md:pl-8'>
							<h3>Servizi rapidi</h3>
							<Text type='lead'>
								Discovery sprint, test e prototipi per validare idee senza
								impegnare lo sviluppo.
							</Text>

							<div className='mt-auto space-y-4'>
								<button type='button'>
									<a href='mailto:info@discipline.design?subject=Sprint%20Discovery'>
										Richiesta sprint
									</a>
								</button>
							</div>
						</div>
					</div>
				</section>
			</article>
		</main>
	);
}
