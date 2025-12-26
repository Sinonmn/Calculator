const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let current = "";


numButtons.forEach(button => {
	button.addEventListener('click', () => {
		current += button.value;
		display.value = current;
	});
});


opButtons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.value === "√") {
			current = Math.sqrt(Number(current));
		} else if (button.value === "²") {
			current = Number(current) ** 2;
		} else {
			current += button.value;
		}
		display.value = current;
	});
});


clear.addEventListener('click', () => {
	current = "";
	display.value = "";
});


equals.addEventListener('click', () => {
	let result = 0;

	if (current.includes('+')) {
		const [a, b] = current.split('+').map(Number);
		result = a + b;
	} else if (current.includes('-')) {
		const [a, b] = current.split('-').map(Number);
		result = a - b;
	} else {
		result = Number(current); 
	}

	display.value = result;
	current = String(result); 
});
