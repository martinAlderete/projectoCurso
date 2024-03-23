import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex-shrink-0">
            <Link to="/home" className="font-medium text-lg md:text-xl text-blue-700 hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-700 dark:text-white">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="4" cy="12" r="3"></circle>
                <circle cx="20" cy="12" r="3"></circle>
              </svg>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="font-medium flex flex-row md:space-x-8">
              <li>
                <Link to="/home" className="py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/plans" className="py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Plans</Link>
              </li>
              <li>
                <Link to="/contact" className="py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white" aria-label="Toggle navigation" onClick={handleMenuToggle}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
              <li>
                <Link to="/home" className="block py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/plans" className="block py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Plans</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 md:py-0 md:px-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
