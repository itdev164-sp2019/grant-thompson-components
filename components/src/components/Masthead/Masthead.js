import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'rebass'
import styled from 'styled-components'
//import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
position: fixed;
top: 0px;
z-index: 9999;
`;

// const StyledLink = styled(Link)`
// color: white;
// text-decoration: none;
// `

export const Masthead = ({ height, children}) => {
    return (
        <Outer height={height}>
            {children}
        </Outer>
    )
};

Masthead.protoTypes = {
    height: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};