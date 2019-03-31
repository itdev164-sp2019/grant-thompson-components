// @flow
import React from 'react';
import PropTypes from 'prop-types'
import { Link as BaseLink } from 'rebass'
import styled from 'styled-components'

type Props = {
    children: PropTypes.node,
    variant: string,
      theme: any, 
      props: any,
      href: string
}


const StyledLink = styled(BaseLink)`
    ${({
    variant, 
    theme, 
    ...props
    }:
    {
      variant: string,
      theme: any, 
      props: Props
    }) => theme.variants.link[variant || 'primary']};
`

export const Link = ({ 
    href,
    children,
    ...props
    }:
    {
        href: string,
        children: PropTypes.node,
        props: Props
    }) => (
    <StyledLink href={href} {...props}>
        {children}
    </StyledLink>
)

Link.propTypes = {
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired
}