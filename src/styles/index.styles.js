import styled from 'styled-components'

export const StyledHero = styled.header`
	margin-top: ${(props) => props.theme.space[7]};
	h1 {
		font-size: 56px;
		letter-spacing: -0.015em;
		max-width: 470px;
		color: ${(props) => props.theme.colors.text};
		line-height: 64px;
		margin: 0;
		margin-bottom: ${(props) => props.theme.space[5]};
		@media only screen and (min-width: 480px) {
			max-width: 470px;
		}
	}
	.subheading {
		color: ${(props) => props.theme.colors.subheading};
		max-width: 470px;
		margin: 0;
		font-size: ${(props) => props.theme.fontSizes[3]};
		margin-bottom: 1rem;
		line-height: ${(props) => props.theme.lineHeights.copy};
		margin-bottom: ${(props) => props.theme.space[5]};
	}
`

export const StyledActions = styled.div`
	display: flex;
	margin-bottom: ${(props) => props.theme.space[4]};
`
