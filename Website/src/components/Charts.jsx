import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// robust intersection hook
const useElementInView = (ref, options = { threshold: 0.15 }) => {
	const [inView, setInView] = useState(false);
	useEffect(() => {
		if (!ref || !ref.current) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setInView(true);
					obs.disconnect();
				}
			});
		}, options);
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [ref, options]);
	return inView;
};

const C = {
	primary: '#FF4500',
	yellow: '#FFDC27',
	green: '#72CA97',
	blue: '#7CB4FF',
	white: '#FFFFF7',
	black: '#2D0C00',
	grey: '#D7D7D7',
	greyTxt: '#6B6B6B',
};

export default function Charts({ type }) {
	switch (type) {
		case 'ordine':
			return <Ordine />;
		case 'problema':
			return <Problema />;
		case 'a-monte':
			return <AMonte />;
		case 'posizione':
			return <Posizione />;
		case 'risultato':
			return <Risultato />;
		case 'collaboriamo':
			return <Collaboriamo />;
		case 'roi':
			return <ROI />;
		default:
			return (
				<div className='text-sm text-gray-500'>
					Tipo grafico non riconosciuto.
				</div>
			);
	}
}

const totalDays = 31;

function Ordine() {
	const nonOttimizzato = Array.from({ length: totalDays }, (_, i) => i);
	const ottimizzato = Array.from({ length: totalDays }, (_, i) => i);

	return (
		<section>
			<h2 className='font-bold text-black'>Decisioni 80% più veloci</h2>
			<section className='flex md:items-center md:justify-center sm:gap-14 md:gap-24 md:my-20 sm:flex-col md:flex-row'>
				<div>
					<div className='grid grid-cols-7 gap-3 my-6 '>
						{nonOttimizzato.map((i) => (
							<motion.div
								key={i}
								className='w-12 h-12 rounded-full bg-[#2D0C00]'
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ delay: i * 0.02 }}
							/>
						))}
					</div>
					<h4>Non ottimizzato</h4>
				</div>
				<div>
					<div className='grid grid-cols-7 gap-3 my-6'>
						{ottimizzato.map((i) => (
							<motion.div
								key={i}
								className={`w-12 h-12 rounded-full ${
									i < 6 ? 'bg-[#FF4500]' : 'border-2 border-[#D9D9D9]'
								}`}
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ delay: i * 0.02 }}
							/>
						))}
					</div>
					<h4>Ottimizzato</h4>
				</div>
			</section>
		</section>
	);
}

function Problema() {
	const svgRefNon = useRef(null);
	const svgRefOpt = useRef(null);
	const nonInView = useElementInView(svgRefNon);
	const optInView = useElementInView(svgRefOpt);

	return (
		<section className='w-full'>
			<h2 className='font-bold text-black'>
				I costi di rework calano dal 70% al 20%
			</h2>

			{/* Non ottimizzato */}
			<svg ref={svgRefNon} viewBox='0 0 1200 160' className='w-full h-auto'>
				<rect x='0' y='50' width='1200' height='100' rx='50' fill='#D9D9D9' />
				<motion.rect
					x='0'
					y='50'
					height='100'
					rx='50'
					fill='#2D0C00'
					initial={{ width: 0 }}
					animate={nonInView ? { width: 840 } : { width: 0 }}
					transition={{ duration: 1 }}
				/>
				<motion.text
					x='770'
					y='125'
					textAnchor='middle'
					fill='#D9D9D9'
					fontWeight='900'
					style={{ fontSize: 'clamp(65px, 5vw, 72px)' }}
					initial={{ opacity: 0 }}
					animate={nonInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.5 }}>
					70
				</motion.text>
			</svg>
			<h4 className='sm:pl-3 md:pl-12'>Non ottimizzato</h4>

			{/* Ottimizzato */}
			<svg ref={svgRefOpt} viewBox='0 0 1200 160' className='w-full h-auto'>
				<rect x='0' y='50' width='1200' height='100' rx='50' fill='#D9D9D9' />
				<motion.rect
					x='0'
					y='50'
					height='100'
					rx='50'
					fill='#FF4500'
					initial={{ width: 0 }}
					animate={optInView ? { width: 240 } : { width: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				/>
				<motion.text
					x='170'
					y='125'
					textAnchor='middle'
					fill='#D9D9D9'
					fontWeight='900'
					style={{ fontSize: 'clamp(65px, 5vw, 72px)' }}
					initial={{ opacity: 0 }}
					animate={optInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.8 }}>
					20
				</motion.text>
			</svg>
			<h4 className='sm:pl-3 md:pl-12'>Ottimizzato</h4>
		</section>
	);
}

function AMonte() {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const leftInView = useElementInView(leftRef);
	const rightInView = useElementInView(rightRef);

	const leftCircles = [
		[349.646, 215.646, 20.6461, '#2D0C00', 0],
		[390.646, 290.646, 20.6461, '#2D0C00', 0.05],
		[250.646, 253.646, 20.6461, '#2D0C00', 0.1],
		[170.646, 41.6461, 20.6461, '#2D0C00', 0.15],
		[308.646, 95.6461, 20.6461, '#2D0C00', 0.2],
		[373.5, 133.5, 37.5, '#72CA97', 0.25],
		[60.5, 217.5, 37.5, '#2D0C00', 0.3],
		[272.5, 316.5, 37.5, '#6C757D', 0.35],
		[259.5, 37.5, 37.5, '#2D0C00', 0.4],
		[107, 128, 46, '#6390CC', 0.45],
		[46, 330, 46, '#2D0C00', 0.5],
		[271, 162, 46, '#2D0C00', 0.55],
		[163.5, 253.5, 45.5, '#FFDC27', 0.6],
		[133.5, 453.5, 45.5, '#FF4500', 0.65],
		[290.5, 433.5, 45.5, '#2D0C00', 0.7],
		[184.646, 367.646, 20.6461, '#2D0C00', 0.75],
	];

	const rightNodes = [
		['circle', { cx: 99.9102, cy: 108.146, r: 10, fill: '#FF4500', delay: 0 }],
		['circle', { cx: 103, cy: 181, r: 10, fill: '#FF4500', delay: 0.05 }],
		['circle', { cx: 103, cy: 252, r: 10, fill: '#FF4500', delay: 0.1 }],
		['circle', { cx: 103, cy: 322, r: 10, fill: '#FF4500', delay: 0.15 }],
		[
			'path',
			{
				d: 'M109.91 37.9214C109.91 43.4443 105.433 47.9214 99.9102 47.9214C94.3873 47.9214 89.9102 43.4443 89.9102 37.9214C89.9102 32.3986 94.3873 27.9214 99.9102 27.9214C105.433 27.9214 109.91 32.3986 109.91 37.9214Z',
				fill: '#FF4500',
				delay: 0.2,
			},
		],
		['circle', { cx: 284, cy: 111, r: 10, fill: '#FF4500', delay: 0.25 }],
		['circle', { cx: 284, cy: 181, r: 10, fill: '#FF4500', delay: 0.3 }],
		['circle', { cx: 284, cy: 252, r: 10, fill: '#FF4500', delay: 0.35 }],
		['circle', { cx: 284, cy: 322, r: 10, fill: '#FF4500', delay: 0.4 }],
		[
			'path',
			{
				d: 'M294 41.0001C294 46.5229 289.523 51.0001 284 51.0001C278.477 51.0001 274 46.5229 274 41.0001C274 35.4772 278.477 31.0001 284 31.0001C289.523 31.0001 294 35.4772 294 41.0001Z',
				fill: '#FF4500',
				delay: 0.45,
			},
		],
		[
			'circle',
			{ cx: 10.0225, cy: 67.4158, r: 10, fill: '#FF4500', delay: 0.5 },
		],
		[
			'circle',
			{ cx: 10.0225, cy: 137.64, r: 10, fill: '#FF4500', delay: 0.55 },
		],
		[
			'circle',
			{ cx: 10.0225, cy: 207.865, r: 10, fill: '#FF4500', delay: 0.6 },
		],
		[
			'circle',
			{ cx: 10.0225, cy: 278.09, r: 10, fill: '#FF4500', delay: 0.65 },
		],
		['circle', { cx: 374, cy: 70, r: 10, fill: '#FF4500', delay: 0.7 }],
		['circle', { cx: 374, cy: 141, r: 10, fill: '#FF4500', delay: 0.75 }],
		['circle', { cx: 374, cy: 211, r: 10, fill: '#FF4500', delay: 0.8 }],
		['circle', { cx: 374, cy: 281, r: 10, fill: '#FF4500', delay: 0.85 }],
		['circle', { cx: 193, cy: 150, r: 10, fill: '#FF4500', delay: 0.9 }],
		['circle', { cx: 193, cy: 221, r: 10, fill: '#FF4500', delay: 0.95 }],
		['circle', { cx: 193, cy: 291, r: 10, fill: '#FF4500', delay: 1 }],
		['circle', { cx: 193, cy: 361, r: 10, fill: '#FF4500', delay: 1.05 }],
		[
			'path',
			{
				d: 'M203 80.0001C203 85.5229 198.523 90.0001 193 90.0001C187.477 90.0001 183 85.5229 183 80.0001C183 74.4772 187.477 70.0001 193 70.0001C198.523 70.0001 203 74.4772 203 80.0001Z',
				fill: '#FF4500',
				delay: 1.1,
			},
		],
		[
			'path',
			{
				d: 'M203 10.0001C203 15.5229 198.523 20.0001 193 20.0001C187.477 20.0001 183 15.5229 183 10.0001C183 4.47721 187.477 5.88322e-05 193 5.88322e-05C198.523 5.88322e-05 203 4.47721 203 10.0001Z',
				fill: '#FF4500',
				delay: 1.15,
			},
		],
	];

	return (
		<section className='w-full my-20'>
			<h2 className='font-bold text-black'>
				Ambiguità iniziali ridotte del 90%
			</h2>

			<section className='justify-between t:flex gap-x-20'>
				{/* --- Frame 3 (random a sinistra) --- */}
				<div className='flex flex-col'>
					<svg
						ref={leftRef}
						width='500'
						height='700'
						viewBox='0 0 412 499'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-auto sm:mx-auto'>
						{leftCircles.map(([cx, cy, r, fill, delay], idx) => (
							<motion.circle
								key={idx}
								cx={cx}
								cy={cy}
								r={r}
								fill={fill}
								initial={{ scale: 0, opacity: 0 }}
								animate={
									leftInView
										? { scale: 1, opacity: 1 }
										: { scale: 0, opacity: 0 }
								}
								transition={{ duration: 0.4, delay }}
							/>
						))}
					</svg>
					<h4 className='md:mt-4 sm:self-start'>Non ottimizzato</h4>
				</div>
				<div className='flex flex-col items-center'>
					<svg
						ref={rightRef}
						width='500'
						height='700'
						viewBox='0 0 384 371'
						xmlns='http://www.w3.org/2000/svg'
						className='h-auto sm:w-5/6 md:w-full '>
						{rightNodes.map(([type, props], idx) => {
							if (type === 'circle') {
								return (
									<motion.circle
										key={idx}
										cx={props.cx}
										cy={props.cy}
										r={props.r}
										fill={props.fill}
										initial={{ scale: 0, opacity: 0 }}
										animate={
											rightInView
												? { scale: 1, opacity: 1 }
												: { scale: 0, opacity: 0 }
										}
										transition={{ duration: 0.35, delay: props.delay }}
									/>
								);
							}
							return (
								<motion.path
									key={idx}
									d={props.d}
									fill={props.fill}
									initial={{ scale: 0, opacity: 0 }}
									animate={
										rightInView
											? { scale: 1, opacity: 1 }
											: { scale: 0, opacity: 0 }
									}
									transition={{ duration: 0.35, delay: props.delay }}
								/>
							);
						})}
					</svg>
					<h4 className='md:mt-4 sm:self-start'>Ottimizzato</h4>
				</div>
			</section>
		</section>
	);
}
