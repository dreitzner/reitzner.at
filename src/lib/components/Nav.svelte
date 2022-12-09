<script lang="ts">
	//  Broken somehow
	// import { page } from '$app/stores';
	import Wappen from '$lib/icons/Wappen.svelte';

	export let pathname;
</script>

<nav class="flex">
	<a class="logo flex" aria-current={'/' === pathname ? 'page' : undefined} href="/" title="home">
		<span class="sr-only">Home</span>
		<Wappen />
	</a>
	<ul>
		<li>
			<a rel="prefetch" aria-current={'/projects' === pathname ? 'page' : undefined} href="/projects"> projects </a>
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
		<li class="spacer" />
		<li>
			<a
				rel="prefetch"
				aria-current={'/content' === pathname ? 'page' : undefined}
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
		--spacer-width: 5.5rem
	}

	@media (max-width: 640px) {
		ul {
			width: 100vw;
		}
	}
	@media (min-width: 641px) {
		nav {
			--spacer-width: 8rem
		}

		ul::before,
		ul::after {
			content: '';
		}
	}

	ul {
		--menu-item-width: calc((100% - var(--spacer-width)) / 4);
		display: grid;
		grid-template-columns: var(--menu-item-width) var(--menu-item-width) var(--spacer-width) var(--menu-item-width) var(--menu-item-width);
		justify-items: center;
		margin: 0;
		padding: 0;
		background-color: var(--color-blue);
		color: #fff;
		font-weight: 600;
		height: var(--nav-height);
		position: relative;
		list-style: none;
	}
	

	ul::before,
	ul::after {
		display: block;
		width: 0;
		height: 0;
		border-style: solid;
		position: absolute;
		top: 0;
	}
	ul::before {
		left: -7px;
		border-width: 0 7px var(--nav-height) 0;
		border-color: transparent var(--color-blue) transparent transparent;
	}
	ul::after {
		right: -7px;
		border-width: 0 0 var(--nav-height) 7px;
		border-color: transparent transparent transparent var(--color-blue);
	}

	li {
		position: relative;
	}
	li a::before {
		position: absolute;
		content: '';
		width: 80%;
		height: 5px;
		background-color: #ffc107;
		display: block;
		left: 10%;
		top:0;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		transform: 
			translateY(-20px)
			scaleX(.2);
		transition: transform .35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	li a[aria-current]::before {
		transform: 
			translateY(-2px)
			scaleX(1);
	}

	li a {
		text-decoration: none;
		padding: 0.5em 1.5em;
		display: block;
	}

	a :global(.wappen) {
		height: calc(var(--spacer-width) / 3);
		padding: .5rem;
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
		0% { box-shadow: inset 0px 0px 0px var(--color-yellow); }
		12% { box-shadow: inset 0px 0px 8px var(--color-yellow); }
		17% { box-shadow: inset 0px 0px 10px var(--color-yellow); }
		22% { box-shadow: inset 0px 0px 8px var(--color-yellow); }
		34% { box-shadow: inset 0px 0px 0px var(--color-yellow); }
		38% { box-shadow: inset 0px 0px 4px var(--color-yellow); }
		42.5% { box-shadow: inset 0px 0px 5px var(--color-yellow); }
		47% { box-shadow: inset 0px 0px 4px var(--color-yellow); }
		51% { box-shadow: inset 0px 0px 0px var(--color-yellow); }
		100% { box-shadow: inset 0px 0px 0px var(--color-yellow); }
	}

	.spacer {
		width: var(--spacer-width);
	}
</style>
