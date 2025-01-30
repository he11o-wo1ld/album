// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Heart, Music, Film, ListTodo, Search, X, Menu } from 'lucide-react';

// function Navbar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showLoveMessage, setShowLoveMessage] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const loveMessages = {
//     love: "My love for you grows stronger with each passing day. You're the first thing I think about when I wake up and the last thing on my mind before I sleep. You make my world complete ♡",
//     heart: "You've captured my heart in ways I never thought possible. Every beat of my heart whispers your name ♡",
//     miss: "Even when we're apart, my heart feels complete because it's filled with thoughts of you. Missing you is just a reminder of how lucky I am to have you in my life ♡",
//     forever: "I promise to love you today, tomorrow, and for all the days that follow. You're my forever and always ♡",
//     cute: "Your smile brightens my darkest days, and your laugh is my favorite melody. You're the cutest person I've ever known ♡",
//     beautiful: "Your beauty radiates from both inside and out. You make the world a more beautiful place just by being in it ♡"
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     setShowLoveMessage(Object.keys(loveMessages).some(key => query.includes(key)));
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     setShowLoveMessage(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const NavItem = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
//     <NavLink
//       to={to}
//       onClick={() => setIsMenuOpen(false)}
//       className={({ isActive }) =>
//         `flex items-center space-x-2 px-3 py-2 rounded-full w-full ${
//           isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
//         }`
//       }
//     >
//       <Icon size={20} />
//       <span>{children}</span>
//     </NavLink>
//   );

//   return (
//     <div className="bg-white shadow-md sticky top-0 z-50">
//       <nav className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
//           >
//             <Menu size={24} />
//           </button>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavItem to="/" icon={Heart}>ForYou 
            
//             {/* <span className="text-pink-500">♡</span> */}
            
//             </NavItem>
//             <NavItem to="/music" icon={Music}>Musics</NavItem>
//             <NavItem to="/movies" icon={Film}>Movies</NavItem>
//             <NavItem to="/todos" icon={ListTodo}>To-Do</NavItem>
//           </div>

//           {/* Search bar */}
//           <div className="relative flex-1 max-w-sm ml-4">
//             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
//               <Search size={20} className="text-gray-400 min-w-[20px]" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 placeholder="Search in my heart"
//                 className="bg-transparent border-none focus:outline-none ml-2 w-full"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={clearSearch}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <X size={20} />
//                 </button>
//               )}
//             </div>
            
//             {showLoveMessage && (
//               <div className="absolute right-0 left-0 md:left-auto mt-2 w-full md:w-80 bg-white rounded-lg shadow-lg p-4 border border-pink-200 animate-fade-in">
//                 <div className="relative">
//                   <div className="absolute -top-2 -left-2">
//                     <Heart size={24} className="text-pink-500 fill-pink-500" />
//                   </div>
//                   <p className="text-gray-700 mt-2 leading-relaxed">
//                     {Object.entries(loveMessages).find(([key]) => 
//                       searchQuery.includes(key.toLowerCase())
//                     )?.[1] || loveMessages.love}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile navigation menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-2 space-y-1 animate-fade-in">
//             <NavItem to="/" icon={Heart}>For You <span className="text-pink-500">♡</span></NavItem>
//             <NavItem to="/music" icon={Music}>Music List</NavItem>
//             <NavItem to="/movies" icon={Film}>Movie List</NavItem>
//             <NavItem to="/todos" icon={ListTodo}>Todo List</NavItem>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Music, Film, ListTodo, Search, X, Menu,NotebookPen } from 'lucide-react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

  const loveMessages = {
    love: "My love for you grows stronger with each passing day. You're the first thing I think about when I wake up and the last thing on my mind before I sleep. You make my world complete ♡",
    heart: "You've captured my heart in ways I never thought possible. Every beat of my heart whispers your name ♡",
    miss: "Even when we're apart, my heart feels complete because it's filled with thoughts of you. Missing you is just a reminder of how lucky I am to have you in my life ♡",
    forever: "I promise to love you today, tomorrow, and for all the days that follow. You're my forever and always ♡",
    cute: "Your smile brightens my darkest days, and your laugh is my favorite melody. You're the cutest person I've ever known ♡",
    beautiful: "Your beauty radiates from both inside and out. You make the world a more beautiful place just by being in it ♡"
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        const key = Object.keys(loveMessages).find(key => searchQuery.includes(key));
        setMessage(key ? loveMessages[key] : loveMessages.love);
        setShowLoveMessage(true);
      }, 1000); // 1 second delay before showing the message

      return () => clearTimeout(timer);
    } else {
      setShowLoveMessage(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowLoveMessage(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <NavLink
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `flex items-center space-x-2 px-3 py-2 rounded-full w-full ${
          isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
        }`
      }
    >
      <Icon size={20} />
      <span>{children}</span>
    </NavLink>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/" icon={Heart}>ForYou</NavItem>
            <NavItem to="/music" icon={Music}>Musics</NavItem>
            <NavItem to="/movies" icon={Film}>Movies</NavItem>
            <NavItem to="/todos" icon={ListTodo}>ToDo</NavItem>
            <NavItem to="/diary" icon={NotebookPen}>Diary</NavItem>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-sm ml-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={20} className="text-gray-400 min-w-[20px]" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search in my heart"
                className="bg-transparent border-none focus:outline-none ml-2 w-full"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            
            {showLoveMessage && (
              <div className="absolute right-0 left-0 md:left-auto mt-2 w-full md:w-80 bg-white rounded-lg shadow-lg p-4 border border-pink-200 animate-fade-in">
                <div className="relative">
                  <div className="absolute -top-2 -left-2">
                    {/* <Heart size={24} className="text-pink-500 fill-pink-500" /> */}
                  </div>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1 animate-fade-in">
            <NavItem to="/" icon={Heart}>For You <span className="text-pink-500">♡</span></NavItem>
            <NavItem to="/music" icon={Music}>Music List</NavItem>
            <NavItem to="/movies" icon={Film}>Movie List</NavItem>
            <NavItem to="/todos" icon={ListTodo}>Todo List</NavItem>
            <NavItem to="/diary" icon={NotebookPen}>Todo List</NavItem>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;