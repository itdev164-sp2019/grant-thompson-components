// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

type Props = {
    children: PropTypes.node
}

export const Header = (props: Props) => <BaseContainer as="header" {...props} />