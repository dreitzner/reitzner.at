<script lang="ts">
	import ItemList from '$lib/components/ItemList.svelte';
	import type {Talk} from 'src/global'
	export let data: {talks: Talk[]};

</script>

<h1>Alle meine Talks und Podcasts</h1>

<ItemList items={data.talks} />
