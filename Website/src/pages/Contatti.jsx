import Text from '../components/text.jsx';
import SEO from '../components/SEO.jsx';

export default function Contatti() {
	return (
		<main>
			<article>
				<Text type='title'>Contatti</Text>
				<section className='flex flex-col gap-10 pb-40 mt-52 scroll-mt-20'>
					<Text type='title' className='font-light leading-loose text-ruby-400'>
						Pronti a mettere ordine?
					</Text>
					<Text
						type='title'
						className='font-bold tracking-tighter text-ruby-400'>
						Parliamone.
					</Text>

					<div className='flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between'>
						<div className='flex flex-col gap-4 md:w-1/2 md:pr-8'>
							<Text type='label'>Parliamo del progetto</Text>
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
							<Text type='label'>Servizi rapidi</Text>
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
