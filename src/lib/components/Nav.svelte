<script lang="ts">
	//  Broken somehow
	// import { page } from '$app/stores';
	import Wappen from '$lib/icons/Wappen.svelte';

	const { pathname } = $props() as { pathname: string };
</script>

<nav class="flex">
	<a
		class="logo flex"
		aria-current={'/' === pathname ? 'page' : undefined}
		href="/"
		title="home"
	>
		<span class="sr-only">Home</span>
		<Wappen />
	</a>
	<ul>
		<li>
			<a
				rel="prefetch"
				aria-current={'/projects' === pathname ? 'page' : undefined}
				href="/projects"
			>
				projects
			</a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={'/music' === pathname ? 'page' : undefined}
				href="/music"
			>
				music
			</a>
		</li>
		<li class="spacer"></li>
		<li>
			<a
				rel="prefetch"
				aria-current={pathname.startsWith('/content') || pathname.startsWith('/talks/')
					? 'page'
					: undefined}
				href="/content"
			>
				content
			</a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={'/links' === pathname ? 'page' : undefined}
				href="/links"
			>
				links
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		justify-content: center;
		--spacer-width: 5.5rem;
	}

	@media (max-width: 640px) {
		ul {
			width: 100vw;
		}
	}
	@media (min-width: 641px) {
		nav {
			--spacer-width: 8rem;
		}

		ul::before,
		ul::after {
			content: '';
		}
	}

	ul {
		--menu-item-width: calc((100% - var(--spacer-width)) / 4);
		display: grid;
		grid-template-columns:
			var(--menu-item-width) var(--menu-item-width) var(--spacer-width) var(--menu-item-width)
			var(--menu-item-width);
		justify-items: center;
		margin: 0;
		padding: 0;
		background-color: var(--color-blue);
		color: #fff;
		font-weight: 600;
		height: var(--nav-height);
		position: relative;
		list-style: none;
		--tringle-width: 15px;
	}

	ul::before,
	ul::after {
		display: block;
		width: 0;
		height: 0;
		border-style: solid;
		position: absolute;
		top: 0;
		transition: scale 0.35s ease-out;
	}
	ul::before {
		left: calc(-1 * var(--tringle-width));
		border-width: 0 var(--tringle-width) var(--nav-height) 0;
		border-color: transparent var(--color-blue) transparent transparent;
		transform-origin: right;
	}
	ul::after {
		right: calc(-1 * var(--tringle-width));
		border-width: 0 0 var(--nav-height) var(--tringle-width);
		border-color: transparent transparent transparent var(--color-blue);
		transform-origin: left;
	}

	/* ul:hover::before,
	ul:focus-within::before,
	ul:hover::after,
	ul:focus-within::after {
		scale: 1.25 1;
	} */

	li {
		position: relative;
	}
	li a::before {
		position: absolute;
		content: '';
		width: 80%;
		height: 5px;
		background-color: var(--color-yellow);
		display: block;
		left: 10%;
		top: 0;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		translate: 0 -20px;
		scale: 0.2 1;
		opacity: 1;
		transition:
			translate 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			scale 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			opaacity 0.5s ease-in;
	}

	li a:focus,
	.logo:focus {
		outline: 3px dashed var(--color-yellow);
	}
	li a:hover::before,
	li a:focus::before {
		opacity: 0.5;
	}
	li a:hover::before,
	li a:focus::before,
	li a[aria-current]::before {
		translate: 0 -2px;
		scale: 1;
	}
	li a[aria-current]::before {
		opacity: 1;
	}

	li a {
		text-decoration: none;
		padding: 0.5em 1.5em;
		display: block;
	}

	a :global(.wappen) {
		height: calc(var(--spacer-width) / 3);
		padding: 0.5rem;
	}
	.logo {
		position: absolute;
		width: var(--spacer-width);
		height: var(--spacer-width);
		border-radius: 50%;
		transform: translateY(calc(var(--spacer-width) / -2));
		justify-content: center;
		align-items: flex-end;
		z-index: 1;
		background-color: rgba(53, 53, 53, 0.53);
	}

	.logo[aria-current] {
		animation: anmiationLogo 3.5s infinite;
	}

	@keyframes anmiationLogo {
		0% {
			box-shadow: inset 0px 0px 0px var(--color-yellow);
		}
		12% {
			box-shadow: inset 0px 0px 8px var(--color-yellow);
		}
		17% {
			box-shadow: inset 0px 0px 10px var(--color-yellow);
		}
		22% {
			box-shadow: inset 0px 0px 8px var(--color-yellow);
		}
		34% {
			box-shadow: inset 0px 0px 0px var(--color-yellow);
		}
		38% {
			box-shadow: inset 0px 0px 4px var(--color-yellow);
		}
		42.5% {
			box-shadow: inset 0px 0px 5px var(--color-yellow);
		}
		47% {
			box-shadow: inset 0px 0px 4px var(--color-yellow);
		}
		51% {
			box-shadow: inset 0px 0px 0px var(--color-yellow);
		}
		100% {
			box-shadow: inset 0px 0px 0px var(--color-yellow);
		}
	}

	.spacer {
		width: var(--spacer-width);
	}
</style>
