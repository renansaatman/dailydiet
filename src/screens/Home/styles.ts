import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  padding: 24px;
`
export const ScoreBar = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  height: 102px;
  border-radius: 8px;

  justify-content: center;

  margin-bottom: 40px; 
`

export const MealsText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`


export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`