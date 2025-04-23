import React from 'react'
import Header from './Header'
import AddNowPlayingMoviesList from '../Hooks/AddNowPlayingMoviesList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // used Custom hook to gather the movies list
  AddNowPlayingMoviesList();
  
  return (
    <div className="bg-black min-h-screen relative">
      {/* MainContainer is now first in the DOM to position it below Header */}
      <MainContainer />
      {/* Header with a higher z-index to appear on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="relative z-1 mt-[56.25vw]">
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse