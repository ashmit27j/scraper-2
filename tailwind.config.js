/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1a1a1a",
				secondary: "#242424",
				accent: "#646cff",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
	darkMode: "class",
};
