import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled(GatsbyLink)`
	display: inline-block;
	font-weight: ${(props) => props.theme.fontWeights.medium};
	font-size: ${(props) => props.theme.fontSizes.m};
	color: ${(props) => props.theme.colors.text};
	text-decoration: underline;
`

const Link = React.forwardRef(({ children, ...props }, ref) => {
	return (
		<StyledLink ref={ref} {...props}>
			{children}
		</StyledLink>
	)
})

Link.propTypes = {
	children: propTypes.string.isRequired,
}

export default Link
