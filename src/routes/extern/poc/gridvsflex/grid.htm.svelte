<section>
    <header>
        <a href="">Nav Left</a>
        <a href="">Nav Right</a>
    </header>
    
    <main>
        <article>MAIN CONTENT</article>
        <nav>SIDE NAV</nav>
        <aside>ASIDE</aside>
    </main>
    <footer>FOOTER</footer>
</section>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	section {
		background: black;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto;
		grid-template-rows: auto minmax(800px, max-content) auto;
		grid-template-areas:
			'header'
			'main'
			'footer';
	}

	main > *,
	header,
	footer {
		padding: 5px;
		border-radius: 7px;
		/* min-height: 100px; */
	}

	header {
		display: flex;
		justify-content: space-between;
		flex: 1 1 100px;
		align-items: center;
		background: lightgreen;
		grid-area: header;
	}

	main {
		grid-area: main;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: auto;
		grid-template-areas: 'nav article aside';
	}

	article {
		background: white;
		grid-area: article;
	}

	nav {
		background: grey;
		grid-area: nav;
	}

	aside {
		background: cornflowerblue;
		grid-area: aside;
	}

	footer {
		background: lightgreen;
		grid-area: footer;
	}

	@media screen and (max-width: 640px) {
		main {
			grid-template-columns: 1fr;
			grid-template-rows: 5fr 1fr 1fr;
			grid-template-areas:
				'article'
				'nav'
				'aside';
		}
	}
</style>
