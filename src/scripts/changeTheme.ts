// Changes the theme
export function changeTheme(darkTheme: boolean) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme

	if (darkTheme) {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}

	console.log("dark theme: " + darkTheme);

	saveTheme(darkTheme);
}

// Saves whether dark mode is active
export function saveTheme(useDarkTheme: boolean) {
	localStorage.setItem("useDarkTheme", String(useDarkTheme));
}

// Loads the preferred theme on page load.
export function loadTheme() {
	const useDarkTheme = localStorage.getItem("useDarkTheme");
	let isUsingDarkTheme = false;

	// Check if useDarkTheme is true
	// LocalStorage can only store strings, so booleans have to be converted first.
	if (useDarkTheme === "true") {
		isUsingDarkTheme = true;
	}

	// Else, isUsingDarkTheme is already false.

	// Set the theme
	changeTheme(isUsingDarkTheme);
}
