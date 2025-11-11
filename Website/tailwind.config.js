/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Inter', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', '0.85rem'],
				'sm': ['0.875rem', '1.25rem'],
				'base': ['1rem', '1.5rem'],
				'lg': ['1.125rem', '1.75rem'],
				'xl': ['21px', '32px'],
				'2xl': ['1.5rem', '2rem'],
				'3xl': ['1.875rem', '2.25rem'],
				'4xl': ['2.25rem', '2.5rem'],
				'5xl': ['3rem', '1.2'],
				'6xl': ['3.75rem', '1.2'],
				'7xl': ['4.5rem', '1.2'],
				'8xl': ['6rem', '1.2'],
				'9xl': ['8rem', '1.2'],
			},
			fontWeight: {
				'ultra-light': 100,
				'thin': 200,
				'light': 300,
				'normal': 400,
				'medium': 500,
				'bold': 600,
				'heavy': 700,
				'black': 800,
				'extra-black': 900,
			},
			colors: {
				ruby: {
					50: '#FFD1BF',
					100: '#FFBEA6',
					200: '#FFA280',
					300: '#FF6126',
					400: '#FF4500',
				},
				charcoal: {
					50: '#eaeaea',
					100: '#d4d4d4',
					200: '#a9a9a9',
					300: '#949494',
					400: '#7f7f7f',
					500: '#696969',
					600: '#545454',
					700: '#3e3e3e',
					800: '#292929',
					900: '#212121',
					1000: '#1d1d1d',
					1100: '#191919',
					1200: '#101010',
				},
				white: '#fffff7',
				black: '#190600',
				gray: {
					600: '#86868b',
				},
				gold: {
					50: '#FFF9E0',
					100: '#FFF3B3',
					200: '#FFE97A',
					300: '#FFDC27', // base
					400: '#E6C020',
					500: '#B89A17',
					600: '#8A740F',
					700: '#5C4E07',
				},
				mint: {
					50: '#E8F8F1',
					100: '#C7F1DD',
					200: '#A4E9C8',
					300: '#72CA97', // base
					400: '#5DBB83',
					500: '#489B6A',
					600: '#337B51',
					700: '#1E5B38',
				},
				sky: {
					50: '#EAF6FF',
					100: '#CDE7FF',
					200: '#A3D2FF',
					300: '#7CB4FF', // base
					400: '#569AFF',
					500: '#3577CC',
					600: '#245799',
					700: '#153766',
				},
			},
		},
		screens: {
			'sm': '320px',
			// => @media (min-width: 320px) { ... }
			't': '600px',
			// => @media (min-width: 768px) { ... }
			'md': '767px',
			// => @media (min-width: 768px) { ... }
			'l': '960px',
			'lg': '1200px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1601px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '2560px',
			// => @media (min-width: 1536px) { ... }
		},
	},
};
