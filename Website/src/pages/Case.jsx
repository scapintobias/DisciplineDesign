import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Text from '../components/text';
import SEO from '../components/SEO';

const CaseSILS = () => (
	<section className='space-y-16'>
		{/* Titolo */}
		<section>
			<Text type='lead'>
				Progettare un sistema unico dove prima c’erano dodici modi diversi di
				fare la stessa cosa.
			</Text>
		</section>

		{/* Contesto */}
		<section>
			<Text type='label'>Contesto</Text>
			<Text type='lead'>
				Il SILS nasce da una situazione semplice: ogni AULSS del Veneto gestiva
				le Politiche Sociali con strumenti, formati e procedure proprie. Non era
				un problema di capacità, ma di struttura. Quando dodici realtà lavorano
				in parallelo, con metodi diversi, è naturale che i dati si frammentino e
				il quadro complessivo diventi difficile da leggere.
			</Text>

			<Text type='lead'>
				Il progetto non è partito per “rifare tutto”, ma per definire una base
				comune su cui tutti potessero operare senza dover interpretare flussi,
				ruoli o regole. La richiesta non era tecnologica: era di ordine.
			</Text>
		</section>

		{/* Architettura */}
		<section>
			<Text type='label'>Architettura</Text>
			<Text type='lead'>
				Il primo passo è stato definire un modello unico, condiviso da tutte le
				AULSS: ruoli chiari, flussi coerenti, stessi stati, stesse regole.
				Abbiamo ricostruito l’ossatura del sistema, definendo chi fa cosa, in
				quale momento, con quali vincoli. Il ciclo di vita dell’utente, dei
				percorsi, delle attività e della rendicontazione è stato progettato come
				una sequenza leggibile, verificabile e replicabile.
			</Text>
		</section>

		{/* Flusso unico */}
		<section>
			<Text type='label'>Flusso unico</Text>
			<Text type='lead'>
				Il cambiamento più significativo è stato la costruzione di un flusso
				unico. Prima, le informazioni si muovevano attraverso strumenti e
				procedure diverse. Con SILS, tutto parte da una presa in carico e arriva
				a una chiusura coerente: verifiche, titolarità, percorsi, attività,
				documenti, erogazioni, monitoraggio. Ogni passaggio è collegato al
				precedente e al successivo, senza possibilità di salto o ambiguità.
			</Text>

			<Text type='lead'>
				Non è un sistema che richiede competenze tacite o “sapere come si fa”:
				il flusso rende evidente cosa deve accadere e quando.
			</Text>
		</section>

		{/* Rendicontazione */}
		<section>
			<Text type='label'>Rendicontazione</Text>
			<Text type='lead'>
				La rendicontazione, storicamente la parte più faticosa, oggi è una
				conseguenza naturale del flusso. Le informazioni necessarie vengono
				raccolte mentre il percorso procede. Non c’è più nulla da ricostruire a
				posteriori, non servono incastri o verifiche esterne. Tutto è già
				allineato, perché l’architettura è stata progettata per non perdere
				pezzi lungo il percorso.
			</Text>
		</section>

		{/* Monitoraggio */}
		<section>
			<Text type='label'>Monitoraggio</Text>
			<Text type='lead'>
				Il livello regionale dispone ora di una visione completa e ordinata:
				percorsi attivi, attività in corso, andamento dei finanziamenti, carico
				dei servizi e stato dei fondi. Non è una dashboard scenografica: è una
				lettura lineare, sostenuta da un modello dati che finalmente è stabile.
			</Text>
		</section>

		{/* Software house */}
		<section>
			<Text type='label'>Per le software house</Text>
			<Text type='lead'>
				Per i team tecnici, il valore del SILS sta nella prevedibilità. Quando
				ogni modulo segue la stessa logica, gli stati sono definiti e i ruoli
				non lasciano margini, lo sviluppo diventa più lineare. Le integrazioni
				non richiedono archeologia, le evolutive non innescano effetti domino, e
				il codice può crescere senza sorprese.
			</Text>

			<Text type='lead'>
				Abbiamo progettato il sistema per non scaricare complessità sullo
				sviluppo. La complessità viene risolta a monte, dove nasce. Questo
				permette ai team tecnici di lavorare con continuità invece che in
				emergenza.
			</Text>
		</section>

		{/* Conclusione */}
		<section>
			<Text type='label'>Conclusione</Text>
			<Text type='lead'>
				SILS non è nato per essere il “nuovo software della Regione”, ma per
				portare ordine in un sistema che ne aveva bisogno. Il risultato non è
				spettacolare: è solido. Una base affidabile su cui costruire negli anni,
				capace di tenere insieme policy, operatori e sviluppo senza creare
				frizioni.
			</Text>
		</section>
	</section>
);

const CaseAcademy = () => (
	<section className='space-y-16'>
		{/* Titolo */}
		<section>
			<Text type='lead'>
				Costruire da zero un gestionale che sostituisce fogli, mail e manualità
				con un sistema coerente e verificabile.
			</Text>
		</section>

		{/* Contesto */}
		<section>
			<Text type='label'>Contesto</Text>
			<Text type='lead'>
				La gestione della formazione obbligatoria per i dipendenti pubblici
				richiedeva una lunga sequenza di strumenti separati: fogli Excel, moduli
				Word, registri cartacei, mail e aggiornamenti manuali. Il risultato era
				un sistema frammentato, difficile da controllare e soggetto a
				ricostruzioni continue.
			</Text>

			<Text type='lead'>
				L’obiettivo dell’Academy non era creare una piattaforma “più moderna”,
				ma unificare un processo che non aveva ancora un luogo unico in cui
				vivere. Si trattava di costruire un gestionale vero e proprio, capace di
				tenere insieme budget, corsi, partecipazioni e rendicontazioni senza
				costringere gli operatori a ricollegare manualmente ciò che il sistema
				non governava.
			</Text>
		</section>

		{/* Architettura */}
		<section>
			<Text type='label'>Architettura</Text>
			<Text type='lead'>
				Abbiamo definito l’intero ciclo di vita di un corso: creazione,
				pubblicazione, assegnazione, svolgimento, validazione e rendicontazione.
				Ogni elemento ha stati precisi, condizioni di avanzamento e verifiche
				che non dipendono da abitudini locali. Questo ha reso l’Academy un
				sistema governabile, non un contenitore di file.
			</Text>
		</section>

		{/* Flusso end-to-end */}
		<section>
			<Text type='label'>Flusso end-to-end</Text>
			<Text type='lead'>
				Il cuore del progetto è un flusso continuo: dal budget alla conclusione
				del corso. Non ci sono più segmenti scollegati o attività da ricucire.
				Ogni passaggio produce dati completi, ogni informazione rimane nel
				sistema e ogni verifica ha un luogo preciso in cui avviene.
			</Text>

			<Text type='lead'>
				Questo evita lacune e ricostruzioni tardive: tutto ciò che serve alla
				fase successiva nasce nella precedente, senza eccezioni.
			</Text>
		</section>

		{/* Dashboard */}
		<section>
			<Text type='label'>Dashboard</Text>
			<Text type='lead'>
				La dashboard del dipendente restituisce una visione chiara e aggiornata
				delle ore svolte, di quelle residue e dei corsi disponibili o
				obbligatori. Non richiede calcoli manuali o interpretazioni: mostra
				esattamente cosa serve per raggiungere gli obiettivi formativi.
			</Text>

			<Text type='lead'>
				La dashboard dell’amministratore governa invece l’intero sistema: budget
				assegnati, corsi attivi, partecipazioni, presenze, esiti e
				rendicontazioni. Tutto è allineato, perché ogni dato proviene dallo
				stesso flusso.
			</Text>
		</section>

		{/* Automazioni */}
		<section>
			<Text type='label'>Automazioni e notifiche</Text>
			<Text type='lead'>
				Le notifiche dell’Academy non sono un accessorio: proteggono il flusso
				da interruzioni prevedibili. La piattaforma avvisa su corsi in scadenza,
				presenze mancanti, ore residue, giustificativi necessari e
				rendicontazioni incomplete. Non per aggiungere “comodità”, ma per
				garantire che il sistema rimanga coerente.
			</Text>
		</section>

		{/* Software house */}
		<section>
			<Text type='label'>Per le software house</Text>
			<Text type='lead'>
				L’Academy è progettata per evitare ambiguità. Stati chiari, ruoli
				definiti, criteri di validazione evidenti e interfacce coerenti riducono
				drasticamente la necessità di interpretare comportamenti o ricostruire
				logiche implicite.
			</Text>

			<Text type='lead'>
				Per i team tecnici questo significa meno richieste di chiarimento, meno
				revisioni, meno patch emergenziali e soprattutto la possibilità di
				estendere il prodotto senza rischiare fragilità strutturali. Ogni nuovo
				modulo sa esattamente dove inserirsi e come comportarsi.
			</Text>
		</section>

		{/* Conclusione */}
		<section>
			<Text type='label'>Conclusione</Text>
			<Text type='lead'>
				L’Academy non ha sostituito dei fogli: ha dato una struttura a un
				processo che non ne aveva una. Il risultato è un gestionale stabile,
				leggibile e destinato a durare, capace di sostenere la formazione dei
				dipendenti pubblici senza appoggiarsi alla buona volontà di chi lavora
				ma a un sistema progettato per reggere.
			</Text>
		</section>
	</section>
);

const CaseUnder = () => (
	<section className='space-y-16'>
		{/* Titolo */}
		<section>
			<Text type='lead'>
				Progettare un’esperienza mobile chiara, leggibile e coerente a partire
				da un gestionale desktop esistente.
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
				UnderControl è un software cloud per la gestione di progetti, costi e
				attività aziendali. La piattaforma desktop è ricca e articolata:
				marginalità, dashboard, Gantt, procedure, consultazioni approfondite.
				Portare questa complessità su mobile non significava “ridurre”:
				significava scegliere con precisione cosa ha senso in mobilità e come
				mostrarlo senza rumore.
			</Text>

			<Text type='lead'>
				Il lavoro sul mobile è stato quindi un esercizio di selezione e
				progettazione: rendere immediati i dati essenziali, mantenere coerenza
				con il gestionale e garantire un’esperienza leggibile ovunque, dai
				cantieri agli uffici.
			</Text>
		</section>

		{/* Architettura dell’informazione */}
		<section>
			<Text type='label'>Architettura dell’informazione</Text>
			<Text type='lead'>
				La prima fase ha definito una gerarchia chiara: quali sezioni servono
				davvero su smartphone, quali dati devono essere immediati e quali flussi
				devono essere accorpati per evitare passaggi inutili. La struttura
				scelta concentra l’esperienza su Spese, Attività e Diario di Progetto.
				Non una copia del desktop, ma una sintesi progettata.
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
				riconoscibilità: il blu mantiene continuità con la piattaforma, il
				giallo identifica l’area Spese, il nero sostiene le sezioni più
				testuali. Il risultato è un’interfaccia più chiara, meno affaticante e
				più veloce da scansionare.
			</Text>
		</section>

		{/* Tipografia e componenti */}
		<section>
			<Text type='label'>Tipografia e componenti</Text>
			<Text type='lead'>
				Il nuovo font migliora la leggibilità e rafforza la gerarchia.
				Componenti, spaziature e stati interattivi sono stati allineati per
				costruire un linguaggio coerente. Le schermate non richiedono
				interpretazione: la consistenza visiva sostiene la comprensione.
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
				Il Diario è stato riprogettato come strumento operativo: inserimento
				dati semplice e guidato, visualizzazione ordinata e leggibile,
				continuità visiva con il resto dell’app. La traduzione dal desktop al
				mobile non replica la complessità: ne mostra solo ciò che serve, nel
				momento in cui serve.
			</Text>
		</section>

		{/* Risultati */}
		<section>
			<Text type='label'>Risultati</Text>
			<Text type='lead'>
				Il redesign dell’app mobile ha prodotto un’interfaccia più leggibile,
				coerente e professionale. La navigazione è rapida anche in contesti
				d’uso non ideali e l’integrazione con il gestionale è naturale: ciò che
				serve all’utente mobile è disponibile subito, senza sacrificare la
				qualità del dato.
			</Text>

			<Text type='lead'>
				L’app non sostituisce il gestionale: lo completa. Offre un accesso
				essenziale, chiaro e progettato come parte di un ecosistema coerente.
			</Text>
		</section>
	</section>
);

function Case() {
	const { caseId } = useParams();
	const navigate = useNavigate();
	const [activeCase, setActiveCase] = useState(null);

	// Initialize activeCase from URL parameter
	useEffect(() => {
		if (caseId) {
			const normalizedCaseId = caseId.toUpperCase();
			if (['SILS', 'ACADEMY', 'UNDER'].includes(normalizedCaseId)) {
				setActiveCase(normalizedCaseId);
			}
		}
	}, [caseId]);

	const toggleCase = (caseId) => {
		if (activeCase === caseId) {
			// close: navigate back to /case
			setActiveCase(null);
			navigate('/case');
		} else {
			// open: navigate to /case/:caseId
			setActiveCase(caseId);
			navigate(`/case/${caseId.toLowerCase()}`);
		}
	};

	useEffect(() => {
		if (activeCase === null) {
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}
	}, [activeCase]);

	return (
		<>
			<SEO
				title='Casi Studio — DisciplineDesign'
				description='Casi studio su sistemi complessi: SILS, Academy e UnderControl. Dalla frammentazione a flussi unici e governabili.'
				ogUrl='https://discipline.design/cases'
				canonical='https://discipline.design/cases'
			/>

			<main>
				<article className='pt-20 pb-40'>
					<Text type='title'>Casi Studio</Text>
					<Text type='lead' className='mt-8'>
						Progettiamo sistemi digitali complessi. La nostra formazione nasce
						al Politecnico di Milano e il nostro lavoro si è consolidato
						attraverso collaborazioni continuative con enti pubblici regionali,
						tra cui Veneto Lavoro. Questi case study mostrano come interveniamo
						quando i flussi crescono più in fretta delle interfacce.
					</Text>
					<div
						role='button'
						tabIndex={0}
						onClick={() => toggleCase('SILS')}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								toggleCase('SILS');
							}
						}}
						className={`border-t border-b cursor-pointer mt-44 ${
							activeCase !== 'SILS' ? 'group' : ''
						}`}>
						<Text type='label'>Sistema Informativo per la Regione Veneto</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							SILS — Sistema Informativo Lavoro e Sociale
						</Text>

						{activeCase === 'SILS' && (
							<div className='my-24'>
								<CaseSILS />
							</div>
						)}
					</div>
					<div
						role='button'
						tabIndex={0}
						onClick={() => toggleCase('ACADEMY')}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								toggleCase('ACADEMY');
							}
						}}
						className={`transition-colors border-b cursor-pointer ${
							activeCase !== 'ACADEMY' ? 'group' : ''
						}`}>
						<Text type='label'>
							HRMS per la formazione dei dipendenti di Veneto Lavoro
						</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							Academy Veneto Lavoro Gestionale
						</Text>
						{activeCase === 'ACADEMY' && (
							<div className='my-24'>
								<CaseAcademy />
							</div>
						)}
					</div>
					<div
						role='button'
						tabIndex={0}
						onClick={() => toggleCase('UNDER')}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								toggleCase('UNDER');
							}
						}}
						className={`transition-colors border-b cursor-pointer ${
							activeCase !== 'UNDER' ? 'group' : ''
						}`}>
						<Text type='label'>interfaccia mobile</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							UnderControl
						</Text>
						{activeCase === 'UNDER' && (
							<div className='my-24'>
								<CaseUnder />
							</div>
						)}
					</div>
				</article>
			</main>
		</>
	);
}

export default Case;
