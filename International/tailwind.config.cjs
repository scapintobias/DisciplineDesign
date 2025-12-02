/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				accent: {
					DEFAULT: 'rgb(255,69,0)',
					hover: 'rgb(204,54,0)',
				},
				swr: 'rgb(255,69,0)',
			},
			fontSize: {
				// Precise typographic scale
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.15' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.05' }],
			},
			spacing: {
				// Consistent vertical rhythm
				18: '4.5rem',
				88: '22rem',
				112: '28rem',
				128: '32rem',
			},
			maxWidth: {
				'8xl': '88rem',
			},
			lineClamp: ['hover'],
		},
	},
	plugins: [],
};
