<script>
	import ItemList from '$lib/components/ItemList.svelte';
	export let data;
</script>

<h1>Blog posts</h1>

<ItemList items={data.posts} />
