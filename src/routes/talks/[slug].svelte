<script lang="ts">
	import { getDateFromString } from '$lib/services/date';
	import type { Talk } from 'src/global';
	export let talk: Talk;
</script>

<img src="/img{talk.slug}-header.jpg" alt="header {talk.title}" />

<h1>{talk.title} ({getDateFromString(talk.date)})</h1>
<p>{talk.description}</p>

{#if talk.assets.length}
	<h2>Resources</h2>
	{#each talk.assets as asset}
		<a class="link -pre" href={asset.url}>{asset.name}</a>
	{/each}
{/if}

<div class="back">
	<a class="link -pre" href="/talks">Alle Talks</a>
</div>

<style>
	img {
		width: 100%;
	}
	.back {
		padding: 2em 0;
	}
</style>
