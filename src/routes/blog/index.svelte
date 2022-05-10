<script>
	export let posts;

	const getYear = (dateString) => new Date(dateString).getFullYear();
</script>

<h1>Blog posts</h1>

<ul>
	{#each posts as post}
		<li>
			{#if post.url}
				<a class="flex link" href={post.url} target="_blank" rel="noopener noreferrer">
					<img src={post.image} alt={post.title} />
					<span>{getYear(post.date)}</span>
					{post.title}
				</a>
			{:else}
				<a rel="prefetch" class="flex link" href="/blog/{post.slug}">
					<img src="/img/blog/{post.slug}.jpg" alt={post.title} />
					<span>{getYear(post.date)}</span>
					{post.title}
				</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		line-height: 1.5;
		list-style: none;
	}

	li {
		padding: 0.8rem 0;
	}

	a {
		align-items: center;
		gap: 1.2rem;
	}

	img {
		height: 34px;
		width: 34px;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid rgba(200, 200, 200, 0.2);
	}

	span {
		background-color: var(--color-blue);
		color: white;
		padding: 0.1rem 0.4rem;
		font-size: 12px;
		position: absolute;
		transform: translateY(17px);
	}

	@media (min-width: 480px) {
		img {
			height: 50px;
			width: 50px;
		}
		span {
			transform: translate3d(25px, 17px, 0);
		}
	}
</style>
