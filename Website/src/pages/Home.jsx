import Footer from '../components/footer';
import SEO from '../components/SEO';
import Cards from '../components/cards';
import { useEffect, useRef } from 'react';
import Charts from '../components/Charts';

export default function Home() {
	const patternRef = useRef(null);

	useEffect(() => {
		if (!patternRef.current) return;
		let ticking = false;

		const update = () => {
			const y = window.scrollY || window.pageYOffset;
			const vh = window.innerHeight || document.documentElement.clientHeight;
			// hide when scrolled past 100vh, show again when scrolled back up even 3px
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

		// initial state
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
			<SEO />
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
						<p className='font-light tracking-tight text-white 2xl:text-9xl xl:text-8xl lg:text-7xl l:text-6xl md:text-5xl t:text-4xl sm:text-3xl'>
							Software a misura d'uomo
						</p>
					</div>
				</div>
			</header>

			<main>
				<content className='flex flex-col pt-20 pb-40 sm:gap-32 md:gap-52'>
					<div>
						<div className='pb-30'>
							<h1>Mettiamo ordine prima del codice</h1>
							<div>
								<h2>
									Siamo il ponte tra chi ha bisogno del software e chi lo
									sviluppa.&nbsp;
									<br className='hidden lg:inline' />
									Traduciamo idee e necessità in progetti di UX e UI chiari,
									approvati e pronti per essere sviluppati senza intoppi.
								</h2>
								<h2 className='mt-12'>
									Lavoriamo a fianco di product team e stakeholder per
									trasformare esigenze in progetti UX chiari: ricerca, flussi,
									prototipi e validazione, pronti per lo sviluppo.
								</h2>
							</div>
							<button type='button'>
								<a
									id='ctaMail'
									href='mailto:hello@discipline-design.it?subject=Parliamone'
									className=''>
									iniziamo a parlarne
								</a>
							</button>
						</div>
					</div>
					<Charts type='ordine' />
					<div>
						<h1 className='scroll-mt-32' id='servizi'>
							Servizi
						</h1>
						<Cards />
					</div>
					<Charts type='a-monte' />
					<div>
						<h4>Il problema</h4>
						<h1>
							Oggi lo sviluppo software è veloce.
							<br />
							Forse troppo.
						</h1>
						<h2>
							Il cliente spiega cosa vuole, il team tecnico apre l’IDE e inizia
							a scrivere codice.
						</h2>
						<h2 className='mt-6'>
							In teoria, è un modo per arrivare prima al risultato.
						</h2>
						<h2 className='mt-6'>
							In pratica, è l’inizio di una serie infinita di correzioni,
							revisioni e compromessi.
						</h2>

						<h2 className='mt-6 font-medium text-black'>
							L’interfaccia si complica, gli utenti si perdono, i ticket di
							supporto aumentano e lo sviluppo rallenta.
						</h2>
					</div>
					<Charts type='problema' />

					<div>
						<h4>Chi siamo</h4>
						<h1>
							Siamo un collettivo di designer con forti radici nella ricerca UX
							e un approccio orientato al prodotto.
						</h1>
						<h2>
							Progettiamo esperienze digitali complete: dalla struttura dei dati
							ai design system, dalle interfacce all’adozione da parte degli
							utenti.
						</h2>
						<h2 className='mt-6'>
							Amiamo la documentazione chiara, i processi ordinati e i progetti
							che resistono nel tempo.
						</h2>
						<h2 className='mt-6'>
							Non siamo consulenti esterni, ma parte del processo: un punto
							d’incontro tra design, sviluppo e strategia.
						</h2>
						<h2 className='mt-6'>
							Il nostro lavoro riduce l’incertezza, accelera lo sviluppo e
							aumenta il ROI di ogni progetto.
						</h2>
					</div>

					<div>
						<h4>il risultato</h4>
						<h2>Adozione rapida da parte degli utenti finali</h2>
						<h2>Team di supporto alleggerito</h2>
						<h2>Sviluppo più veloce e senza revisioni infinite</h2>
						<h2>Prodotto moderno, affidabile e di alto valore</h2>
					</div>

					<div>
						<h4>Metodo</h4>
						<h1>
							Dal problema alla soluzione,
							<br />
							senza salti nel vuoto.
						</h1>
						<h2>
							Il nostro metodo integra ricerca, design e strategia in un flusso
							continuo.
						</h2>
						<h2>
							Ogni passaggio è{' '}
							<span className='text-black '>
								verificabile&nbsp;
								<br className='sm:inline l:hidden' />
								documentato e condiviso.
							</span>
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>
								Ricerca e analisi UX
							</span>{' '}
							— osserviamo utenti reali, testiamo scenari e raccogliamo
							evidenze.&nbsp;
							<br className='sm:inline l:hidden' />
							Ogni decisione parte dai dati.
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>
								Architettura e flussi
							</span>{' '}
							— strutturiamo contenuti e percorsi logici per rendere il software
							semplice e navigabile.
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>Design system</span> —
							costruiamo linguaggi modulari che uniscono UX, UI e sviluppo in un
							ecosistema coerente e scalabile.
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>
								UI e product design
							</span>{' '}
							— definiamo interfacce chiare, accessibili e orientate ai
							risultati di business.
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>
								Hand-off e supporto
							</span>{' '}
							— documentiamo tutto con specifiche tecniche precise, garantendo
							uno sviluppo fluido e senza ambiguità.
						</h2>
						<h2 className='mt-6'>
							<span className='font-medium text-black'>Follow-up continuo</span>{' '}
							— dopo il rilascio analizziamo metriche e feedback, mantenendo
							coerenza e qualità nel tempo.
						</h2>
						<h2 className='mt-10 font-medium text-black'>
							La progettazione UX non è una fase:
							<br />è la spina dorsale di ogni prodotto che funziona.
						</h2>
					</div>

					<div>
						<h1>
							Un’ora spesa a progettare bene ne risparmia dieci di correzioni.
						</h1>
						<h2>
							Con noi, la software house può concentrarsi sul codice, il cliente
							ottiene ciò che si aspettava, e gli utenti finali hanno
							un’esperienza chiara fin dal primo click.
						</h2>
					</div>

					<section
						id='contatti'
						className='flex flex-col gap-32 pb-40 mt-20 scroll-mt-20'>
						<div>
							<h1 className='font-light leading-loose text-ruby-400'>
								Pronti a migliorare&nbsp;
								<span className='font-bold tracking-tighter text-ruby-400'>
									la vostra UX
								</span>
								?
							</h1>
							<h2 className='leading-relaxed'>
								Parliamo del vostro prodotto: capiamo gli utenti, definiamo i
								flussi giusti e consegniamo interfacce pronte per lo sviluppo.
								<br />
								Un’ora di confronto può risparmiare settimane di correzioni.
							</h2>
						</div>
						<div className='flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
							<div>
								<h4>Parliamo del progetto</h4>
								<h3>
									Descrivici in poche righe cosa vuoi ottenere e ti rispondiamo
									con il prossimo passo concreto.
								</h3>
								<div className='space-y-4'>
									<button type='button'>
										<a href='mailto:info@discipline.design?subject=Progetto%20UX'>
											chiacchieriamo
										</a>
									</button>
								</div>
							</div>

							<div>
								<h4>Servizi rapidi</h4>
								<h3>
									Offriamo discovery sprint, test di usabilità e prototipi
									rapidi — ideali per validare ipotesi senza impegnare lo
									sviluppo.
								</h3>
								<button type='button'>
									<a href='mailto:info@discipline.design?subject=Sprint%20Discovery'>
										Richiesta sprint
									</a>
								</button>
							</div>
						</div>
					</section>
				</content>
			</main>

			<Footer />
		</>
	);
}
