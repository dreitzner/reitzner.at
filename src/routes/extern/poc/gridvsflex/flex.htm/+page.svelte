<section>
	<header>
		<a href="#left">Nav Left</a>
		<a href="#right">Nav Right</a>
	</header>
	<main>
		<article>MAIN CONTENT</article>
		<nav>SIDE NAV</nav>
		<aside>ASIDE</aside>
	</main>
	<footer>FOOTER</footer>
</section>

<style>
	section {
		display: flex;
		margin: 0;
		flex-direction: column;
		background: #2c3e50;
		font-family: Helvetica;
	}

	a {
		text-decoration: none;
		color: black;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	main > *,
	header,
	footer {
		margin: 4px;
		padding: 5px;
		border-radius: 7px;
	}

	main {
		display: flex;
		flex-basis: 800px;
	}

	article {
		flex: 4 0 60%;
		background: #ecf0f1;
	}

	nav {
		flex: 1 1 20%;
		background: #95a5a6;
		order: -1;
	}

	aside {
		flex: 1 1 20%;
		background: #3498db;
	}

	header,
	footer {
		background: #1abc9c;
		flex-basis: 100px;
	}

	@media all and (max-width: 640px) {
		main {
			flex-direction: column;
			flex-grow: 1;
		}

		nav {
			order: 0;
		}

		header,
		footer {
			flex-basis: 50px;
		}
	}
</style>
