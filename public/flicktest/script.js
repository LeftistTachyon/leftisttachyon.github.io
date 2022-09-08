(() => {
	// Readouts
	const stdReadout = document.getElementById("std-rxn"),
			stdStdDevReadout = document.getElementById("std-stddev"),
			flickReadout = document.getElementById("flick-rxn"),
			flickStdDevReadout = document.getElementById("flick-stddev"),
			diffReadout = document.getElementById("rxn-diff"),
			diffStdDevReadout = document.getElementById("rxn-stddev");

	// Standard reaction time
	const stdStart = document.getElementById("std-start"),
			stdArea = document.getElementById("std-area");
	let stdSum = 0, stdAttempts = 0, stdToGo = 0, stdLastFlashed = null,
			stdSum2 = 0, stdStdDev = 0;

	// to start test
	stdStart.addEventListener('click', () => {
		stdStart.disabled = true;
		stdToGo = 5;
		startStd();
	});

	function startStd() {
		// reset test
		stdArea.style.backgroundColor = 'darkblue';
		
		// prepare flash
		setTimeout(() => {
			stdArea.style.backgroundColor = 'yellow';
			stdLastFlashed = new Date();
		}, 2000 + Math.random() * 5000);
	}

	function stdReaction() {
		if(stdLastFlashed) {
			// update data
			let time = (new Date()) - stdLastFlashed;
			console.log(`std: ${time} ms`);
			stdSum += time;
			stdSum2 += time * time;
			stdLastFlashed = null;
			stdAttempts++;
			
			// update readouts
			let stdAvg = stdSum / stdAttempts;
			stdReadout.innerHTML = Math.round(stdAvg);
			let variance = stdSum2 / stdAttempts - stdAvg * stdAvg;
			stdStdDev = Math.sqrt(variance) / stdAttempts;
			stdStdDevReadout.innerHTML = Math.round(stdStdDev);
			updateDiffReadout();
			
			if(--stdToGo) {
				startStd();
			} else {
				stdArea.style.backgroundColor = 'transparent';
				stdStart.disabled = false;
			}
		}
	}
	stdArea.addEventListener('click', stdReaction);
	document.body.addEventListener('keydown', stdReaction);

	// Flick reaction time
	const flickStart = document.getElementById("flick-start"),
			flickArea = document.getElementById("flick-area");
	let flickSum = 0, flickAttempts = 0, flickToGo = 0, flickLastFlashed = null,
			flickSum2 = 0, flickStdDev = 0;

	// to start test
	flickStart.addEventListener('click', () => {
		flickStart.disabled = true;
		flickToGo = 5;
		startFlick();
	});

	function startFlick() {
		// reset test
		flickArea.style.backgroundColor = 'darkblue';
		
		// prepare flash
		setTimeout(() => {
			flickArea.style.backgroundColor = 'yellow';
			flickLastFlashed = new Date();
		}, 2000 + Math.random() * 5000);
	}

	flickArea.addEventListener('mousemove', () => {
		if(flickLastFlashed) {
			// update data
			let time = (new Date()) - flickLastFlashed;
			console.log(`flick: ${time} ms`);
			flickSum += time;
			flickSum2 += time * time;
			flickLastFlashed = null;
			flickAttempts++;
			
			// update readouts
			let flickAvg = flickSum / flickAttempts;
			flickReadout.innerHTML = Math.round(flickAvg);
			let variance = flickSum2 / flickAttempts - flickAvg * flickAvg;
			flickStdDev = Math.sqrt(variance) / flickAttempts;
			flickStdDevReadout.innerHTML = Math.round(flickStdDev);
			updateDiffReadout();
			
			if(--flickToGo) {
				startFlick();
			} else {
				flickArea.style.backgroundColor = 'transparent';
				flickStart.disabled = false;
			}
		}
	});

	function updateDiffReadout() {
		if(stdAttempts && flickAttempts) {
			diffReadout.innerHTML = Math.round(Math.abs(flickSum / flickAttempts - stdSum / stdAttempts));
			diffStdDevReadout.innerHTML = Math.round(Math.hypot(stdStdDev, flickStdDev));
		}
	}
})();
