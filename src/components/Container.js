import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
	max-width: 1002px;
	margin: 0 auto;
	padding: 0 1rem;
`

const Container = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
)

Container.propTypes = {
	children: propTypes.string.isRequired,
}

export default Container
