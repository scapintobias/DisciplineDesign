/** @format */

export const meta = {
	title: 'Yape — Interfaccia di guida remota per UGV di consegna',
	slug: 'yape-remote-driving',
	client: 'Yape / e-Novia',
	summary:
		'Progettazione di un’interfaccia di guida remota per un robot di consegna autonomo, rendendo la teleoperazione sicura e leggibile grazie a ricerca HMI e human factors.',
	sector: 'Robotica & Interazione Uomo–Macchina',
	featured: false,
	publishedAt: '2018-11-01',
	lang: 'it',
	metrics: [
		{ label: 'Aree di ricerca principali', value: '3' },
		{ label: 'Criticità percettive affrontate', value: '10+' },
		{
			label: 'Impatto del milestone',
			value: 'Contributo a nuovi investitori',
		},
	],
	coverImage: '/cases/yape.png',
};

export default function YapeCaseStudy() {
	return (
		<div className='max-w-3xl mx-auto space-y-10'>
			<header className='space-y-3'>
				<h1 className='text-2xl font-medium tracking-tight text-neutral-900'>
					{meta.title}
				</h1>
				<p className='text-xs font-medium tracking-wide uppercase text-neutral-500'>
					Interfaccia di guida remota per un robot di consegna
					autonomo
				</p>
				<p className='mt-6 text-lg leading-relaxed text-neutral-800'>
					Per validare il veicolo di consegna, Yape aveva bisogno di
					una teleoperazione sicura dalla control room. Gli operatori
					guidavano usando video e sensori invece della percezione
					diretta. L’interfaccia ha reso la guida remota comprensibile
					a sufficienza per raggiungere il milestone e sbloccare la
					fase successiva di autonomia.
				</p>
			</header>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Ruolo e setup
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					Ho guidato l’interfaccia di guida tra luglio e novembre
					2018, insieme a CEO, PM, un designer industriale e uno
					sviluppatore. Meccanica e alpha di guida “a vista”
					esistevano già; il mandato era rendere la guida
					completamente remota praticabile e sicura.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					Il telaio, i motori e il software di base erano definiti. Il
					passo successivo era un’HMI utilizzabile che compensasse la
					visione filtrata e fornisse aiuti operativi minimi ma
					indispensabili per una teleoperazione affidabile.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Criticità
				</h2>
				<ul className='pl-5 space-y-1 list-disc text-neutral-800'>
					<li>
						Percezione: profondità, raggio di curva, pendenza e
						accelerazione con un feed grandangolare rumoroso.
					</li>
					<li>
						Guida: sistema di riferimento stabile, puntamento e
						sensibilità del controller calibrata.
					</li>
					<li>
						Posizionamento: rendere leggibili i dati LIDAR e il
						contesto urbano per l’operatore.
					</li>
				</ul>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Ricerca
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					La ricerca ha combinato human factors e psicologia cognitiva
					con analoghi HMI: HUD di jet da combattimento, chirurgia da
					Vinci, sensori di parcheggio e control room. Obiettivo:
					capire come cambia la percezione filtrata dagli schermi e
					quali indizi restituiscono sicurezza.
				</p>
				<p className='leading-relaxed text-neutral-800'>
					L’esplorazione tecnica ha coperto output LIDAR, distorsione
					della camera, limiti di trasmissione e vincoli del
					powertrain, per definire cosa l’interfaccia potesse mostrare
					senza sovraccaricare chi guida.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Soluzioni di interfaccia
				</h2>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Sistema di riferimento
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						Il feed della webcam era instabile: serviva un
						riferimento fisso. Una griglia nel viewport ha dato
						allineamento costante, stabilizzando rette e curve
						nonostante artefatti video.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Puntamento e direzione
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						Un mirino centrale e curve di traiettoria simili ai
						sistemi di retromarcia usano il differenziale di
						velocità delle ruote per mostrare percorsi Bezier
						previsti prima di sterzare.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Inclinazione e pendenza
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						Un indicatore ispirato all’orizzonte artificiale
						aggiunge linee verticali fissate (calibrate alla
						distorsione) con stati colore per leggere beccheggio e
						fermare il mezzo su salite o discese rischiose.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Velocità e accelerazione
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						I joystick discreti non offrivano feedback tattile. Due
						indicatori mostravano livelli di “marcia” e pressione
						sul comando, con lettura km/h sempre visibile per il
						controllo fine.
					</p>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-semibold text-neutral-900'>
						Profondità e ambiente
					</h3>
					<p className='leading-relaxed text-neutral-800'>
						Il LIDAR è stato semplificato in linee azimutali invece
						di scansioni rumorose, e una vista Mapbox compatta ad
						alto contrasto (su OpenStreetMap) dava contesto urbano
						senza distrarre dal feed principale.
					</p>
				</div>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Immagine coordinata
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’immagine coordinata del progetto — comprensiva del logo,
					del sistema simbolico, della palette cromatica e dei
					materiali di comunicazione — è stata sviluppata da{' '}
					<a
						href='https://northeast.productions'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-swr'>
						Northeast Productions
					</a>
					, la nostra controparte di visual design. Il logo Yape
					creato in questa fase è successivamente diventato un marchio
					registrato.
				</p>
			</section>

			<section className='space-y-3'>
				<h2 className='text-xl font-medium tracking-tight text-neutral-900'>
					Esito
				</h2>
				<p className='leading-relaxed text-neutral-800'>
					L’interfaccia ha consegnato un proof of concept per la
					teleoperazione, validando le ipotesi sulla guida remota e
					supportando il lavoro successivo sull’autonomia. Ha
					contribuito a ottenere nuovi investitori e piloti
					internazionali.
				</p>
			</section>
		</div>
	);
}
