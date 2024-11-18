import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'About', isFinal: true }
	];
	const aboutPoints = [
		`This site is built by <a class="underline text-blue-600" target="blank" href="https://berinaniesh.xyz">Berin Aniesh</a> in the hopes that it will be useful to someone.`,
		`If you have any comments or feedbacks about the site, <a target="blank" class="underline text-blue-600" href="https://berinaniesh.xyz/contact">let me know</a>.`,
		`The source code of this site is <a class="underline text-blue-600" target="blank" href="https://github.com/VerseQuick/web">open sourced</a>. Forking and self hosting is not only allowed, but encouraged.`,
		`The backend of this site can be found <a target="blank" class="underline text-blue-600" href="https://api.versequick.com/docs">here</a> and the source for the same can be found <a class="underline text-blue-600" target="blank" href="https://github.com/VerseQuick/api">here</a>.`,
		`No guarantees are made for the availability, reliability or correctness of the frontend or the backend.`,
		`Bible requests welcome as long as the translation requested is in the public domain. If the language is something other than English (or Tamil), I'll need some help with feeding the translation into the database, fixing spelling mistakes, separating verses, etc.`,
		`The same UI is also available at <a class="underline text-blue-600" href="https://bible.berinaniesh.xyz/" target="blank">bible.berinaniesh.xyz</a>`
	];
	const thanksPoints = [`I'd like to thank "Dane" for sponsoring the domain.`];
	const donationPoints = [
		`Indian Users - berinaniesh@okicici (UPI)`,
		`Worldwide - <a class="underline text-blue-600" href="https://paypal.me/berinaniesh" target="blank">paypal.me/berinaniesh</a>`
	];
	return {
		currentLocation: currentLocation,
		aboutPoints: aboutPoints,
		thanksPoints: thanksPoints,
		donationPoints: donationPoints
	};
};
