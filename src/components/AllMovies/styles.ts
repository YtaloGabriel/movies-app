import { styled } from 'styled-components/native'

export const MoviesList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 200px;
  margin: 0 5px;
`

export const Movie = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  height: 130px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
  flex-flow: row nowrap;
  gap: 12px;
`

export const MovieImage = styled.Image`
  width: 130px;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`

export const MovieInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  overflow: hidden;
`

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  max-height: 80px;
  overflow: hidden;
  color: #333333;
  line-height: 20px;
`

export const MovieDate = styled.View`
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
`

export const MovieDateText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666666;
`

export const MovieDateYear = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: #666666;
`

export const Loading = styled.Text`
  font-size: 20px;
`
