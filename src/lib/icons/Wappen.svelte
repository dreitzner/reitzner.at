<svg version="1.1" viewBox="0 0 520 570" xmlns="http://www.w3.org/2000/svg" class="wappen">
	<title>Reitzner-Wappen</title>
	<desc>Das Wappen der Familie Reitzner version 1.1</desc>
	<defs>
		<filter id="a" x="0" y="0" width="520" height="570" filterUnits="userSpaceOnUse">
			<feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="4" />
			<feOffset dx="3" dy="3" in="blur" result="offsetBlur" />
			<feSpecularLighting
				lighting-color="#555"
				in="blur"
				result="specOut"
				specularConstant=".75"
				specularExponent="20"
			>
				<fePointLight x="-5000" y="-10000" z="20000" />
			</feSpecularLighting>
			<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
			<feComposite
				in="SourceGraphic"
				in2="specOut"
				k2="1"
				k3="1"
				operator="arithmetic"
				result="litPaint"
			/>
			<feMerge>
				<feMergeNode in="offsetBlur" />
				<feMergeNode in="litPaint" />
			</feMerge>
		</filter>
	</defs>
	<g transform="translate(10,10)">
		<path
			d="m88 0l-88 98 30 103v139a1 1 0 0 0 465 -40 160 80 45 0 0 -31 -87 160 80 225 0 1 0 -107l24-18 11-42-55-46h-356"
			fill="#0D47A1"
			filter="url(#a)"
			stroke-width="0"
		/>
		<path
			stroke-width="0"
			fill="#FFC107"
			filter="url(#a)"
			d="m200 317a35 30 0 0 1 -31 -38l7-17-20-12a100 69 162 0 0 44 97L248 347 248 410l-17 46a3 3 0 0 0 3 3l26-41a5 5 0 0 1 6 0l26 41a3 3 0 0 0 3 -3l-17-46L278 347 326 347 a35 30 0 0 1 32 32 35 30 0 0 1 -23 21 70 70 0 0 1 -11 2 5 5 0 0 0 0 3 40 40 0 0 0 36 -5 5 5 0 0 1 7 3 60 60 0 0 0 16 33 3 3 0 0 0 3 -2 50 50 0 0 1 -2 -37l3-10a100 69 162 0 0 -61 -70L278 317 278 169 384 169 384 139 278 139 278 50 248 50 248 139 142 139 142 169 248 169 L248 317z"
		/>
	</g>
</svg>
