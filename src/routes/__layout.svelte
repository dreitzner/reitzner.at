<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	const titleFallback = 'Home';
	let firstUrlSegment;
	let title = '';
	let headerImg;

	afterNavigate(({ to }) => {
		firstUrlSegment = to.pathname.split('/')[1] || titleFallback;
		title = firstUrlSegment.slice(0, 1).toUpperCase() + firstUrlSegment.slice(1);
		headerImg = ['Music'].includes(title) ? title : titleFallback;
	});
</script>

<svelte:head>
	<title>reitzner.at - {title}</title>
	<meta property="og:title" content="reitzner.at - {title}" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content="https://reitzner.at/img/og/{headerImg}>" />
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
