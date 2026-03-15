import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 rounded-full bg-stone-200 dark:bg-stone-700 
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-1 w-5 h-5 rounded-full bg-white dark:bg-gold-500 shadow 
                    flex items-center justify-center transition-all duration-300
                    ${darkMode ? 'left-8' : 'left-1'}`}
      >
        {darkMode
          ? <FiMoon size={10} className="text-white" />
          : <FiSun size={10} className="text-gold-500" />
        }
      </span>
    </button>
  )
}
