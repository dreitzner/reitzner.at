<script lang="ts">
	const nameDate = new Date('2009-09-09T12:00:00');
	const weddingDate = new Date('2009-09-12T15:00:00');
	const nameTime = nameDate.getTime();
	const weddingTime = weddingDate.getTime();
	let now = $state(new Date());
	const nowTime = $derived(now.getTime());
	const secName = $derived(Math.floor((nowTime - nameTime) / 1000));
	const secWed = $derived(Math.floor((nowTime - weddingTime) / 1000));
	const minName = $derived(Math.floor(secName / 60));
	const minWed = $derived(Math.floor(secWed / 60));
	const hourName = $derived(Math.floor(minName / 60));
	const hourWed = $derived(Math.floor(minWed / 60));
	const dayName = $derived(Math.floor(hourName / 24));
	const dayWed = $derived(Math.floor(hourWed / 24));
	const weekName = $derived(Math.floor(dayName / 7));
	const weekWed = $derived(Math.floor(dayWed / 7));
	const yearName = $derived(Math.abs(new Date(nowTime - nameTime).getFullYear() - 1970));
	const yearWed = $derived(Math.abs(new Date(nowTime - weddingTime).getFullYear() - 1970));
	const monName = $derived(
		yearName * 12 + new Date(nowTime - nameTime).getMonth() + getMonthAdjust(nameDate),
	);
	const monWed = $derived(
		yearWed * 12 + new Date(nowTime - weddingTime).getMonth() + getMonthAdjust(weddingDate),
	);
	const quaName = $derived(Math.floor(monName / 3));
	const quaWed = $derived(Math.floor(monWed / 3));

	function getMonthAdjust(date: Date) {
		const nowDays = now.getDate();
		const dateDays = date.getDate();
		if (nowDays < dateDays) return 0;
		if (nowDays > dateDays) return 1;
		return nowDays >= dateDays && now.getHours() >= date.getHours() ? 1 : 0;
	}

	$effect(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 100);

		return () => clearInterval(interval);
	});
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
		font-size: 1.125rem;
		justify-content: center;
		div {
			padding: 0.675rem;

			&:nth-child(-n + 3),
			&:nth-child(3n + 1) {
				font-weight: bold;
			}
		}
	}
</style>
