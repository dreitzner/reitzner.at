<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(body) {
		scrollbar-gutter: stable;
		overflow: auto;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>

<Footer />