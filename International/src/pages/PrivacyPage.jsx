import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Body } from '../components/ui';

/**
 * PrivacyPage - Privacy policy page
 */
export default function PrivacyPage({ lang = 'en' }) {
	const copy =
		{
			en: {
				title: 'Privacy Policy',
				intro:
					'We use privacy-friendly, cookieless analytics and only collect information that helps us run this site and respond to enquiries.',
				lastUpdated: 'Last updated: May 7, 2024',
				sections: [
					{
						title: 'Who we are and how to contact us',
						body: [
							'DisciplineDesign is the controller for this site.',
							'For any privacy questions or requests, write to info@discipline.design.',
						],
					},
					{
						title: 'What we collect',
						body: [
							'Site analytics: We use Cloudflare Web Analytics to measure traffic, pages viewed, approximate region, device/browser information, and referrers. The analytics are cookieless and do not use advertising identifiers.',
							'Contact details you choose to share: If you email us or submit a form, we receive the information you provide (for example, name, email, organisation, message).',
						],
					},
					{
						title: 'How we use your information',
						body: [
							'To understand how the site is used and improve performance and reliability.',
							'To respond to enquiries and manage client relationships.',
							'To maintain security and prevent abuse of our services.',
						],
					},
					{
						title: 'Legal bases',
						body: [
							'Legitimate interests to operate and protect the site and to understand its performance.',
							'Legitimate interests to respond to messages and maintain business relationships.',
						],
					},
					{
						title: 'Retention',
						body: [
							'Analytics data is stored in aggregated form by Cloudflare; we do not use it to build individual profiles.',
							'Contact information is kept only as long as needed to respond or maintain a client relationship.',
						],
					},
					{
						title: 'Cookies and tracking',
						body: [
							'Cloudflare Web Analytics runs without cookies and does not track users across sites.',
							'We do not use marketing, advertising, or remarketing pixels.',
							'We use localStorage only to remember that you dismissed the analytics notice; it is not used for tracking.',
						],
					},
					{
						title: 'Sharing',
						body: [
							'We do not sell your data.',
							'Service providers (for example, hosting or analytics) may process limited data on our behalf and under our instructions.',
							'We may disclose information if required to meet legal obligations.',
						],
					},
					{
						title: 'Your rights',
						body: [
							'You can request access, correction, deletion, or restriction of your personal data. You can also object to processing based on legitimate interests.',
							'To exercise these rights, contact us at info@discipline.design.',
						],
					},
					{
						title: 'Changes to this notice',
						body: [
							'We may update this policy as we change our services or providers. The latest version is always available on this page.',
							'Last updated: May 7, 2024',
						],
					},
				],
			},
			it: {
				title: 'Informativa sulla Privacy',
				intro:
					'Utilizziamo analisi del traffico rispettose della privacy e senza cookie. Raccogliamo solo le informazioni necessarie per gestire il sito e rispondere alle richieste.',
				lastUpdated: 'Ultimo aggiornamento: 7 maggio 2024',
				sections: [
					{
						title: 'Chi siamo e contatti',
						body: [
							'DisciplineDesign è il titolare del trattamento per questo sito.',
							'Per domande o richieste sulla privacy, scrivi a info@discipline.design.',
						],
					},
					{
						title: 'Cosa raccogliamo',
						body: [
							'Analisi del sito: utilizziamo Cloudflare Web Analytics per misurare traffico, pagine visualizzate, area geografica approssimativa, informazioni su dispositivo/browser e referrer. Le analisi sono senza cookie e non usano identificatori pubblicitari.',
							'Dati che ci fornisci volontariamente: se ci scrivi o invii un modulo, riceviamo le informazioni che condividi (ad esempio nome, email, organizzazione, messaggio).',
						],
					},
					{
						title: 'Come usiamo le informazioni',
						body: [
							'Per capire come viene utilizzato il sito e migliorare prestazioni e affidabilità.',
							'Per rispondere alle richieste e gestire i rapporti con i clienti.',
							'Per mantenere la sicurezza e prevenire abusi dei nostri servizi.',
						],
					},
					{
						title: 'Basi giuridiche',
						body: [
							'Legittimo interesse a operare e proteggere il sito e a comprenderne le prestazioni.',
							'Legittimo interesse a rispondere ai messaggi e mantenere i rapporti commerciali.',
						],
					},
					{
						title: 'Conservazione',
						body: [
							'I dati analitici sono memorizzati in forma aggregata da Cloudflare; non li utilizziamo per creare profili individuali.',
							'Le informazioni di contatto vengono conservate solo per il tempo necessario a rispondere o mantenere un rapporto con il cliente.',
						],
					},
					{
						title: 'Cookie e tracciamento',
						body: [
							'Cloudflare Web Analytics funziona senza cookie e non traccia gli utenti su siti diversi.',
							'Non utilizziamo cookie pubblicitari, di marketing o di remarketing.',
							'Usiamo il localStorage solo per ricordare che hai chiuso l’avviso sugli analytics; non viene usato per tracciarti.',
						],
					},
					{
						title: 'Condivisione',
						body: [
							'Non vendiamo i tuoi dati.',
							'I fornitori di servizi (ad esempio hosting o analisi) possono trattare dati limitati per nostro conto e secondo le nostre istruzioni.',
							'Possiamo divulgare informazioni se richiesto per adempiere a obblighi di legge.',
						],
					},
					{
						title: 'I tuoi diritti',
						body: [
							'Puoi richiedere accesso, rettifica, cancellazione o limitazione dei tuoi dati personali. Puoi anche opporti al trattamento basato su legittimo interesse.',
							'Per esercitare questi diritti, contattaci a info@discipline.design.',
						],
					},
					{
						title: 'Modifiche a questa informativa',
						body: [
							'Possiamo aggiornare questa informativa quando cambiamo servizi o fornitori. L’ultima versione è sempre disponibile in questa pagina.',
							'Ultimo aggiornamento: 7 maggio 2024',
						],
					},
				],
			},
		}[lang] || {
			title: 'Privacy Policy',
			intro:
				'We use privacy-friendly, cookieless analytics and only collect information that helps us run this site and respond to enquiries.',
			lastUpdated: 'Last updated: May 7, 2024',
			sections: [],
		};

	useDocumentTitle(copy.title, copy.intro);

	return (
		<Section spacing="xl">
			<Stack gap="xl">
				<div>
					<Heading level="h1" size="hero">
						{copy.title}
					</Heading>
					<p className="mt-6 max-w-4xl text-lg text-neutral-600">
						{copy.intro}
					</p>
					<Body size="sm" className="mt-2 text-neutral-500">
						{copy.lastUpdated}
					</Body>
				</div>

				<div className="mt-8 max-w-4xl space-y-10">
					{copy.sections.map((section, index) => (
						<div key={index} className="space-y-3">
							<Heading level="h2" size="section">
								{section.title}
							</Heading>
							<div className="space-y-2">
								{section.body.map((paragraph, idx) => (
									<Body key={idx} className="text-neutral-700">
										{paragraph}
									</Body>
								))}
							</div>
						</div>
					))}
				</div>
			</Stack>
		</Section>
	);
}
