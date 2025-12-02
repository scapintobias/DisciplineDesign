/** @format */

export const meta = {
	title: 'UnderControl — Interfaccia Mobile',
	slug: 'undercontrol-mobile',
	client: 'UnderControl',
	summary:
		'Un’esperienza mobile chiara e prevedibile, derivata da un sistema gestionale desktop complesso.',
	sector: 'Gestionali Enterprise',
	featured: false,
	publishedAt: '2024-02-01',
	lang: 'it',
	metrics: [
		{ label: 'Schermate ridotte', value: '35%' },
		{ label: 'Workflow primari coperti', value: '3' },
	],
	coverImage: '/cases/undercontrol.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Interfaccia mobile per un gestionale progetti aziendali
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					Un’interfaccia mobile non può essere la versione
					rimpicciolita di un gestionale desktop. Deve avere una
					propria architettura, una gerarchia chiara e un focus
					operativo preciso. Il redesign di UnderControl nasce per
					offrire su smartphone solo ciò che serve in mobilità,
					mantenendo coerenza con l’ecosistema completo.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architettura
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					UnderControl è un gestionale complesso per progetti, costi e
					attività. La piattaforma desktop include dashboard, analisi
					di marginalità, Gantt, procedure e consultazioni
					approfondite. Portare tutto questo su mobile senza filtro
					avrebbe generato rumore, non controllo.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Il lavoro sulla versione mobile ha richiesto una scelta
					architetturale netta: non “ridurre” il gestionale, ma
					selezionare con precisione ciò che ha senso fuori ufficio.
					La struttura si concentra su tre ambiti d’uso ricorrenti:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>Spese</li>
					<li>Attività</li>
					<li>Diario di progetto</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Ogni sezione corrisponde a compiti concreti svolti in
					mobilità. Report marginali, configurazioni e funzioni
					occasionali restano correttamente confinati al desktop.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Sistemi
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					La progettazione ha introdotto una logica interna
					prevedibile tra le schermate: pattern condivisi di
					navigazione, strutture dati coerenti, stati uniformi per le
					entità principali. L’utente impara il sistema una volta sola
					e lo ritrova ovunque.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Il sistema colori chiarisce il dominio informativo:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>
						il blu mantiene continuità con la piattaforma desktop;
					</li>
					<li>il giallo identifica l’area Spese;</li>
					<li>
						i toni neutri sostengono le sezioni ad alta densità
						testuale.
					</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Tipografia, spaziature e comportamento dei componenti sono
					stati allineati per contesti d’uso non ideali: cantieri,
					sopralluoghi, illuminazione scarsa, utilizzo a una mano. La
					priorità è la leggibilità, non l’effetto visivo.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interfaccia
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’interfaccia riduce al minimo lo sforzo di interpretazione.
					Le schermate principali rendono immediatamente visibili i
					dati essenziali e lasciano emergere il dettaglio solo quando
					serve. Liste, viste di dettaglio e flussi di inserimento
					seguono lo stesso schema, così che l’utente non debba mai
					“reimparare” il sistema.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Il Diario di progetto è stato ripensato come strumento
					operativo: inserimento guidato, struttura cronologica,
					continuità visiva con il resto dell’app. Le registrazioni
					non sono appunti isolati, ma parte di un sistema coerente.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Risultato
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’interfaccia mobile è oggi più leggibile, rapida e coerente
					con il gestionale desktop. La navigazione resta affidabile
					anche in contesti difficili e ogni sezione appare come parte
					di un unico prodotto, non come una copia semplificata.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					L’app non sostituisce il gestionale: lo completa. Offre un
					punto di accesso mirato, progettato specificamente per l’uso
					in mobilità e pienamente allineato alla logica del sistema
					principale.
				</p>
			</section>
		</div>
	);
}
