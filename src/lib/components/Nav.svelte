<script lang="ts">
	import { page } from '$app/stores';
	import Wappen from '$lib/icons/Wappen.svelte';
</script>

<nav class="flex">
	<a class="logo flex" href="/">
		<Wappen />
	</a>
	<ul>
		<li>
			<a aria-current={'/' === $page.url.pathname ? 'page' : undefined} href="/"> home </a>
		</li>
		<li class="space-right">
			<a
				rel="prefetch"
				aria-current={'/music' === $page.url.pathname ? 'page' : undefined}
				href="/music"
			>
				music
			</a>
		</li>

		<li class="space-left">
			<a
				rel="prefetch"
				aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}
				href="/blog"
			>
				blog
			</a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={$page.url.pathname.startsWith('/links') ? 'page' : undefined}
				href="/links"
			>
				links
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		padding: 0 1em;
    justify-content: center;
	}

	ul {
		margin: 0;
		padding: 0;
		background-color: #0D47A1;
    color: #fff;
    font-weight: 600;
    height: 40px;
    position: relative;
	}

	/* clearfix */
	ul::before, ul::after {
		content: '';
		display: block;
		width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    top: 0;
	}
	ul::before {
    left: -7px;
    border-width: 0 7px 40px 0;
    border-color: transparent #0D47A1 transparent transparent;
	}
	ul::after {
    right: -7px;
    border-width: 0 0 40px 7px;
    border-color: transparent transparent transparent #0D47A1;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::before {
		position: absolute;
		content: '';
		width: 80%;
		height: 5px;
    background-color: #FFC107;
		display: block;
		top: -2px;
		left: 10%;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	li a {
		text-decoration: none;
		padding: 0.5em 1em;
		display: block;
	}

	a :global(.wappen) {
		height: calc(40px - 0.2em);
    padding: 1rem;
	}
  .logo {
    position: absolute;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    transform: translateY(-4rem);
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
    background-color: rgba(53, 53, 53, .53);
  }

  .space-right {
    margin-right: 5rem;
  }
  
  .space-left {
    margin-left: 5rem;
  }
</style>
