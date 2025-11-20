import SEO from '../components/SEO';
import { useEffect, useRef } from 'react';
import Charts from '../components/Charts';
import Text from '../components/text';

export default function Home() {
	const patternRef = useRef(null);

	useEffect(() => {
		if (!patternRef.current) return;
		let ticking = false;

		const update = () => {
			const y = window.scrollY || window.pageYOffset;
			const vh = window.innerHeight || document.documentElement.clientHeight;

			if (y >= vh) {
				patternRef.current.style.opacity = '0';
				patternRef.current.style.pointerEvents = 'none';
			} else if (y <= vh - 3) {
				patternRef.current.style.opacity = '1';
				patternRef.current.style.pointerEvents = '';
			}
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', update);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<>
			<SEO
				title='DisciplineDesign — Architetture e sistemi per software complessi'
				description='Progettiamo architetture, flussi e interfacce per software complessi, lavorando a fianco delle software house per ridurre ambiguità e accelerare lo sviluppo.'
				ogUrl='https://discipline.design'
				canonical='https://discipline.design'
				ogImage='/og-image.jpg'
			/>

			<header>
				<div className='fixed inset-0 z-0'>
					<img
						src='/home.avif'
						alt='DisciplineDesign - UX/UI progettazione professionale'
						className='object-cover w-full h-full'
						ref={patternRef}
						aria-hidden='true'
						style={{ transition: 'opacity 180ms linear', opacity: 1 }}
					/>
				</div>

				<div className='relative h-screen'>
					<div className='sticky z-10 max-w-screen-xl mx-auto top-1/2 -translate-y-1/4 sm:px-4'>
						<img
							src='logo.svg'
							alt='DisciplineDesign Logo'
							className='w-screen'
						/>
						<div className='font-light tracking-tight text-white 2xl:text-9xl xl:text-8xl lg:text-7xl l:text-6xl md:text-5xl t:text-4xl sm:text-3xl'>
							Software a misura d'uomo
						</div>
					</div>
				</div>
			</header>

			<main>
				<article className='flex flex-col pt-20 pb-40 sm:gap-32 md:gap-52'>
					{/* INTRO */}
					<section className='pb-30'>
						<Text type='title'>L'architettura prima del codice.</Text>

						<Text type='lead' className='mt-4'>
							Prodotti che funzionano — e continuano a farlo.
						</Text>

						<Text type='lead' className='mt-6'>
							Trasformiamo idee, requisiti e vincoli in sistemi chiari:
							architetture, flussi, prototipi e interfacce che i team tecnici
							possono implementare senza incertezze.
						</Text>

						<Text type='lead' className='mt-6'>
							Lavoriamo accanto a product team, stakeholder e sviluppatori per
							ridurre ambiguità, accelerare le decisioni e garantire che ciò che
							viene progettato arrivi al codice in forma chiara, verificabile e
							completa.
						</Text>

						<Text type='lead' className='mt-6'>
							Il nostro lavoro riduce la complessità, previene incomprensioni e
							crea una base solida su cui costruire software stabile e
							affidabile.
						</Text>

						<button type='button' className='mt-8'>
							<a href='mailto:info@discipline.design?subject=Parliamone'>
								Parliamone
							</a>
						</button>
					</section>

					<Charts type='ordine' />

					{/* IL PROBLEMA */}
					<section>
						<Text type='label'>Il problema</Text>

						<Text type='title'>Oggi si corre. A volte troppo.</Text>

						<Text type='lead' className='mt-6'>
							Il codice parte prima ancora che il problema sia davvero definito.
						</Text>

						<Text type='lead' className='mt-6'>
							Questo genera flussi che crescono a strati, interfacce incoerenti,
							ticket infiniti, decisioni rimandate e correzioni continue.
						</Text>

						<Text type='lead' className='mt-6'>
							Non è una questione di tecnologia: è una questione di struttura.
						</Text>
					</section>

					<Charts type='problema' />

					{/* CHI SIAMO */}
					<section>
						<Text type='label'>Chi siamo</Text>

						<Text type='title'>
							Siamo un collettivo di designer formati al Politecnico di Milano
							in progettazione di sistemi complessi, orientati a far funzionare
							i prodotti nel loro insieme, non solo le schermate, con
							l’obiettivo di creare soluzioni che funzionano oggi e continuano a
							funzionare domani.
						</Text>

						<Text type='lead' className='mt-6'>
							Non ci limitiamo alle interfacce: lavoriamo su requisiti, processi
							e flussi per chiarire ciò che spesso resta implicito.
						</Text>

						<Text type='lead' className='mt-6'>
							Progettiamo architetture e percorsi che permettono ai team tecnici
							di lavorare con sicurezza, senza marggi di interpretazione.
						</Text>

						<Text type='lead' className='mt-6'>
							Collaboriamo con software house e product team come partner
							affidabili, senza aggiungere burocrazia: un diagramma chiaro vale
							più di una riunione infinita, un prototipo concreto parla più di
							mille spiegazioni.
						</Text>

						<Text type='lead' className='mt-6'>
							Amiamo la documentazione chiara, i processi ordinati e i progetti
							che resistono nel tempo. Il nostro lavoro riduce l’entropia,
							accelera lo sviluppo e costruisce basi solide per prodotti
							duraturi.
						</Text>
					</section>

					{/* IL RISULTATO */}
					<section>
						<Text type='label'>Il risultato</Text>

						<Text type='lead' className='mt-6'>
							Prodotti chiari, coerenti e più facili da mantenere.
						</Text>

						<Text type='lead' className='mt-6'>
							Meno errori, meno confusione, meno interventi d’emergenza.
						</Text>

						<Text type='lead' className='mt-6'>
							Sviluppo più veloce e più stabile.
						</Text>

						<Text type='lead' className='mt-6'>
							Decisioni nette invece di compromessi continui.
						</Text>

						<Text type='lead' className='mt-6'>
							Una base che non crolla quando il prodotto scala.
						</Text>
					</section>
					<Charts type='a-monte' />
					{/* METODO */}
					<section>
						<Text type='label'>Metodo</Text>

						<Text type='title'>
							Dal problema al codice, senza zone d’ombra.
						</Text>

						<div className='flex flex-col mt-6 space-y-12'>
							<div>
								<Text type='subsection'>Analisi e requisiti</Text>
								<Text type='lead'>
									Raccogliamo bisogni, ruoli e vincoli e li traduciamo in
									informazioni chiare: così tutti sanno cosa serve e perché.
								</Text>
							</div>

							<div>
								<Text type='subsection'>Architettura e flussi</Text>
								<Text type='lead'>
									Disegniamo entità, stati, percorsi e casi limite, creando una
									mappa comprensibile di come il prodotto deve funzionare.
								</Text>
							</div>

							<div>
								<Text type='subsection'>Design system e UI</Text>
								<Text type='lead'>
									Progettiamo componenti, interfacce e pattern che rispecchiano
									la logica del sistema, pronti per lo sviluppo.
								</Text>
							</div>

							<div>
								<Text type='subsection'>Handoff tecnico</Text>
								<Text type='lead'>
									Consegniamo specifiche precise e decisioni documentate: gli
									sviluppatori sanno cosa fare senza dover indovinare.
								</Text>
							</div>

							<div>
								<Text type='subsection'>Follow-up</Text>
								<Text type='lead'>
									Dopo il rilascio controlliamo risultati e feedback,
									aggiustiamo ciò che serve e manteniamo la coerenza del
									prodotto nel tempo.
								</Text>
							</div>
						</div>
					</section>

					{/* UNA REGOLA SEMPLICE */}
					<section>
						<Text type='title'>Una regola semplice</Text>

						<Text type='lead' className='mt-6'>
							Investire un’ora nella progettazione può risparmiare settimane di
							correzioni.
						</Text>

						<Text type='lead' className='mt-6'>
							Con un modello chiaro, il team sviluppa senza dubbi e gli utenti
							trovano subito un’interfaccia che funziona.
						</Text>
					</section>
				</article>
			</main>
		</>
	);
}
