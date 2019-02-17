import React from 'react';
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
 ${props => props.theme.variants.button[props.variant || 'primary']};

/* removed when adding theme in assignment 3
 padding: 8px;
color: ${props => (props.variant === 'primary' ? 'black' : 'white')};
border: solid 1px ${props => (props.variant === 'primary' ? 'black' : 'white')}; */
`

export const Button = props => <StyledButton {...props} />

Button.propTypes = {
    variant: PropTypes.string
}