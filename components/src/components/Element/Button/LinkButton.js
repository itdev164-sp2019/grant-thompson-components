import React from 'react';
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
${props => props.theme.variant.LinkButton[props.variant || 'primary']};

/* removed when adding theme in assignment 3
padding: 8px;
color: ${props => (props.variant === 'primary' ? 'blue' : 'white')}; */
`

export const LinkButton = props => <StyledButton {...props} />

LinkButton.propTypes = {
    variant: PropTypes.string
}