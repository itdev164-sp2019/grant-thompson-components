// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'


type Props = {
    children: PropTypes.node
}

const StyledButton = styled(ButtonBase)`
  ${({
    variant, 
    theme, 
    ...props
    }:
    {
      variant: string,
      theme: any, 
      props: Props
    }) => theme.variants.button[variant || 'primary']};
`

export const Button = (props: Props) => <StyledButton {...props} />

Button.propTypes = {
  variant: PropTypes.string
}