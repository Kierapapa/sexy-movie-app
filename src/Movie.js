import React from 'react'
import PropTypes from 'prop-types';

export const Movie = ({id, year, title, summary, poster, genres}) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">{genres.map((genre, i)=><li key={i} className="genres__genre">{genre}</li>)}</ul>
                <p className="movie__summary">{summary.split(' ',50).join(' ')}...</p>
            </div>
        </div>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;