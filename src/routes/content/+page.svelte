<script lang="ts">
	import ItemList from './ItemList.svelte';
	import { contentFilters } from '$lib/data/filters';
	import type { ContentFilter } from '../../global';
	import type { PageData } from './$types';
	export let data: PageData;

	let itemFilter: ContentFilter = 'all';
</script>

<h1>my content</h1>
<section>
	<!-- Formaction? -->
	{#each contentFilters as filter}
		<input type="radio" class="sr-only" name="itemFilter" id={filter} value={filter} bind:group={itemFilter}>
		<label for={filter}>{filter}</label>
	{/each}
</section>

<ItemList items={data.content} {itemFilter} />

<style>
	section {
		display: flex;
		gap: .5rem;
		flex-wrap: wrap;
	}
	label {
		padding: .4rem 1.2rem;
		border: 3px solid var(--color-blue);
		font-size: 18px;
		border-radius: 5px;
	}

	input:focus + label,
	input:active + label,
	input:hover + label {
		box-shadow: 0 0 8px var(--color-yellow);
	}

	input:checked + label {
		background-color: var(--color-blue);
		color: var(--color-yellow);
		font-weight: bold;
		box-shadow: none;
	}
</style>
