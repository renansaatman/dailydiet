import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  min-height: 49px;
  max-height: 49px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  
  margin-bottom: 8px;
  padding: 0 16px 0 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextGroup = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    border-right-color: ${theme.COLORS.GRAY_4}; 
    `}
    
  border-right-width: 1px;
  margin-right: 12px;
  padding-right: 12px;
`

export const MealText = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_2};
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      
  `}
`

export const StatusCircle = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`