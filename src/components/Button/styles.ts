import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  height: 50px;

  border-radius: 6px;
  margin-bottom: 32px;
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
  margin-left: 12px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.WHITE
}))``