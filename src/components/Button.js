import { compose, margin, variant } from 'styled-system'

import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const defaultStyles = {
	cursor: 'pointer',
	border: 'none',
	marginBottom: '0.5em',
	fontWeight: 'bold',
	textDecoration: 'none',
	fontFamily: 'body',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: 0,
	color: 'text',
	fontSize: 3,
	borderRadius: '53px',
	height: '54px',
	paddingLeft: '2rem',
	paddingRight: '2rem',
	transition: 'all .1s ease',
}

const variants = variant({
	variants: {
		primary: {
			...defaultStyles,
			color: 'background',
			backgroundColor: 'primary',
			border: '1px solid',
			borderColor: 'primary',
			'&:hover, &:active': {
				backgroundColor: 'primaryHover',
				borderColor: 'primaryHover',
			},
		},
		secondary: {
			...defaultStyles,
			backgroundColor: 'background',
			border: '1px solid',
			borderColor: 'text',
			color: 'text',
			svg: {
				fill: 'text',
				marginRight: 3,
				transition: 'all .1s ease',
			},
			'&:hover, &:active': {
				backgroundColor: 'text',
				color: 'background',
				svg: {
					fill: 'background',
				},
			},
		},
	},
})

const StyledButton = styled.button`
	${variants}
	${compose(margin)}
`

const Button = React.forwardRef(({ children, ...props }, ref) => {
	return (
		<StyledButton ref={ref} {...props}>
			{children}
		</StyledButton>
	)
})

Button.propTypes = {
	variant: propTypes.oneOf(['primary', 'secondary']).isRequired,
	children: propTypes.node.isRequired,
}

export default Button
