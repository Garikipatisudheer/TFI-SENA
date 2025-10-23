
import React from 'react';
import { MOVIES } from './constants';
import MovieCard from './components/MovieCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Tollywood Movie Showcase
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated collection of blockbuster hits from the heart of Telugu cinema.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {MOVIES.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>

        <footer className="text-center mt-12 py-6 border-t border-gray-800">
          <p className="text-gray-500">
            Created with passion for cinema.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
