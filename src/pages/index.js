import Button from '../components/Button'
import React from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

// markup
const IndexPage = () => {
	return (
		<ThemeProvider>
			<nav>
				logo
				<ul>
					<li>About</li>
					<li>Success Stories</li>
					<li>FAQs</li>
				</ul>
			</nav>
			<main>
				<h1>Growth Capital ‍For Founders Like You</h1>
				<p>
					Supercharged funding from £10K to £2M for your marketing & inventory
					purchases.
				</p>
				<Button as="a" href="/" variant="primary">
					Get funded
				</Button>
				<Button variant="secondary">How it works</Button>
				<p>Already have an account? Log in</p>
				{/* TODO image */}
				<h2>We’ve funded 100s of brands like yours</h2>
				{/* TODO Logos */}
			</main>
		</ThemeProvider>
	)
}

export default IndexPage
