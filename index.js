//==================================================================
let counter = 0;
while (true) {
	counter++;
	console.log(counter);

	if (counter >= 1000) {
		break;
	}
}

let count = 1000;
while (true) {
	console.log(count);
	count--;

	if (count < 0) {
		break;
	}
}

let counter1 = 0;
while (true) {
	counter1++;
	if (counter1 % 2 === 0) {
		console.log(counter1);
	} else if (counter1 >= 1000) {
		break;
	}
}

while (true) {
  if (counter % 2 === 1) {
    continue;
  }
  counter++;
  console.log(counter);
  if (counter >= 1000) {
    break;
  }
}