import React from 'react';

const movies = [
  {
    id: 1,
    title: "La La Land",
    year: 2016,
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300",
    description: "A beautiful musical about love and dreams in Los Angeles"
  },
  {
    id: 2,
    title: "The Notebook",
    year: 2004,
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300",
    description: "A romantic drama about enduring love"
  }
];

function MovieList() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Movie Collection</h1>
      <div className="space-y-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full md:w-48 h-48 md:h-72 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{movie.title}</h3>
                <p className="text-gray-500 mt-1">{movie.year}</p>
                <p className="text-gray-700 mt-4">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;