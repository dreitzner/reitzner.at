<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	let { status } = $props();
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>reitzner.at - {status}</title>
</svelte:head>

<h1>{$page.status}</h1>

<p>{$page.error?.message ?? 'Some Error'}</p>
