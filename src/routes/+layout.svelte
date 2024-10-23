<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';
	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<svelte:head>
	<title>reitzner.at - {data.title}</title>
	<meta property="og:title" content="reitzner.at - {data.title}" />
	<meta property="og:url" content={data.href} />
	<meta property="og:image" content="https://reitzner.at/img/og/{data.headerImg}.jpg" />

	<meta name="twitter:title" content="reitzner.at - {data.title}" />
	<meta name="twitter:image" content="https://reitzner.at/img/og/{data.headerImg}.jpg" />
</svelte:head>

<Nav pathname={data.pathname} />

<main>
	{@render children?.()}
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
