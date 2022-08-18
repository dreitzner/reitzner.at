<script context="module">
	const titleFallback = 'Home';

	export async function load({ url: { href, pathname } }) {
		const firstUrlSegment = pathname.split('/')[1] || titleFallback;
		const title = firstUrlSegment.slice(0, 1).toUpperCase() + firstUrlSegment.slice(1);
		const headerImg = ['Music'].includes(title) ? title : titleFallback;
		return {
			props: {
				title,
				headerImg,
				href
			}
		};
	}
</script>

<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let title = '';
	export let headerImg;
	export let href;
</script>

<svelte:head>
	<title>reitzner.at - {title}</title>
	<meta property="og:title" content="reitzner.at - {title}" />
	<meta property="og:url" content={href} />
	<meta property="og:image" content="https://reitzner.at/img/og/{headerImg}.jpg" />

	<meta name="twitter:title" content="reitzner.at - {title}" />
	<meta name="twitter:image" content="https://reitzner.at/img/og/{headerImg}.jpg" />
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
