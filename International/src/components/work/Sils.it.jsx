/** @format */

export const meta = {
	title: 'SILS — Sistema Informativo Unificato per i Servizi Sociali',
	slug: 'sils-system',
	client: 'Regione Veneto',
	summary:
		'Un sistema unico dove prima nove enti seguivano regole e flussi differenti.',
	sector: 'Settore Pubblico / Servizi Sociali',
	featured: true,
	publishedAt: '2024-03-10',
	lang: 'it',
	metrics: [
		{ label: 'Enti locali unificati', value: '9' },
		{ label: 'Processi coperti', value: 'End-to-end' },
	],
	coverImage: '/cases/sils.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Architettura informativa per le politiche sociali regionali
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					Nove AULSS, nove interpretazioni dello stesso processo, nove
					modi diversi di gestire le Politiche Sociali. SILS
					ricostruisce questo quadro frammentato in un sistema unico e
					verificabile.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architettura
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Prima di SILS, ogni territorio utilizzava strumenti, formati
					e procedure proprie per gestire gli interventi sociali.
					L’obiettivo non era “installare un nuovo software”, ma
					definire un modello strutturale comune che eliminasse
					l’ambiguità alla radice.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Il lavoro ha portato alla progettazione di un’unica ossatura
					esplicita:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>ruoli e responsabilità chiari;</li>
					<li>
						un ciclo di vita condiviso per utenti, percorsi,
						attività e rendicontazioni;
					</li>
					<li>stessi stati e stesse regole per tutte le AULSS.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Ogni azione ha ora un luogo preciso nel sistema, una
					posizione nella sequenza e dipendenze definite.
					L’architettura riduce la necessità di conoscenze tacite e
					interpretazioni locali.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Sistemi
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Il cambio principale è stato l’introduzione di un flusso
					end-to-end unico: dalla presa in carico alla chiusura.
					Verifiche, titolarità, percorsi, attività, documenti,
					erogazioni e monitoraggio seguono la stessa logica,
					indipendentemente dal territorio in cui avvengono.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					La rendicontazione, storicamente la parte più faticosa,
					diventa una conseguenza naturale del sistema. I dati vengono
					raccolti lungo il percorso, nel punto corretto del processo,
					invece di essere ricostruiti alla fine da tracce parziali.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					A livello regionale, il monitoraggio passa dalla stima
					all’evidenza:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>percorsi e attività attive;</li>
					<li>carico dei servizi;</li>
					<li>utilizzo e stato dei fondi;</li>
					<li>avanzamento rispetto agli obiettivi.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Non è una dashboard scenografica, ma una lettura lineare
					sostenuta da un modello dati finalmente stabile.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interfaccia
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’interfaccia è volutamente sobria. Serve a rendere visibile
					l’ordine: layout lineari, componenti prevedibili, stati
					espliciti. Le schermate sono progettate per sostenere
					decisioni complesse, non per stupire visivamente.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Per le software house e i team tecnici, SILS introduce
					prevedibilità. Quando ogni modulo segue la stessa logica e
					stati e ruoli sono completamente definiti, lo sviluppo
					diventa lineare: le integrazioni non richiedono più
					“archeologia” e le nuove funzionalità non generano effetti
					domino incontrollati.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Conclusione
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					SILS non è nato per essere “il nuovo software regionale”, ma
					per portare ordine dove mancava. Il risultato non è
					appariscente: è solido. Una base affidabile pensata per
					durare, a supporto di policy, operatori e sviluppo senza
					attriti.
				</p>
			</section>
		</div>
	);
}
