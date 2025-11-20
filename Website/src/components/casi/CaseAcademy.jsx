import Text from '../text';
import SEO from '../SEO';

function CaseAcademy() {
	return (
		<>
			<SEO
				title='Academy Veneto Lavoro Gestionale'
				description='Costruire da zero un gestionale che sostituisce fogli, mail e manualità con un sistema coerente e verificabile.'
				ogUrl='https://discipline.design/casi/academy'
				canonical='https://discipline.design/casi/academy'
			/>

			<main>
				<article>
					<section>
						{/* Titolo */}
						<section>
							<Text type='title'>Academy Veneto Lavoro Gestionale</Text>
							<Text type='label'>
								HRMS per la formazione dei dipendenti di Veneto Lavoro
							</Text>

							<Text type='lead' className='mt-16'>
								Costruire da zero un gestionale che sostituisce fogli, mail e
								manualità con un sistema coerente e verificabile.
							</Text>
						</section>

						{/* Contesto */}
						<section>
							<Text type='label'>Contesto</Text>
							<Text type='lead'>
								La gestione della formazione obbligatoria per i dipendenti
								pubblici richiedeva una lunga sequenza di strumenti separati:
								fogli Excel, moduli Word, registri cartacei, mail e
								aggiornamenti manuali. Il risultato era un sistema frammentato,
								difficile da controllare e soggetto a ricostruzioni continue.
							</Text>

							<Text type='lead'>
								L'obiettivo dell'Academy non era creare una piattaforma "più
								moderna", ma unificare un processo che non aveva ancora un luogo
								unico in cui vivere. Si trattava di costruire un gestionale vero
								e proprio, capace di tenere insieme budget, corsi,
								partecipazioni e rendicontazioni senza costringere gli operatori
								a ricollegare manualmente ciò che il sistema non governava.
							</Text>
						</section>

						{/* Architettura */}
						<section>
							<Text type='label'>Architettura</Text>
							<Text type='lead'>
								Abbiamo definito l'intero ciclo di vita di un corso: creazione,
								pubblicazione, assegnazione, svolgimento, validazione e
								rendicontazione. Ogni elemento ha stati precisi, condizioni di
								avanzamento e verifiche che non dipendono da abitudini locali.
								Questo ha reso l'Academy un sistema governabile, non un
								contenitore di file.
							</Text>
						</section>

						{/* Flusso end-to-end */}
						<section>
							<Text type='label'>Flusso end-to-end</Text>
							<Text type='lead'>
								Il cuore del progetto è un flusso continuo: dal budget alla
								conclusione del corso. Non ci sono più segmenti scollegati o
								attività da ricucire. Ogni passaggio produce dati completi, ogni
								informazione rimane nel sistema e ogni verifica ha un luogo
								preciso in cui avviene.
							</Text>

							<Text type='lead'>
								Questo evita lacune e ricostruzioni tardive: tutto ciò che serve
								alla fase successiva nasce nella precedente, senza eccezioni.
							</Text>
						</section>

						{/* Dashboard */}
						<section>
							<Text type='label'>Dashboard</Text>
							<Text type='lead'>
								La dashboard del dipendente restituisce una visione chiara e
								aggiornata delle ore svolte, di quelle residue e dei corsi
								disponibili o obbligatori. Non richiede calcoli manuali o
								interpretazioni: mostra esattamente cosa serve per raggiungere
								gli obiettivi formativi.
							</Text>

							<Text type='lead'>
								La dashboard dell'amministratore governa invece l'intero
								sistema: budget assegnati, corsi attivi, partecipazioni,
								presenze, esiti e rendicontazioni. Tutto è allineato, perché
								ogni dato proviene dallo stesso flusso.
							</Text>
						</section>

						{/* Automazioni */}
						<section>
							<Text type='label'>Automazioni e notifiche</Text>
							<Text type='lead'>
								Le notifiche dell'Academy non sono un accessorio: proteggono il
								flusso da interruzioni prevedibili. La piattaforma avvisa su
								corsi in scadenza, presenze mancanti, ore residue,
								giustificativi necessari e rendicontazioni incomplete. Non per
								aggiungere "comodità", ma per garantire che il sistema rimanga
								coerente.
							</Text>
						</section>

						{/* Software house */}
						<section>
							<Text type='label'>Per le software house</Text>
							<Text type='lead'>
								L'Academy è progettata per evitare ambiguità. Stati chiari,
								ruoli definiti, criteri di validazione evidenti e interfacce
								coerenti riducono drasticamente la necessità di interpretare
								comportamenti o ricostruire logiche implicite.
							</Text>

							<Text type='lead'>
								Per i team tecnici questo significa meno richieste di
								chiarimento, meno revisioni, meno patch emergenziali e
								soprattutto la possibilità di estendere il prodotto senza
								rischiare fragilità strutturali. Ogni nuovo modulo sa
								esattamente dove inserirsi e come comportarsi.
							</Text>
						</section>

						{/* Conclusione */}
						<section>
							<Text type='label'>Conclusione</Text>
							<Text type='lead'>
								L'Academy non ha sostituito dei fogli: ha dato una struttura a
								un processo che non ne aveva una. Il risultato è un gestionale
								stabile, leggibile e destinato a durare, capace di sostenere la
								formazione dei dipendenti pubblici senza appoggiarsi alla buona
								volontà di chi lavora ma a un sistema progettato per reggere.
							</Text>
						</section>
					</section>
				</article>
			</main>
		</>
	);
}

export default CaseAcademy;
