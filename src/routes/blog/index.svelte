<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const res = await fetch('/blog.json');

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load blog.json`)
		};
	}
</script>

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
    width: auto;
    border-radius: 50%;
    margin-right: 0.5em;
    border: 3px solid rgba(200, 200, 200, 0.2);
  }

  @media (min-width: 480px) {
    img {
		height: 50px;
	}
  }
</style>

<svelte:head>
  <title>reitzner.at - Blog</title>
</svelte:head>

<h1>Blog posts</h1>
<p>Mehr sind unterwegs... 🚄</p>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" class="flex link" href="blog/{post.slug}">
        <img src="img/blog/{post.slug}.jpg" alt={post.title} />
        {post.title} [{getYear(post.date)}]
      </a>
    </li>
  {/each}
</ul>
