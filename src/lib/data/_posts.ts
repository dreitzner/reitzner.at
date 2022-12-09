const posts = [
    {
        title: 'Mobile API',
        date: '2017-05-05',
        slug: '/blog/mobile-api',
        html: `
            <p>Zielsetzung war es eine kleine Spielewiese für die HTML5 mobile API zu erstellen. Da noch nicht alle Funktionen in den jeweiligen Browsern implementiert sind, da die Standardiesierung noch nicht abgeschlossen ist, kann es sein, das nicht alle Features funktionieren.</p>
            <a class="link -pre" href="/extern/poc/mobile/">Spielwiese</a>
		`,
        type: 'blog',
    },
    {
        title: 'POC Grid vs. Flex',
        date: '2017-03-03',
        slug: '/blog/poc-grid-vs-flex',
        html: `
            <p>Es wurde ein simples Design sowohl mit CSS grid, als auch mit CSS flex-box umgesetzt. Das Hauptaugenmerk war es die Unterschiede beider Technologien gegenüber zu stellen.</p>
            <a class="link -pre" href="/extern/poc/gridvsflex/grid.htm">Grid</a>
            <a class="link -pre" href="/extern/poc/gridvsflex/flex.htm">Flex</a>
        `,
        type: 'blog',
    },
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;