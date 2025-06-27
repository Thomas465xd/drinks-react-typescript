import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkMode() {
	const [theme, setTheme] = useState(() => {
		// Check localStorage or default to light
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') || 'light';
		}
		return 'light';
	});

	useEffect(() => {
		// Apply theme to document
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
		}
		
		// Save to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => prev === 'light' ? 'dark' : 'light');
	};

	return (
		<div className="flex items-center justify-center">
			<div className="rounded-lg p-1 flex gap-1">
				<button
					onClick={() => setTheme("light")}
					className={`flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
						theme === "light"
							? "bg-white text-yellow-500 shadow-md"
							: "text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
					aria-label="Light mode"
				>
					<Sun size={18} />
				</button>

				<button
					onClick={() => toggleTheme()}   
					className={`flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
						theme === "dark"
							? "bg-gray-800 text-blue-400 shadow-md"
							: "text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
					aria-label="Dark mode"
				>
					<Moon size={18} />
				</button>
			</div>
		</div>
	);
}