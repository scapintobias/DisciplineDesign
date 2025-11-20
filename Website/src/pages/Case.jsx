import { Link } from 'react-router-dom';
import Text from '../components/text';
import SEO from '../components/SEO';

function Case() {
	return (
		<>
			<SEO
				title='Casi Studio — DisciplineDesign'
				description='Casi studio su sistemi complessi: SILS, Academy e UnderControl. Dalla frammentazione a flussi unici e governabili.'
				ogUrl='https://discipline.design/casi'
				canonical='https://discipline.design/casi'
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

					<Link to='/casi/sils' className='block border-t border-b mt-44 group'>
						<Text type='label'>Sistema Informativo per la Regione Veneto</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							SILS — Sistema Informativo Lavoro e Sociale
						</Text>
					</Link>

					<Link to='/casi/academy' className='block border-b group'>
						<Text type='label'>
							HRMS per la formazione dei dipendenti di Veneto Lavoro
						</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							Academy Veneto Lavoro Gestionale
						</Text>
					</Link>

					<Link to='/casi/under' className='block border-b group'>
						<Text type='label'>interfaccia mobile</Text>
						<Text
							type='subtitle'
							className='mt-16 font-bold text-black transition-colors group-hover:text-ruby-400'>
							UnderControl
						</Text>
					</Link>
				</article>
			</main>
		</>
	);
}

export default Case;
