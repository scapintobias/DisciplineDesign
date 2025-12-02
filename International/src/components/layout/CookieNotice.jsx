/** @format */

import { useState } from 'react';
import { useLanguageFromLocation } from '@/lib/language';

const STORAGE_KEY = 'dd_cookie_notice_dismissed';

export default function CookieNotice() {
	const lang = useLanguageFromLocation();
	const basePath = lang === 'it' ? '/it' : '';
	const [isDismissed, setIsDismissed] = useState(() => {
		if (typeof window === 'undefined') return true;
		try {
			return localStorage.getItem(STORAGE_KEY) === 'true';
		} catch (error) {
			return true;
		}
	});

	if (isDismissed) return null;

	const handleDismiss = () => {
		setIsDismissed(true);
		try {
			localStorage.setItem(STORAGE_KEY, 'true');
		} catch (error) {
			// ignore storage errors
		}
	};

	return (
		<div className='fixed inset-x-0 bottom-0 z-40'>
			<div className='container-default'>
				<div className='flex flex-col gap-3 px-4 py-3 mb-4 rounded-lg shadow-lg bg-neutral-900 text-neutral-100 md:mb-6 md:flex-row md:items-center md:gap-4 md:px-6 md:py-4'>
					<div className='flex flex-col gap-2 text-sm md:flex-row md:items-center md:gap-3'>
						<p className='text-sm leading-relaxed text-neutral-300'>
							We use privacy-friendly, cookie-free analytics to
							understand how this site is used. No tracking
							cookies are stored.
						</p>
						<a
							href={`${basePath}/privacy`}
							className='inline-flex text-sm font-semibold transition-colors text-neutral-50 underline-offset-4 hover:text-swr'>
							Read about our Privacy Policy
						</a>
					</div>
					<div className='flex justify-end md:ml-auto'>
						<button
							type='button'
							onClick={handleDismiss}
							className='px-4 py-2 text-sm font-semibold transition-colors rounded-md bg-neutral-100 text-neutral-900 hover:bg-white'>
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
