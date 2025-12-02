/** @format */

export const meta = {
	title: 'Academy — Sistema di Gestione Formazione',
	slug: 'academy-training',
	client: 'Veneto Lavoro',
	summary:
		'Sostituire fogli di calcolo, email e passaggi manuali con un sistema di gestione formazione coerente e verificabile.',
	sector: 'Settore Pubblico / HR',
	featured: false,
	publishedAt: '2024-01-20',
	lang: 'it',
	metrics: [
		{ label: 'Ruoli validati', value: '5' },
		{ label: 'Riduzione del processo', value: '27%' },
	],
	coverImage: '/cases/academy.png',
};

export default function CaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Architettura end-to-end per la formazione obbligatoria
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					La formazione nella Pubblica Amministrazione viveva in fogli
					Excel, moduli Word, mail e aggiornamenti manuali. Academy
					sostituisce questo mosaico disordinato con un gestionale
					unico, governato da stati, ruoli e flussi chiari.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Architettura
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Il progetto è partito dalla definizione del ciclo di vita
					completo di un corso: creazione, pubblicazione,
					assegnazione, svolgimento, validazione e rendicontazione.
					Ogni fase è stata modellata in modo esplicito, con
					condizioni di ingresso, transizioni e dipendenze.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					L’Academy non è un semplice contenitore di documenti, ma una
					struttura operativa: corsi, budget, partecipanti ed esiti
					vivono nello stesso sistema, invece di disperdersi tra file
					e caselle di posta.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Sistemi
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Al centro dell’Academy c’è un flusso end-to-end continuo:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>definizione e allocazione del budget;</li>
					<li>creazione e pubblicazione dei corsi;</li>
					<li>assegnazione e iscrizione;</li>
					<li>tracciamento di presenze e completamenti;</li>
					<li>validazione e rendicontazione.</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Ogni fase produce dati completi per quella successiva. Nulla
					deve essere ricostruito manualmente a fine anno: il sistema
					accumula le informazioni necessarie mentre il processo si
					svolge.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Le notifiche non sono un accessorio, ma una protezione del
					flusso. La piattaforma avvisa su corsi in scadenza, presenze
					mancanti, ore residue, giustificativi necessari e
					rendicontazioni incomplete. Lo scopo non è “comodità”, ma
					coerenza strutturale.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Interfaccia
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’esperienza quotidiana è governata da due dashboard:
				</p>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>
						<span className='font-medium'>
							Dashboard del dipendente
						</span>{' '}
						– ore svolte, ore residue, corsi disponibili e corsi
						obbligatori, senza bisogno di calcoli manuali.
					</li>
					<li>
						<span className='font-medium'>
							Dashboard dell’amministratore
						</span>{' '}
						– budget, corsi attivi, iscrizioni, presenze, esiti e
						stato delle rendicontazioni, tutti allineati allo stesso
						ciclo di vita.
					</li>
				</ul>
				<p className='leading-relaxed text-neutral-800'>
					Interfacce e componenti condividono lo stesso linguaggio
					visivo e di interazione: gerarchie prevedibili, stati
					espliciti, assenza di ornamenti inutili. Il sistema
					privilegia la leggibilità alla scenografia.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Conclusione
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’Academy non si limita a digitalizzare fogli di calcolo; dà
					struttura a un processo che prima viveva in strumenti mai
					progettati per contenerlo. Il risultato è un gestionale
					stabile e leggibile, costruito per durare, che sostiene la
					formazione nella PA tramite design, non improvvisazione.
				</p>
			</section>
		</div>
	);
}
