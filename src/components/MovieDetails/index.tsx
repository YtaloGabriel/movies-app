import React from 'react'
import { Image, Text } from 'react-native'

import {
  BackButton,
  MovieDetailsContainer,
  MovieDetailsDesc,
  MovieDetailsIMDB,
  MovieDetailsIMDBText,
  MovieDetailsInfo,
  MovieDetailsTitle,
  MovieTopBar
} from './styles'

const BackIcon = require('../../../public/assets/arrow-left.png')

export const MovieDetails = ({ route, navigation }) => {
  const { movieInfo } = route.params

  return (
    <MovieDetailsContainer>
      <MovieTopBar>
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={{ width: 25, height: 20 }} />
        </BackButton>
      </MovieTopBar>

      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieInfo.poster}`
        }}
        style={{ width: '100%', height: 450 }}
      />

      <MovieDetailsInfo>
        <MovieDetailsIMDB>
          <MovieDetailsIMDBText>
            IMDb: <Text style={{ fontWeight: 'bold' }}>{movieInfo.imdb}</Text>
          </MovieDetailsIMDBText>
        </MovieDetailsIMDB>

        <MovieDetailsTitle>{movieInfo.title}</MovieDetailsTitle>

        <MovieDetailsDesc>{movieInfo.overview}</MovieDetailsDesc>
      </MovieDetailsInfo>
    </MovieDetailsContainer>
  )
}
