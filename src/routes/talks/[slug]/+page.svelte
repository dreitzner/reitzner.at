<script lang="ts">
	import { getDateFromString } from '$lib/services/date';
	import type { Talk } from 'src/global';
	export let data: {talk: Talk};
	const hasRelAndTarget = (url: string) => url.startsWith('http');
</script>

<img src="/img{data.talk.slug}-header.jpg" alt="header {data.talk.title}" />

<h1>{data.talk.title} ({getDateFromString(data.talk.date)})</h1>
<p>{data.talk.description}</p>

{#if data.talk.assets.length}
	<h2>Resources</h2>
	{#each data.talk.assets as { url, name }}
		<a
			class="link -pre"
			href={url}
			rel={hasRelAndTarget(url) ? 'noopener noreferrer' : null}
			target={hasRelAndTarget(url) ? '_blank' : null}>{name}</a
		>
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
