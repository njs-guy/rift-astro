// Changes the theme
export function changeTheme(theme: string) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme

	if (theme === "auto" || theme === "light" || theme === "dark") {
		html.setAttribute("data-theme", theme);
		saveTheme(theme);
	} else {
		// Don't save obviously wrong data
		return;
	}
}

// Saves whether dark mode is active
export function saveTheme(theme: string) {
	localStorage.setItem("preferredTheme", theme);
}

// Loads the preferred theme on page load.
export function loadTheme() {
	const theme = localStorage.getItem("preferredTheme");

	// Set the theme
	changeTheme(theme);
}
