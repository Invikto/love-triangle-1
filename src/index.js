module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;

	for (let i = 0, n = preferences.length; i < n; i++) {
		let condition1 = preferences[i] != (i + 1);
		let condition2 = preferences[preferences[preferences[i] - 1] - 1] === (i + 1);
		if ((condition1) && (condition2)) {
			count++;
		}
	}

	return (count / 3);
};
