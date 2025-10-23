import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);


const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
      <img
        src={movie.posterUrl}
        alt={`Poster for ${movie.title}`}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold truncate text-white">{movie.title}</h3>
        <div className="flex items-center mt-1">
          <StarIcon className="w-5 h-5 text-yellow-400 mr-1.5" />
          <span className="text-gray-200 font-semibold">{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;