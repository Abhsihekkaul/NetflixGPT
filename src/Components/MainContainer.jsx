import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.Movies?.NowPlayingMovies?.results);
  if (!movies) return <div>Loading...</div>;

  const MainMovie = movies[0];

  return (
    <div className="relative w-full">
      <VideoBackground movie={MainMovie?.id} />
      <div className="absolute top-0 left-0 w-full h-full pt-20">
        <VideoTitle 
          title={MainMovie?.original_title} 
          overview={MainMovie?.overview}  
        />
      </div>
    </div>
  );
};

export default MainContainer;