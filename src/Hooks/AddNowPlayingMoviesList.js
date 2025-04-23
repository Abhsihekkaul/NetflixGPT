import axios from "axios";
import { useDispatch } from "react-redux";
import { AddNowPLayingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../Utils/constants";

const AddNowPlayingMoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          OPTIONS
        );
        //console.log(response.data); // Check the movie data
        dispatch(AddNowPLayingMovies(response.data));
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]);

  return null; // You can return UI or just use it as a background data fetcher
};

export default AddNowPlayingMoviesList;
