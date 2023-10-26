import styled from 'styled-components/native'

export const MovieDetailsContainer = styled.ScrollView`
  flex: 1;
  display: flex;
  gap: 16px;
`

export const MovieTopBar = styled.SafeAreaView`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const BackButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MovieDetailsInfo = styled.View`
  width: 100%;
  margin-top: -15px;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.4);
  flex: 1;
  min-height: 100%;
  padding: 20px;
  gap: 24px;
`

export const MovieDetailsIMDB = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #e6c146;
  align-self: flex-start;
  border-radius: 8px;
`

export const MovieDetailsIMDBText = styled.Text`
  padding: 10px 15px;
`

export const MovieDetailsTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`

export const MovieDetailsDesc = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: justify;
`
