import { StatusBar } from 'expo-status-bar'
import { HomeContent, HomeTitle, HomeWrapper } from './styles'
import { AllMovies } from '../AllMovies'

export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <HomeWrapper>
        <HomeContent>
          <HomeTitle>Filmes em Destaque</HomeTitle>

          <AllMovies navigation={navigation} />
        </HomeContent>
      </HomeWrapper>

      <StatusBar style="auto" />
    </>
  )
}
