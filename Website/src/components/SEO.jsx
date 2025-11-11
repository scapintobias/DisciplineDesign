import { Helmet } from 'react-helmet';

const SEO = ({
	title = 'DisciplineDesign',
	description = 'Siamo il ponte tra chi vuole il software e chi lo sviluppa. Traduciamo idee e necessità in progetti di UX e UI chiari, approvati e pronti per lo sviluppo.',
	keywords = 'UX, UI, design, software, progettazione, user experience, user interface',
	ogImage = '/og-image.jpg',
	ogUrl = 'https://discipline.design',
	canonical = 'https://discipline.design',
}) => {
	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<link rel='canonical' href={canonical} />

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={ogUrl} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={ogImage} />

			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={ogUrl} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={ogImage} />

			{/* Structured Data / JSON-LD */}
			<script type='application/ld+json'>
				{`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DisciplineDesign",
            "url": "${ogUrl}",
            "logo": "${ogUrl}/logo.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Italia"
            },
            "service": {
              "@type": "Service",
              "name": "Progettazione UX/UI",
              "description": "Traduciamo idee e necessità in progetti di UX e UI chiari, approvati e pronti per essere sviluppati senza intoppi."
            }
          }
        `}
			</script>
		</Helmet>
	);
};

export default SEO;
