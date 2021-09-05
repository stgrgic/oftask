import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import { theme } from './theme'

export function ThemeProvider({ children }) {
	return <ScThemeProvider theme={theme}>{children}</ScThemeProvider>
}
