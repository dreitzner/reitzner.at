<script lang="ts">
	import ItemList from './ItemList.svelte';
	import { contentFilters } from '$lib/data/filters';
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1>my content</h1>
<section>
	{#each contentFilters as filter}
		{@const pathname = data.pathname}
		{@const noFilter = filter === 'all'}
		{@const filterUrl = `/content/${filter}`}
		<a
			href={noFilter ? '/content' : filterUrl}
			aria-current={(noFilter && '/content' === pathname) || pathname === filterUrl
				? 'page'
				: undefined}
		>
			<span>{filter}</span>
		</a>
	{/each}
</section>

<ItemList items={data.content} />

<style>
	section {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	a {
		position: relative;
		padding: 0.4rem 1.2rem;
		border: 3px solid var(--color-blue);
		color: var(--color-blue);
		font-size: 18px;
		font-weight: bold;
		border-radius: 5px;
		text-decoration: none;
		background-color: transparent;
		overflow: hidden;
	}

	a::after {
		content: '';
		background-color: var(--color-blue);
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
		left: 0;
		top: 0;
		translate: 0 -100%;
		transition: opacity .3s, translate .3s;
	}

	a:focus,
	a:active,
	a:hover {
		box-shadow: 0 0 8px var(--color-yellow);
	}

	a span {
		position: relative;
		z-index: 1;
	}

	a[aria-current] {
		color: var(--color-yellow);
		box-shadow: none;
	}
	a[aria-current]::after {
		translate: 0;
		opacity: 1;
	}
</style>
