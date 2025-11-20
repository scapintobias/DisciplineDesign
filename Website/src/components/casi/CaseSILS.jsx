import Text from '../text';
import SEO from '../SEO';

function CaseSILS() {
	return (
		<>
			<SEO
				title='SILS — Sistema Informativo Lavoro e Sociale'
				description="Progettare un sistema unico dove prima c'erano dodici modi diversi di fare la stessa cosa."
				ogUrl='https://discipline.design/casi/sils'
				canonical='https://discipline.design/casi/sils'
			/>

			<main>
				<article>
					<section>
						{/* Titolo */}
						<section>
							<Text type='title'>
								SILS — Sistema Informativo Lavoro e Sociale
							</Text>
							<Text type='label'>
								Sistema Informativo per la Regione Veneto
							</Text>

							<Text type='lead' className='mt-16'>
								Progettare un sistema unico dove prima c'erano dodici modi
								diversi di fare la stessa cosa.
							</Text>
						</section>

						{/* Contesto */}
						<section>
							<Text type='label'>Contesto</Text>
							<Text type='lead'>
								Il SILS nasce da una situazione semplice: ogni AULSS del Veneto
								gestiva le Politiche Sociali con strumenti, formati e procedure
								proprie. Non era una questione di capacità, ma di impostazione
								territoriale. Con nove realtà che operano in parallelo, è
								naturale che i dati si frammentino e che il quadro complessivo
								diventi difficile da leggere.
							</Text>

							<Text type='lead'>
								Il progetto non è partito per "rifare tutto", ma per definire
								una base comune su cui tutti potessero operare senza dover
								interpretare flussi, ruoli o regole. La richiesta non era
								tecnologica: era di ordine.
							</Text>
						</section>

						{/* Architettura */}
						<section>
							<Text type='label'>Architettura</Text>
							<Text type='lead'>
								Il primo passo è stato definire un modello unico, condiviso da
								tutte le AULSS: ruoli chiari, flussi coerenti, stessi stati,
								stesse regole. Abbiamo ricostruito l'ossatura del sistema,
								definendo chi fa cosa, in quale momento, con quali vincoli. Il
								ciclo di vita dell'utente, dei percorsi, delle attività e della
								rendicontazione è stato progettato come una sequenza leggibile,
								verificabile e replicabile.
							</Text>
						</section>

						{/* Flusso unico */}
						<section>
							<Text type='label'>Flusso unico</Text>
							<Text type='lead'>
								Il cambiamento più significativo è stato la costruzione di un
								flusso unico. Prima, le informazioni si muovevano attraverso
								strumenti e procedure diverse. Con SILS, tutto parte da una
								presa in carico e arriva a una chiusura coerente: verifiche,
								titolarità, percorsi, attività, documenti, erogazioni,
								monitoraggio. Ogni passaggio è collegato al precedente e al
								successivo, senza possibilità di salto o ambiguità.
							</Text>

							<Text type='lead'>
								Non è un sistema che richiede competenze tacite o "sapere come
								si fa": il flusso rende evidente cosa deve accadere e quando.
							</Text>
						</section>

						{/* Rendicontazione */}
						<section>
							<Text type='label'>Rendicontazione</Text>
							<Text type='lead'>
								La rendicontazione, storicamente la parte più faticosa, oggi è
								una conseguenza naturale del flusso. Le informazioni necessarie
								vengono raccolte mentre il percorso procede. Non c'è più nulla
								da ricostruire a posteriori, non servono incastri o verifiche
								esterne. Tutto è già allineato, perché l'architettura è stata
								progettata per non perdere pezzi lungo il percorso.
							</Text>
						</section>

						{/* Monitoraggio */}
						<section>
							<Text type='label'>Monitoraggio</Text>
							<Text type='lead'>
								Il livello regionale dispone ora di una visione completa e
								ordinata: percorsi attivi, attività in corso, andamento dei
								finanziamenti, carico dei servizi e stato dei fondi. Non è una
								dashboard scenografica: è una lettura lineare, sostenuta da un
								modello dati che finalmente è stabile.
							</Text>
						</section>

						{/* Software house */}
						<section>
							<Text type='label'>Per le software house</Text>
							<Text type='lead'>
								Per i team tecnici, il valore del SILS sta nella prevedibilità.
								Quando ogni modulo segue la stessa logica, gli stati sono
								definiti e i ruoli non lasciano margini, lo sviluppo diventa più
								lineare. Le integrazioni non richiedono archeologia, le
								evolutive non innescano effetti domino, e il codice può crescere
								senza sorprese.
							</Text>

							<Text type='lead'>
								Abbiamo progettato il sistema per non scaricare complessità
								sullo sviluppo. La complessità viene risolta a monte, dove
								nasce. Questo permette ai team tecnici di lavorare con
								continuità invece che in emergenza.
							</Text>
						</section>

						{/* Conclusione */}
						<section>
							<Text type='label'>Conclusione</Text>
							<Text type='lead'>
								SILS non è nato per essere il "nuovo software della Regione", ma
								per portare ordine in un sistema che ne aveva bisogno. Il
								risultato non è spettacolare: è solido. Una base affidabile su
								cui costruire negli anni, capace di tenere insieme policy,
								operatori e sviluppo senza creare frizioni.
							</Text>
						</section>
					</section>
				</article>
			</main>
		</>
	);
}

export default CaseSILS;
