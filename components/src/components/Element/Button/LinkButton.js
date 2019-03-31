// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

type Props = {
    children: PropTypes.node,
    variant: string,
      theme: any, 
      props: Props
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
    }) => theme.variants.linkButton[variant || 'primary']};
  color: blue;
  &:hover {color: green;};
`



export const LinkButton = (props: Props) => <StyledButton {...props} />

LinkButton.propTypes = {
  variant: PropTypes.string
}