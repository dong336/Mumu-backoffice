export async function fetchGet(url) {
	const authorizationCookie = getCookie('Authorization');

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: authorizationCookie ? authorizationCookie : '', // 쿠키가 존재하면 헤더에 추가
		},
	});
	const jsonData = await response.json();
	console.log('respBody: ', jsonData);

	return jsonData;
}

export async function fetchPost(url, data) {
	const authorizationCookie = getCookie('Authorization');

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authorizationCookie ? authorizationCookie : '', // 쿠키가 존재하면 헤더에 추가
		},
		body: JSON.stringify(data),
	});

	const authorizationHeader = response.headers.get('Authorization');

	// Authorization 헤더가 존재할 경우, 쿠키에 저장
	if (authorizationHeader) {
		document.cookie = `Authorization=${authorizationHeader}; path=/`;
	}

	const jsonData = await response.json();

	console.log('respBody:', jsonData);

	return jsonData;
}

function getCookie(cookieName) {
	const name = `${cookieName}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');

	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i].trim();
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return null;
}
