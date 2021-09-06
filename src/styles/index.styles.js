import styled from 'styled-components'

export const StyledHero = styled.header`
	position: relative;
	margin-top: ${(props) => props.theme.space[7]};
	h1 {
		font-size: 56px;
		letter-spacing: -0.015em;
		color: ${(props) => props.theme.colors.text};
		line-height: 64px;
		margin: 0;
		margin-bottom: ${(props) => props.theme.space[5]};
		max-width: 470px;
		@media only screen and (max-width: 900px) {
			text-align: center;
			max-width: 600px;
			margin-left: auto;
			margin-right: auto;
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
		@media only screen and (max-width: 900px) {
			text-align: center;
			max-width: 550px;
			margin-left: auto;
			margin-right: auto;
		}
	}
	.heroImage {
		position: absolute;
		right: 0;
		top: 100px;
		max-width: 400px;
		width: 100%;
		.message {
			background-color: #f6f6f6;
			color: ${(props) => props.theme.colors.text};
			padding: 30px;
			position: absolute;
			bottom: -48px;
			z-index: 2;
			left: -30px;
			border-radius: 16px;
			width: 100%;

			h3 {
				margin: 0;
				font-size: 24px;
				font-weight: ${(props) => props.theme.fontWeights.bold};
				margin-bottom: 8px;
			}
			p {
				margin: 0;
				color: ${(props) => props.theme.colors.subheading};
			}
			.feelBox {
				position: absolute;
				right: -40px;
				bottom: -20px;
			}
		}
		@media only screen and (max-width: 900px) {
			position: relative;
			margin: 0 auto;
			top: 20px;
		}
	}
	.haveAccount {
		text-align: center;
		@media only screen and (min-width: 900px) {
			text-align: left;
		}
	}
`

export const StyledActions = styled.div`
	display: flex;
	margin-bottom: ${(props) => props.theme.space[5]};
	a {
		margin-right: ${(props) => props.theme.space[4]};
	}
	@media only screen and (max-width: 900px) {
		justify-content: center;
	}
	@media only screen and (max-width: 450px) {
		flex-direction: column;
		justify-content: space-between;

		a {
			margin-right: 0;
			margin-bottom: ${(props) => props.theme.space[4]};
		}
	}
`
export const StyledBrands = styled.div`
	margin-top: 181px;
	h2 {
		font-size: ${(props) => props.theme.fontSizes[4]};
		line-height: 48px;
		margin: 0;
		color: ${(props) => props.theme.colors.text};
		margin-bottom: 2rem;
		@media only screen and (max-width: 900px) {
			text-align: center;
		}
	}
	.brandGrid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		@media only screen and (min-width: 880px) {
			grid-template-columns: repeat(6, 1fr);
		}
	}
`
