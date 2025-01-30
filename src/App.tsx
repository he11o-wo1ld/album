import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ForYouPage from './pages/ForYouPage';
import MusicList from './pages/MusicList';
import MovieList from './pages/MovieList';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ForYouPage />} />
            <Route path="/music" element={<MusicList />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;