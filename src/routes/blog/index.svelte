<script>
	export let posts;

	const getYear = dateString => new Date(dateString).getFullYear();
</script>

<style>
  ul {
    padding: 0;
    line-height: 1.5;
    list-style: none;
  }

  li {
	  margin: .5em 0;
  }

  a {
    align-items: center;
  }

  img {
    height: 25px;
    width: 25px;
    object-fit: cover;
    width: auto;
    border-radius: 50%;
    margin-right: 0.5em;
    border: 3px solid rgba(200, 200, 200, 0.2);
  }

  @media (min-width: 480px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
</style>

<svelte:head>
  <title>reitzner.at - Blog</title>
</svelte:head>

<h1>Blog posts</h1>

<ul>
  {#each posts as post}
    <li>
      {#if post.url}
      <a class="flex link" href="{post.url}">
        <img src="{post.image}" alt={post.title} />
        {post.title} [{getYear(post.date)}]
      </a>
      {:else}
      <a rel="prefetch" class="flex link" href="/blog/{post.slug}">
        <img src="/img/blog/{post.slug}.jpg" alt={post.title} />
        {post.title} [{getYear(post.date)}]
      </a>
      {/if}
    </li>
  {/each}
</ul>
