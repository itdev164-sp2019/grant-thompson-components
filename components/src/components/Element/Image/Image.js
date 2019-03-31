// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Image as ImageBase } from 'rebass'

type Props = {
    children: PropTypes.node,
    src: string
}

export const Image = ({ 
    src,
    ...props
    }:
    {
        src: string,
        props: Props
    }) => <ImageBase src={src} {...props} />

Image.propTypes = {
    src: PropTypes.string.isRequired
}