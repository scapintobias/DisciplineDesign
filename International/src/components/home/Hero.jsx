/** @format */

import { Section, Heading, Body, Stack } from '../ui';

/**
 * Hero - Homepage hero section
 * Uses exact copy as specified
 */
export default function Hero({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'We design operational clarity for organisations whose software is too important to fail.',
			subtitle:
				'We work with the people who run factories, public services and complex operations, rebuilding the systems they rely on every day.',
			kicker: 'Enterprise systems rebuilt from logic.',
		},
		it: {
			title: 'Progettiamo chiarezza operativa per organizzazioni il cui software è troppo importante per fallire.',
			subtitle:
				'Lavoriamo con le persone che mandano avanti impianti, servizi pubblici e operazioni complesse, ricostruendo i sistemi da cui dipendono ogni giorno.',
			kicker: 'Sistemi enterprise ricostruiti a partire dalla logica.',
		},
	}[lang] || {
		title: 'We design operational clarity for organisations whose software is too important to fail.',
		subtitle:
			'We work with the people who run factories, public services and complex operations, rebuilding the systems they rely on every day.',
		kicker: 'Enterprise systems rebuilt from logic.',
	};

	return (
		<Section
			spacing='3xl'
			className='pb-24 bg-white pt-28'>
			<Stack gap='md'>
				<Heading
					level='h1'
					size='display'
					tracking='tight'
					className='leading-[1.05]'>
					{copy.title}
				</Heading>
				<Body
					size='lg'
					className='max-w-3xl text-neutral-600'>
					{copy.subtitle}
					<span className='block mt-4'>{copy.kicker}</span>
				</Body>
			</Stack>
		</Section>
	);
}
