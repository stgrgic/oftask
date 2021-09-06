import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
	background-color: ${(props) => props.theme.colors.background};
`

const Nav = () => {
	return (
		<StyledNav>
			logo
			<ul>
				<li>About</li>
				<li>Success Stories</li>
				<li>FAQs</li>
			</ul>
		</StyledNav>
	)
}

export default Nav
