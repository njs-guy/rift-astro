// Changes the theme
export function changeTheme(theme: string) {
	// HACK: this is stupid
	// Without this, theme switching is completely broken if the user prefers dark modes.
	// It works perfectly if the user prefers light modes.

	// daisyUI uses the default dark theme unless you manually tell it to use "dark"
	// which is just a modified version of the default dark theme anyway.

	// Making the custom dark theme "prefersDark" just forces it to always use it no matter what.

	// Also, it flashes the default dark theme before instantly switching to
	// the custom dark theme that it's SUPPOSED to be using.

	// Works for now.
	// what is happening
	if (theme === "auto") {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	} else {
		document.documentElement.setAttribute("data-theme", theme);
	}
	saveTheme(theme);
}

// Saves the theme through its name.
export function saveTheme(theme: string) {
	localStorage.setItem("preferredTheme", theme);
}

// Loads the preferred theme on page load.
export function loadTheme() {
	const theme = localStorage.getItem("preferredTheme");

	if (theme === null) {
		// Default to auto
		saveTheme("auto");
		return;
	}

	// Set the theme
	changeTheme(theme);
}
