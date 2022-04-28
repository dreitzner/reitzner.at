<script>
	let loaded;
	$: {
		if (loaded) {
			const nameTime = moment('2009-09-09 12:00:00');
			const weddingTime = moment('2009-09-12 15:00:00');
			const timeObj = {};
			window.setInterval(() => {
				const now = moment();
				const newTimeObj = {
					'#value__sec--name': now.diff(nameTime, 'seconds'),
					'#value__sec--wedding': now.diff(weddingTime, 'seconds'),
					'#value__min--name': now.diff(nameTime, 'minutes'),
					'#value__min--wedding': now.diff(weddingTime, 'minutes'),
					'#value__hour--name': now.diff(nameTime, 'hours'),
					'#value__hour--wedding': now.diff(weddingTime, 'hours'),
					'#value__day--name': now.diff(nameTime, 'days'),
					'#value__day--wedding': now.diff(weddingTime, 'days'),
					'#value__week--name': now.diff(nameTime, 'weeks'),
					'#value__week--wedding': now.diff(weddingTime, 'weeks'),
					'#value__mon--name': now.diff(nameTime, 'months'),
					'#value__mon--wedding': now.diff(weddingTime, 'months'),
					'#value__qua--name': Math.floor(now.diff(nameTime, 'months') / 3),
					'#value__qua--wedding': Math.floor(now.diff(weddingTime, 'months') / 3),
					'#value__year--name': now.diff(nameTime, 'years'),
					'#value__year--wedding': now.diff(weddingTime, 'years')
				};
				for (const selector in newTimeObj) {
					if (timeObj[selector] && timeObj[selector] === newTimeObj[selector]) return;
					timeObj[selector] = newTimeObj[selector];
					document.querySelector(selector).innerHTML = newTimeObj[selector];
				}
			}, 1000);
		}
	}
</script>

<svelte:head>
    <script on:load={() => loaded = true} src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>
<div class="grid">
	<div id="empty-corner" />
	<div id="heading__name">Gleichheißen</div>
	<div id="heading__wedding">Hochzeit</div>
	<div id="heading__sec">Sekunden</div>
	<div id="value__sec--name" />
	<div id="value__sec--wedding" />
	<div id="heading__min">Minuten</div>
	<div id="value__min--name" />
	<div id="value__min--wedding" />
	<div id="heading__hour">Stunden</div>
	<div id="value__hour--name" />
	<div id="value__hour--wedding" />
	<div id="heading__day">Tage</div>
	<div id="value__day--name" />
	<div id="value__day--wedding" />
	<div id="heading__week">Wochen</div>
	<div id="value__week--name" />
	<div id="value__week--wedding" />
	<div id="heading__mon">Monate</div>
	<div id="value__mon--name" />
	<div id="value__mon--wedding" />
	<div id="heading__qua">Quartale</div>
	<div id="value__qua--name" />
	<div id="value__qua--wedding" />
	<div id="heading__year">Jahre</div>
	<div id="value__year--name" />
	<div id="value__year--wedding" />
</div>

<style>
	.grid {
        margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, minmax(min-content, max-content));
		grid-auto-rows: auto;
		text-align: right;
	}
	.grid div {
		padding: 10px;
	}
</style>
