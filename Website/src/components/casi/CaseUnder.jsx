import Text from '../text';
import SEO from '../SEO';

function CaseUnder() {
	return (
		<>
			<SEO
				title='UnderControl — Mobile Interface Design'
				description="Progettare un'esperienza mobile chiara, leggibile e coerente a partire da un gestionale desktop esistente."
				ogUrl='https://discipline.design/casi/under'
				canonical='https://discipline.design/casi/under'
			/>

			<main>
				<article>
					<section>
						{/* Titolo */}
						<section>
							<Text type='title'>UnderControl</Text>
							<Text type='label'>interfaccia mobile</Text>

							<Text type='lead' className='mt-16'>
								Progettare un'esperienza mobile chiara, leggibile e coerente a
								partire da un gestionale desktop esistente.
							</Text>
						</section>
						<img
							src='/undercontrol/undercontrol.png'
							alt='UnderControl overview'
							className='w-full mt-12'
						/>
						{/* Contesto */}
						<section>
							<Text type='label'>Contesto</Text>
							<Text type='lead'>
								UnderControl è un software cloud per la gestione di progetti,
								costi e attività aziendali. La piattaforma desktop è ricca e
								articolata: marginalità, dashboard, Gantt, procedure,
								consultazioni approfondite. Portare questa complessità su mobile
								non significava "ridurre": significava scegliere con precisione
								cosa ha senso in mobilità e come mostrarlo senza rumore.
							</Text>

							<Text type='lead'>
								Il lavoro sul mobile è stato quindi un esercizio di selezione e
								progettazione: rendere immediati i dati essenziali, mantenere
								coerenza con il gestionale e garantire un'esperienza leggibile
								ovunque, dai cantieri agli uffici.
							</Text>
						</section>

						{/* Architettura dell'informazione */}
						<section>
							<Text type='label'>Architettura dell'informazione</Text>
							<Text type='lead'>
								La prima fase ha definito una gerarchia chiara: quali sezioni
								servono davvero su smartphone, quali dati devono essere
								immediati e quali flussi devono essere accorpati per evitare
								passaggi inutili. La struttura scelta concentra l'esperienza su
								Spese, Attività e Diario di Progetto. Non una copia del desktop,
								ma una sintesi progettata.
							</Text>
						</section>
						<div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2'>
							<img
								src='/undercontrol/4-portrait.png'
								alt='Calendario e giornate'
								className='w-full'
							/>
							<img
								src='/undercontrol/5 Lavoro start & stop-portrait.png'
								alt='Start & Stop attività'
								className='w-full'
							/>
						</div>
						{/* Sistema colori */}
						<section>
							<Text type='label'>Sistema colori</Text>
							<Text type='lead'>
								La palette è stata ripensata per supportare leggibilità e
								riconoscibilità: il blu mantiene continuità con la piattaforma,
								il giallo identifica l'area Spese, il nero sostiene le sezioni
								più testuali. Il risultato è un'interfaccia più chiara, meno
								affaticante e più veloce da scansionare.
							</Text>
						</section>

						{/* Tipografia e componenti */}
						<section>
							<Text type='label'>Tipografia e componenti</Text>
							<Text type='lead'>
								Il nuovo font migliora la leggibilità e rafforza la gerarchia.
								Componenti, spaziature e stati interattivi sono stati allineati
								per costruire un linguaggio coerente. Le schermate non
								richiedono interpretazione: la consistenza visiva sostiene la
								comprensione.
							</Text>
						</section>
						<div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2'>
							<img
								src='/undercontrol/7v1 Main - add new - giallo-portrait.png'
								alt='Schermata spese — elenco'
								className='w-full'
							/>
							<img
								src='/undercontrol/5 Record expenses-portrait.png'
								alt='Schermata spese — dettaglio'
								className='w-full'
							/>
						</div>
						{/* Diario di Progetto */}
						<section>
							<Text type='label'>Diario di Progetto</Text>
							<Text type='lead'>
								Il Diario è stato riprogettato come strumento operativo:
								inserimento dati semplice e guidato, visualizzazione ordinata e
								leggibile, continuità visiva con il resto dell'app. La
								traduzione dal desktop al mobile non replica la complessità: ne
								mostra solo ciò che serve, nel momento in cui serve.
							</Text>
						</section>

						{/* Risultati */}
						<section>
							<Text type='label'>Risultati</Text>
							<Text type='lead'>
								Il redesign dell'app mobile ha prodotto un'interfaccia più
								leggibile, coerente e professionale. La navigazione è rapida
								anche in contesti d'uso non ideali e l'integrazione con il
								gestionale è naturale: ciò che serve all'utente mobile è
								disponibile subito, senza sacrificare la qualità del dato.
							</Text>

							<Text type='lead'>
								L'app non sostituisce il gestionale: lo completa. Offre un
								accesso essenziale, chiaro e progettato come parte di un
								ecosistema coerente.
							</Text>
						</section>
					</section>
				</article>
			</main>
		</>
	);
}

export default CaseUnder;
