//==================================================================
function createMultiplicationTable() {
	const resultingTable = {};

	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			resultingTable[`${i} * ${j} = `] = j * i;
		}
	}
	return resultingTable;
}

console.table(createMultiplicationTable());