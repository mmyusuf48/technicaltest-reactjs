import React from 'react';
import DefaultTamplateUi from '../../../ui/default-template/index';
import { useParams } from 'react-router-dom';
import MovieDetailFeature from '../../../feature/movie-detail';

const DetailMovieApp = () => {
    const { id } = useParams();
    return (
        <DefaultTamplateUi>
            <MovieDetailFeature id={id}/>
        </DefaultTamplateUi>
    )
}

export default DetailMovieApp
