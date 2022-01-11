const posts = [
	{
        title: 'Podcast: Real Talk Javascript E83',
        date: '2020-05-12',
		slug: 'podcast-real-talk-js-e83',
		html: `
            <p>Craig und John reden mit Domenik Reitzner über Svelte. Kann man weniger Code schreiben und boilerplate-freie  Komponenten mit HTML, CSS, and Javascript schreiben? Wie geht das ohne cli? Wie ist es mit Svelte zu entwickeln und aus welchen Gründen würde man es nicht für sein Projekt verwenden?</p>
            <a class="link -pre" href="https://realtalkjavascript.simplecast.com/episodes/episode-83-online-store-with-svelte-domenik-reitzner" target="_blank">Podcast auf Englisch</a>
		`
    },
	{
        title: 'Mobile API',
        date: '2017-05-05',
		slug: 'mobile-api',
		html: `
            <p>Zielsetzung war es eine kleine Spielewiese für die HTML5 mobile API zu erstellen. Da noch nicht alle Funktionen in den jeweiligen Browsern implementiert sind, da die Standardiesierung noch nicht abgeschlossen ist, kann es sein, das nicht alle Features funktionieren.</p>
            <a class="link -pre" href="https://reitzner.at/extern/poc/mobile/" target="_blank">Spielwiese</a>
		`
    },
    {
        title: 'POC Grid vs. Flex',
        date: '2017-03-03',
        slug: 'poc-grid-vs-flex',
        html: `
            <p>Es wurde ein simples Design sowohl mit CSS grid, als auch mit CSS flex-box umgesetzt. Das Hauptaugenmerk war es die Unterschiede beider Technologien gegenüber zu stellen.</p>
            <a class="link -pre" href="https://reitzner.at/extern/poc/gridvsflex/grid.htm" target="_blank">Grid</a>
            <a class="link -pre" href="https://reitzner.at/extern/poc/gridvsflex/flex.htm" target="_blank">Flex</a>
        `
    },
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const date2Number = (string: string) => (new Date(string)).getMilliseconds();

posts.sort((a, b) =>  date2Number(b.date) - date2Number(a.date));

export default posts;