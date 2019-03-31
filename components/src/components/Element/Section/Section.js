// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

type Props = {
    children: PropTypes.node
}

export const Section = (props: Props) => <BaseContainer as="section" {...props} />