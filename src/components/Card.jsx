import React from 'react';

const Card = ({ title, description, imageUrl, tags, liveUrl, repoUrl }) => {
  return (
    <div className="
      group rounded-xl overflow-hidden
      bg-gray-800/50 backdrop-blur-sm
      border border-gray-700/60
      transition-all duration-300 ease-in-out
      hover:border-purple-500/80 hover:shadow-2xl hover:shadow-purple-600/20
      transform hover:-translate-y-2
    ">
      {imageUrl && (
        <div className="overflow-hidden">
           <img
            src={imageUrl || 'https://placehold.co/600x400/0a0a0a/9333ea?text=Project'}
            alt={title}
            className="w-full h-48 object-cover
                       transition-transform duration-300 ease-in-out
                       group-hover:scale-110"
            />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm font-medium text-purple-300 bg-purple-900/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-start gap-4 mt-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-semibold text-white text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-semibold text-white text-sm bg-gray-700 hover:bg-gray-600 transition-all duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
