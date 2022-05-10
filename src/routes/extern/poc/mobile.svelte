<script>
	import { onMount } from 'svelte';

	let vibrateArr = [];
	let vibrateValue;

	function addVibrate() {
		vibrateArr.push(vibrateValue);
	}
	function delVibrate() {
		vibrateArr = [];
	}
	function doVibrate() {
		let vibrateSeq = vibrateArr.length
			? vibrateArr
			: [100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100];
		window.navigator.vibrate(vibrateSeq);
	}

	let batteryLevel = 77;
	let batteryStatus;
	let batteryIco = 'fa-battery-full';

	function batteryChange(battery) {
		batteryLevel = battery.level * 100;

		batteryStatus = battery.charging
			? '<i class="fa fa-bolt" aria-hidden="true"></i> Ihr Ger&auml;t wird gerade geladen.'
			: battery.dischargingTime === Infinity
			? 'Die verbleibende Zeit kann nicht abgefragt werden.'
			: 'Noch ca. ' +
			  battery.dischargingTime / 60 +
			  ' Min. verbleiben, basierend auf deiner Nutzung.';
		let batteryCharge = battery.level;
		if (batteryCharge > 0.875) {
			batteryIco = 'fa fa-battery-full';
		} else if (batteryCharge > 0.625) {
			batteryIco = 'fa fa-battery-three-quarters';
		} else if (batteryCharge > 0.375) {
			batteryIco = 'fa fa-battery-half';
		} else if (batteryCharge > 0.125) {
			batteryIco = 'fa fa-battery-quarter';
		} else {
			batteryIco = 'fa fa-battery-empty';
		}
	}

	let lux = '?';
	onMount(async () => {
		// @ts-ignore
		const battery = await navigator?.getBattery();
		if (battery) {
			batteryChange(battery);
			battery.onchargingchange = () => batteryChange(battery);
			battery.onlevelchange = () => batteryChange(battery);
			battery.ondischargingtimechange = () => batteryChange(battery);
		}

		if ('AmbientLightSensor' in window) {
			//@ts-ignore
			const sensor = new AmbientLightSensor();
			sensor.addEventListener('reading', (event) => {
				lux = sensor.illuminance;
			});
			sensor.addEventListener('error', (event) => {
				console.log(event.error.name, event.error.message);
			});
			sensor.start();
		}
	});
</script>

<svelte:head>
	<link
		href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
		rel="stylesheet"
		integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="container">
	<header>
		<h1>Viel Spa&szlig; beim Ausprobieren</h1>
		Nicht alle Funktionen sind in allen mobilen Browsern m&ouml;glich.
		<br /> F&uuml;r eine ausf&uuml;hrliche Liste besuche
		<a href="http://mobilehtml5.org/" target="_blank" rel="noopener noreferrer">diese Seite</a>.
	</header>
	<section id="vibrate">
		<h2>
			<i class="fa fa-mobile" aria-hidden="true" />
			<span>Vibration</span>
		</h2>
		<pre id="vibrateArr" class="code-example">{JSON.stringify(vibrateArr)}</pre>
		<input
			type="number"
			id="vibratems"
			placeholder="Vibration/Pause in ms"
			class="u-full-width"
			bind:value={vibrateValue}
		/>
		<button type="button" id="addVibrate" class="u-full-width" on:click={() => addVibrate()}
			>Hinzufügen</button
		>
		<button type="button" id="delVibrate" class="u-full-width" on:click={() => delVibrate()}
			>Zurück setzen</button
		>
		<button type="button" id="doVibrate" class="u-full-width" on:click={() => doVibrate()}
			>Vibrieren</button
		>
	</section>
	<section id="battery">
		<h2>
			<i class="fa {batteryIco}" aria-hidden="true" />
			<span>Akkustatus</span>
		</h2>
		<h1 class="u-pull-right">
			<i id="batteryIco" class="fa fa-battery-full" aria-hidden="true" />
		</h1>
		<h3>
			<span id="batteryPrct">{batteryLevel}</span>%
		</h3>
		<span id="batteryTime">{@html batteryStatus}</span>
	</section>
	<section id="ambientLight">
		<h2>
			<i class="fa fa-lightbulb-o" aria-hidden="true" />
			<span>Umgebungslicht</span>
		</h2>
		<span id="lux">{lux}</span>
		<a href="https://de.wikipedia.org/wiki/Lux_(Einheit)">LUX</a> werden von ihrem Umgebungslicht Sensor
		gemessen.
	</section>
	<section id="push">
		<h2>
			<i class="fa fa-bell" aria-hidden="true" />
			<span>Push Nachricht</span>
		</h2>

		bald zu sehen...
	</section>
</div>
