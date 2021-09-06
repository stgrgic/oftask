import { compose, margin, variant } from 'styled-system'

import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const defaultStyles = {
	cursor: 'pointer',
	border: 'none',
	padding: '10px',
	marginBottom: '0.5em',
	fontWeight: 'bold',
}

const variants = variant({
	variants: {
		primary: {
			...defaultStyles,
			backgroundColor: 'primary',
		},
		secondary: {
			...defaultStyles,
			backgroundColor: 'secondary',
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
	children: propTypes.string.isRequired,
}

export default Button
