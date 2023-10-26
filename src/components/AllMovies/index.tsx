import React from 'react'

import { useGetDate } from './hooks/useTransformDate'
import { useGetApiData } from './hooks/useGetApiData'

import {
  Loading,
  Movie,
  MovieDate,
  MovieDateText,
  MovieDateYear,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MoviesList
} from './styles'

export const AllMovies = ({ navigation }) => {
  const { getDate } = useGetDate()
  const { data, loading } = useGetApiData()

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <MoviesList>
      {data
        ? data.map((movie) => (
            <Movie
              key={movie.id}
              onPress={() =>
                navigation.navigate('MovieDetails', {
                  movieInfo: {
                    id: movie.id,
                    title: movie.title,
                    poster: movie.poster_path,
                    imdb: movie.vote_average,
                    overview: movie.overview
                  }
                })
              }
            >
              <MovieImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                }}
              />

              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDate>
                  <MovieDateText>Lançamento:</MovieDateText>
                  <MovieDateYear>{getDate(movie.release_date)}</MovieDateYear>
                </MovieDate>
              </MovieInfo>
            </Movie>
          ))
        : null}
    </MoviesList>
  )
}
