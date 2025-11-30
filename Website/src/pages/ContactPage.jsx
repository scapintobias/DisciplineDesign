import { useDocumentTitle } from '@/lib/seo';
import { Section, Heading, Stack, Button, Card } from '../components/ui';

/**
 * ContactPage - Contact information and form
 */
export default function ContactPage({ lang = 'en' }) {
	const copy = {
		en: {
			title: 'Contact',
			description:
				'For collaborations, consultations or project discussions, write to us. We work with organisations that treat clarity as a strategic asset.',
			workWithUs: 'Work with us',
			workWithUsDesc:
				'We typically engage with organisations for 3–6 month projects, focusing on one core system at a time.',
			email: 'Email',
			location: 'Location',
			city: 'Padova, Italy',
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
				'Per collaborazioni, consulenze o progetti, scrivici. Lavoriamo con organizzazioni che considerano la chiarezza un asset strategico.',
			workWithUs: 'Lavora con noi',
			workWithUsDesc:
				'Collaboriamo di solito su progetti di 3–6 mesi, concentrandoci su un sistema principale alla volta.',
			email: 'Email',
			location: 'Sede',
			city: 'Padova, Italia',
			form: {
				name: 'Nome',
				email: 'Email',
				org: 'Organizzazione',
				message: 'Dettagli del progetto',
				placeholder:
					'Raccontaci il sistema su cui stai lavorando...',
				submit: 'Invia Messaggio',
			},
		},
	}[lang] || {
		title: 'Contact',
		description:
			'For collaborations, consultations or project discussions, write to us. We work with organisations that treat clarity as a strategic asset.',
		workWithUs: 'Work with us',
		workWithUsDesc:
			'We typically engage with organisations for 3–6 month projects, focusing on one core system at a time.',
		email: 'Email',
		location: 'Location',
		city: 'Padova, Italy',
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

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submission logic would go here
		alert('Form submission not yet implemented');
	};

	return (
		<>
			<Section spacing="xl">
				<div className="max-w-4xl">
					<Stack gap="lg">
						<Heading level="h1" size="hero">
							{copy.title}
						</Heading>
						<p className="text-xl text-neutral-600">
							{copy.description}
						</p>
					</Stack>
				</div>
			</Section>

			<Section spacing="lg">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Info */}
					<Stack gap="lg">
						<div>
							<h2 className="mb-3 text-2xl font-semibold text-neutral-900">
								{copy.workWithUs}
							</h2>
							<p className="text-neutral-600">
								{copy.workWithUsDesc}
							</p>
						</div>

						<Card border={false} className="bg-neutral-50">
							<Stack gap="md">
								<div>
									<h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-neutral-600">
										{copy.email}
									</h3>
									<a
										href="mailto:info@discipline.design"
										className="text-lg text-neutral-900 hover:text-swr"
									>
										info@discipline.design
									</a>
								</div>
								<div>
									<h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-neutral-600">
										{copy.location}
									</h3>
									<p className="text-lg text-neutral-900">
										{copy.city}
									</p>
								</div>
							</Stack>
						</Card>
					</Stack>

					{/* Contact Form */}
					<Card border>
						<form onSubmit={handleSubmit}>
							<Stack gap="md">
								<div>
									<label
										htmlFor="name"
										className="mb-2 block text-sm font-medium text-neutral-700"
									>
										{copy.form.name}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-sm font-medium text-neutral-700"
									>
										{copy.form.email}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
									/>
								</div>

								<div>
									<label
										htmlFor="organisation"
										className="mb-2 block text-sm font-medium text-neutral-700"
									>
										{copy.form.org}
									</label>
									<input
										type="text"
										id="organisation"
										name="organisation"
										className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="mb-2 block text-sm font-medium text-neutral-700"
									>
										{copy.form.message}
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										required
										className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
										placeholder={copy.form.placeholder}
									/>
								</div>

								<Button
									type="submit"
									variant="primary"
									className="w-full"
								>
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
