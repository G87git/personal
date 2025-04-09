// import Section 		from '../structure/section';
// import Container 	from '../structure/container';

// import css 			from '../../styles/sections/projects/featured.module.scss'

// export default function ComingSoon() {
// 	return (
// 		<Section classProp={css.hasBg}>	
// 			<Container>
// 				<h2 className="fullHeight centered">Coming Soon!</h2>
// 				<style jsx>{`
// 				.fullHeight {
// 					min-height: 500px;
// 					height: 100vh;
// 					max-height: 1200px;
// 				}
// 				.centered {
// 					display: flex;
// 					justify-content: center;
// 					align-items: center;
// 				}
// 			`}</style>
// 			</Container>
// 			<div className={css.bgContainer}>
// 				<span className={css.orbitalBg}>
// 					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
// 					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
// 					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
// 				</span>
// 				<span className={css.afterGlowBg}></span>
// 			</div>
// 		</Section>
// 	)
// }


// pages/contact.js
// import { useState } from 'react';

// export default function Contact() {
// 	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// 	const [status, setStatus] = useState('');

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setStatus('Sending...');

// 		try {
// 			const response = await fetch('/api/contact', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(formData),
// 			});

// 			if (response.ok) {
// 				setStatus('Message sent successfully!');
// 				setFormData({ name: '', email: '', message: '' });
// 			} else {
// 				setStatus('Failed to send message. Please try again later.');
// 			}
// 		} catch (error) {
// 			setStatus('An error occurred. Please try again.');
// 		}
// 	};

// 	return (
// 		<div className="max-w-2xl mx-auto p-4">
// 			<h1 className="text-2xl font-bold mb-4">Contact Us</h1>
// 			<form onSubmit={handleSubmit} className="space-y-4">
// 				<div>
// 					<label className="block text-sm font-medium mb-1">Name</label>
// 					<input
// 						type="text"
// 						name="name"
// 						value={formData.name}
// 						onChange={handleChange}
// 						required
// 						className="w-full border p-2 rounded"
// 					/>
// 				</div>
// 				<div>
// 					<label className="block text-sm font-medium mb-1">Email</label>
// 					<input
// 						type="email"
// 						name="email"
// 						value={formData.email}
// 						onChange={handleChange}
// 						required
// 						className="w-full border p-2 rounded"
// 					/>
// 				</div>
// 				<div>
// 					<label className="block text-sm font-medium mb-1">Message</label>
// 					<textarea
// 						name="message"
// 						value={formData.message}
// 						onChange={handleChange}
// 						required
// 						className="w-full border p-2 rounded"
// 						rows="5"
// 					></textarea>
// 				</div>
// 				<button
// 					type="submit"
// 					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
// 				>
// 					Submit
// 				</button>
// 			</form>
// 			{status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
// 		</div>
// 	);
// }

import { useState } from 'react';
// import Container from '../components/structure/container';
import Container from '../structure/container';
import Section from '../structure/section';
// import Icon from '../components/utils/icon.util';
import Icon from '../utils/icon.util';
// import content from '../content/contact.json';
import content from '../../content/contact.json';
import css from '../../styles/sections/contact/contact.module.scss';
import SectionTitle from '../blocks/section.title.block'
import button from '../../styles/blocks/button.module.scss';



export default function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');
	const [statusType, setStatusType] = useState(''); // 'success' or 'error'
	const [loading, setLoading] = useState(false);

// 	setTimeout(() => {
// 	setStatus('');
// 	setStatusType('');
// }, 5000); // 5 seconds


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('');
		setLoading(true); // Start loading

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus(content.successMessage);
				setStatusType('success');
				setFormData({ name: '', email: '', message: '' });
			} else {
				setStatus(content.errorMessage);
				setStatusType('error');
			}
		} catch (error) {
			setStatus(content.errorMessage);
			setStatusType('error');

		}

		setLoading(false); // Stop loading

		setTimeout(() => {
		setStatus('');
		setStatusType('');
	}, 5000);
		
	};

	return (
		<Section classProp={css.hasBg}>
			<Container spacing={['verticalXXXXLrg']}>
				<SectionTitle
					title="Contact Me"
					preTitle="Let’s Connect"
					subTitle="I’m currently available for freelance or full-time web development and technical writing opportunities."
				/>
				
				<form onSubmit={handleSubmit} className={css.form}>
					{status && <p className={`${css.status} ${statusType === 'success' ? css.success : css.error}`}>
					{status}
				</p>}
					{content.fields.map(({ id, label, type, placeholder }) => (
						<div key={id} className={css.formGroup}>
							<label htmlFor={id} className={css.label}>
								{label}
							</label>
							{type === 'textarea' ? (
								<textarea
									id={id}
									name={id}
									placeholder={placeholder}
									value={formData[id]}
									onChange={handleChange}
									className={css.textarea}
									rows="5"
									required
								/>
							) : (
								<input
									id={id}
									name={id}
									type={type}
									placeholder={placeholder}
									value={formData[id]}
									onChange={handleChange}
									className={css.input}
									required
								/>
							)}
						</div>
					))}
					{/* <button type="submit" className={`button ${button.secondary}`}>
						{content.submitButton} <Icon icon={['fas', 'paper-plane']} />
					</button> */}
					<button type="submit" className={`button ${button.secondary}`} disabled={loading}>
						{loading ? (
							<span className={css.loader}></span> // Spinner when loading
						) : (
							<>
								{content.submitButton} <Icon icon={['fas', 'paper-plane']} />
							</>
						)}
					</button>
				</form>
				{/* {status && <p className={css.status}>{status}</p>} */}
			</Container>
		</Section>
	);
}
