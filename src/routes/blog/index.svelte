<script>
	import ItemList from '$lib/components/ItemList.svelte';
	export let posts;
</script>

<h1>Blog posts</h1>

<ItemList items={posts} />
