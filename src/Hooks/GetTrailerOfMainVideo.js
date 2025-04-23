import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddTrailerVideo } from '../Utils/MoviesSlice';
import { OPTIONS } from '../Utils/constants';
import axios from 'axios';

const GetTrailerOfMainVideo = (TrailerID ) => {
    // console.log(TrailerID );
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${TrailerID}/videos?language=en-US`, OPTIONS);
                const JSON = response.data?.results;
                const FilteredData = JSON.filter((video)=>video.type == "Trailer")
                const FilteredTrailer = FilteredData.length > 0 ? FilteredData[2] : FilteredData; 
                //console.log(FilteredTrailer?.key);
                dispatch(AddTrailerVideo(FilteredTrailer?.key));
            } catch (err) {
                console.error('Error fetching trailer:', err);
            }
        };

        if (TrailerID) {
            fetchTrailer();
        }
    }, [TrailerID, dispatch]);

    return null;
};

export default GetTrailerOfMainVideo;
