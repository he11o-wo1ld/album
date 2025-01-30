import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ForYouPage from './pages/ForYouPage';
import MusicList from './pages/MusicList';
import MovieList from './pages/MovieList';
import TodoList from './pages/TodoList';
import Diary from './pages/Diary'; // Import the Diary component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ForYouPage />} />
            <Route path="/music" element={<MusicList />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/diary" element={<Diary />} /> {/* Add the Diary route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;