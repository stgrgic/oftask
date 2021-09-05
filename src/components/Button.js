import styled from 'styled-components'

const Button = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	cursor: pointer;
	border: none;
	padding: 10px;
	&:hover,
	&:active {
		background-color: ${(props) => props.theme.colors.primaryHover};
	}
`

export default Button
