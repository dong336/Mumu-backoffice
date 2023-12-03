export async function fetchGet(url) {
	const response = await fetch(url, {
		method: 'GET',
	});
	const jsonData = await response.json();
	console.log(jsonData);
}

export async function fetchPost(url, data) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data),
	});
	const jsonData = await response.json();
	console.log(jsonData);
}
