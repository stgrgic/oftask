import { Button, Container, GlobalStyle, Link, Nav } from '../components'
import { StyledActions, StyledHero } from '../styles/index.styles'

import { PlayIcon } from '../components/icons'
import React from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

const IndexPage = () => {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<Container>
				<Nav />
				<main>
					<StyledHero>
						<h1>Growth Capital ‍For Founders Like You</h1>
						<p className="subheading">
							Supercharged funding from <strong>£10K to £2M</strong> for your{' '}
							<strong>marketing & inventory purchases</strong>.
						</p>
						<StyledActions>
							<Button as="a" href="/" variant="primary" mr={4}>
								Get funded
							</Button>
							<Button variant="secondary">
								<PlayIcon /> How it works
							</Button>
						</StyledActions>
						<p>
							Already have an account? <Link to="/">Log in</Link>
						</p>
					</StyledHero>

					{/* TODO image */}
					<h2>We’ve funded 100s of brands like yours</h2>
					{/* TODO Logos */}
				</main>
			</Container>
		</ThemeProvider>
	)
}

export default IndexPage
