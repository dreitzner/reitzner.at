<script>
	import dr from '$lib/assets/dr.jpg';
	const marriedDelta = new Date(new Date().getTime() - new Date('2009-09-12').getTime()).getFullYear() - 1970;
</script>

<h1>Herzlich willkommen auf reitzner.at</h1>

<div class="flex">
	<div>
		<h2>Ich bin...</h2>
		<ul>
			<li>seit mehr als <a href="/time">{marriedDelta} Jahren</a> glücklich verheiratet</li>
			<li>Vater von vier tollen Kindern (zwei Jungs und zwei Mädls)</li>
			<li>ausgebildeter Mechatroniker (Schwerpunkt Robotik)</li>
			<li>ein Hobby-Webyist, der sein Hobby zum Beruf gemacht hat</li>
			<li>Web Enthusiast @ <a href="https://woom.com" rel="noopener noreferer">woom</a></li>
			<li>Musiker</li>
			<li>Blogger</li>
			<li>Gründer von <a href="https://austria.sveltesociety.dev/">Svelte Society Austria</a></li>
		</ul>
		<p>Ing. Domenik Reitzner</p>
	</div>
	<img src={dr} alt="Domenik Reitzner" />
</div>

<style>
	h1,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	img {
		align-self: flex-start;
		max-width: 25%;
		aspect-ratio: 4 / 5;
	}

  a {
    text-decoration: none;
  }
</style>
