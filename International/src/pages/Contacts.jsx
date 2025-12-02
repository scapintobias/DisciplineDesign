/** @format */

import { useState } from 'react';
import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Button, Card, Body } from '../components/ui';

/**
 * ContactPage - Contact information and form
 */
export default function ContactPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Contact',
			description:
				'For collaborations, consultations or project discussions, write to us.',
			descriptionSecondary:
				'We work with organisations that treat clarity as a strategic asset.',
			workWithUs: 'Work with us',
			workWithUsDesc:
				'We typically engage with organisations for 3–6 month projects, focusing on one core system at a time.',
			email: 'Email',
			location: 'Location',
			city: 'Verona, Italy',
			form: {
				name: 'Name',
				email: 'Email',
				org: 'Organisation',
				message: 'Project Details',
				placeholder: "Tell us about the system you're working on...",
				submit: 'Send Message',
			},
		},
		it: {
			title: 'Contatti',
			description:
				'Per collaborazioni, consulenze o progetti, scrivici.',
			descriptionSecondary:
				'Lavoriamo con organizzazioni che considerano la chiarezza un asset strategico.',
			workWithUs: 'Lavora con noi',
			workWithUsDesc:
				'Collaboriamo di solito su progetti di 3–6 mesi, concentrandoci su un sistema principale alla volta.',
			email: 'Email',
			location: 'Sede',
			city: 'Verona, Italia',
			form: {
				name: 'Nome',
				email: 'Email',
				org: 'Organizzazione',
				message: 'Dettagli del progetto',
				placeholder: 'Raccontaci il sistema su cui stai lavorando...',
				submit: 'Invia Messaggio',
			},
		},
	}[lang] || {
		title: 'Contact',
		description:
			'For collaborations, consultations or project discussions, write to us.',
		descriptionSecondary:
			'We work with organisations that treat clarity as a strategic asset.',
		workWithUs: 'Work with us',
		workWithUsDesc:
			'We typically engage with organisations for 3–6 month projects, focusing on one core system at a time.',
		email: 'Email',
		location: 'Location',
		city: 'Verona, Italy',
		form: {
			name: 'Name',
			email: 'Email',
			org: 'Organisation',
			message: 'Project Details',
			placeholder: "Tell us about the system you're working on...",
			submit: 'Send Message',
		},
	};

	useDocumentTitle(copy.title, copy.description);

	const [errors, setErrors] = useState({});
	const errorMessage =
		Object.keys(errors).length > 1
			? 'Please fill out these fields.'
			: 'Please fill out this field.';

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const nextErrors = {};
		if (!formData.get('name')?.trim()) nextErrors.name = copy.form.name;
		if (!formData.get('email')?.trim()) nextErrors.email = copy.form.email;
		if (!formData.get('message')?.trim())
			nextErrors.message = copy.form.message;

		setErrors(nextErrors);

		if (Object.keys(nextErrors).length > 0) return;

		// Form submission logic would go here
		alert('Form submission not yet implemented');
	};

	const fieldClass = (hasError) =>
		`w-full px-4 py-3 border rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
			hasError
				? 'border-red-400 focus:border-red-500 focus:ring-red-500'
				: 'border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500'
		}`;

	return (
		<>
			<Section spacing='xl' className='contact-page'>
				<div className='max-w-4xl'>
					<Stack gap='md'>
						<Heading
							level='h1'
							size='hero'>
							{copy.title}
						</Heading>
						<Body
							size='lg'
							className='mt-6 text-neutral-600 leading-relaxed space-y-2'>
							{copy.description}
							{copy.descriptionSecondary ? (
								<span className='block'>
									{copy.descriptionSecondary}
								</span>
							) : null}
						</Body>
					</Stack>
				</div>
			</Section>

			<Section spacing='lg'>
				<div className='grid gap-12 lg:grid-cols-2'>
					{/* Contact Info */}
					<Stack gap='lg'>
						<div>
							<h2 className='mb-3 text-2xl font-semibold text-neutral-900'>
								{copy.workWithUs}
							</h2>
							<p className='text-neutral-600'>
								{copy.workWithUsDesc}
							</p>
						</div>

						<Card
							border={false}
							className='bg-neutral-50'>
							<Stack gap='md'>
								<div>
									<h3 className='mb-2 text-sm font-medium tracking-wider uppercase text-neutral-600'>
										{copy.email}
									</h3>
									<a
										href='mailto:info@discipline.design'
										className='text-lg text-neutral-900 hover:text-swr'>
										info@discipline.design
									</a>
								</div>
								<div>
									<h3 className='mb-2 text-sm font-medium tracking-wider uppercase text-neutral-600'>
										{copy.location}
									</h3>
									<p className='text-lg text-neutral-900'>
										{copy.city}
									</p>
								</div>
							</Stack>
						</Card>
					</Stack>

					{/* Contact Form */}
					<Card border>
						<form onSubmit={handleSubmit} noValidate>
							<Stack gap='md'>
								<div>
									<label
										htmlFor='name'
										className='block mb-2 text-sm font-medium text-neutral-700'>
										{copy.form.name}
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className={fieldClass(Boolean(errors.name))}
									/>
									{errors.name && (
										<p className='mt-2 text-sm text-neutral-600'>
											{errorMessage}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor='email'
										className='block mb-2 text-sm font-medium text-neutral-700'>
										{copy.form.email}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className={fieldClass(Boolean(errors.email))}
									/>
									{errors.email && (
										<p className='mt-2 text-sm text-neutral-600'>
											{errorMessage}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor='organisation'
										className='block mb-2 text-sm font-medium text-neutral-700'>
										{copy.form.org}
									</label>
									<input
										type='text'
										id='organisation'
										name='organisation'
										className={fieldClass(false)}
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block mb-2 text-sm font-medium text-neutral-700'>
										{copy.form.message}
									</label>
									<textarea
										id='message'
										name='message'
										rows={6}
										className={fieldClass(Boolean(errors.message))}
										placeholder={copy.form.placeholder}
									/>
									{errors.message && (
										<p className='mt-2 text-sm text-neutral-600'>
											{errorMessage}
										</p>
									)}
								</div>

								<Button
									type='submit'
									variant='primary'
									className='w-full'>
									{copy.form.submit}
								</Button>
							</Stack>
						</form>
					</Card>
				</div>
			</Section>
		</>
	);
}
