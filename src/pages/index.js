import { Button, Container, GlobalStyle, Link, Nav } from '../components'
import { StyledActions, StyledBrands, StyledHero } from '../styles/index.styles'

import { PlayIcon } from '../components/icons'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
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
							<Button as="a" href="/" variant="primary">
								Get funded
							</Button>
							<Button variant="secondary">
								<PlayIcon /> How it works
							</Button>
						</StyledActions>
						<p className="haveAccount">
							Already have an account? <Link to="/">Log in</Link>
						</p>

						<div className="heroImage">
							<StaticImage
								src="../images/heroPerson.jpg"
								alt="Featured person"
								placeholder="blurred"
								layout="constrained"
								width={400}
								height={400}
								quality={90}
							/>
							<div className="message">
								<h3>Funded £250 000</h3>
								<p>
									<strong>Boris Hodakel</strong> Founder of Feel
								</p>
								<StaticImage
									src="../images/feelBox.png"
									alt="Box"
									className="feelBox"
									placeholder="blurred"
									layout="fixed"
									width={203}
									height={209}
									quality={90}
								/>
							</div>
						</div>
					</StyledHero>
					<StyledBrands>
						<h2>
							We’ve funded <br /> 100s of brands like yours
						</h2>
						<ul className="brandGrid">
							<li>
								<StaticImage
									src="../images/l1.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={127}
									height={53}
									quality={90}
								/>
							</li>
							<li>
								<StaticImage
									src="../images/l2.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={96}
									height={53}
									quality={90}
								/>
							</li>
							<li>
								<StaticImage
									src="../images/l3.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={88}
									height={53}
									quality={90}
								/>
							</li>
							<li>
								<StaticImage
									src="../images/l4.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={95}
									height={53}
									quality={90}
								/>
							</li>
							<li>
								<StaticImage
									src="../images/l5.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={72}
									height={53}
									quality={90}
								/>
							</li>
							<li>
								<StaticImage
									src="../images/l6.png"
									alt="brand"
									className="brand"
									placeholder="blurred"
									layout="fixed"
									width={53}
									height={53}
									quality={90}
								/>
							</li>
						</ul>
					</StyledBrands>
				</main>
			</Container>
		</ThemeProvider>
	)
}

export default IndexPage
