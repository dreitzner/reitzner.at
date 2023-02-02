<script>
	import { onMount } from "svelte";

	/**
	 * @type {number}
	 */
	let secName;
	/**
	 * @type {number}
	 */
	let secWed;
	/**
	 * @type {number}
	 */
	let minName;
	/**
	 * @type {number}
	 */
	let minWed;
	/**
	 * @type {number}
	 */
	let hourName;
	/**
	 * @type {number}
	 */
	let hourWed;
	/**
	 * @type {number}
	 */
	let dayName;
	/**
	 * @type {number}
	 */
	let dayWed;
	/**
	 * @type {number}
	 */
	let weekName;
	/**
	 * @type {number}
	 */
	let weekWed;
	/**
	 * @type {number}
	 */
	let monName;
	/**
	 * @type {number}
	 */
	let monWed;
	/**
	 * @type {number}
	 */
	let quaName;
	/**
	 * @type {number}
	 */
	let quaWed;
	/**
	 * @type {number}
	 */
	let yearName;
	/**
	 * @type {number}
	 */
	let yearWed;

	onMount(async() => {
		const moment = (await import('moment')).default;

		const nameTime = moment('2009-09-09 12:00:00');
		const weddingTime = moment('2009-09-12 15:00:00');
		setInterval(() => {
			const now = moment();
			secName = now.diff(nameTime, 'seconds'),
			secWed = now.diff(weddingTime, 'seconds'),
			minName = now.diff(nameTime, 'minutes'),
			minWed = now.diff(weddingTime, 'minutes'),
			hourName = now.diff(nameTime, 'hours'),
			hourWed = now.diff(weddingTime, 'hours'),
			dayName = now.diff(nameTime, 'days'),
			dayWed = now.diff(weddingTime, 'days'),
			weekName = now.diff(nameTime, 'weeks'),
			weekWed = now.diff(weddingTime, 'weeks'),
			monName = now.diff(nameTime, 'months'),
			monWed = now.diff(weddingTime, 'months'),
			quaName = Math.floor(now.diff(nameTime, 'months') / 3),
			quaWed = Math.floor(now.diff(weddingTime, 'months') / 3),
			yearName = now.diff(nameTime, 'years'),
			yearWed = now.diff(weddingTime, 'years')
		}, 1000);
	})
</script>

<div class="grid">
	<div></div>
	<div>Gleichheißen</div>
	<div>Hochzeit</div>
	<div>Sekunden</div>
	<div>{secName}</div>
	<div>{secWed}</div>
	<div>Minuten</div>
	<div>{minName}</div>
	<div>{minWed}</div>
	<div>Stunden</div>
	<div>{hourName}</div>
	<div>{hourWed}</div>
	<div>Tage</div>
	<div>{dayName}</div>
	<div>{dayWed}</div>
	<div>Wochen</div>
	<div>{weekName}</div>
	<div>{weekWed}</div>
	<div>Monate</div>
	<div>{monName}</div>
	<div>{monWed}</div>
	<div>Quartale</div>
	<div>{quaName}</div>
	<div>{quaWed}</div>
	<div>Jahre</div>
	<div>{yearName}</div>
	<div>{yearWed}</div>
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
