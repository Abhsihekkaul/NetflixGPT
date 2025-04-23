import React from 'react'
import GetTrailerOfMainVideo from '../Hooks/GetTrailerOfMainVideo';
import { useSelector } from 'react-redux';

const VideoBackground = (id) => {
  const TrailerID = id?.movie;
  GetTrailerOfMainVideo(TrailerID);
  const Video = useSelector(store => store.Movies.AddTrailer);
  return (
    <div className=" w-screen">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        Video +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
    )}

export default VideoBackground;