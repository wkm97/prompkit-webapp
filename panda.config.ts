import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '{colors.red.800}' },
        },
        fonts: {
          heading: { value: 'Inter, sans-serif' },
        },
        shadows: {
          border: {value: '0px 0px 0px 0.5px rgba(255, 255, 255, 0.05), 0px 0.5px 2.5px 0px rgba(255, 255, 255, 0.30)'},
          container: {value: '0px 38px 90px 0px rgba(0, 0, 0, 0.25), 0px 0px 2px 0px rgba(255, 255, 255, 0.05), 0px 0px 1px 0px rgba(255, 255, 255, 0.60)'}
        }
      },
      semanticTokens: {
        colors: {
          brand: {
            "primary": { "value": { "base": "#005f98" } },
            "secondary": { "value": { "base": "#4e8cc9" } },
            "tertiary": { "value": { "base": "#b7eeff" } }
          },
          fill: {
            "primary": { "value": { "base": "#ffffff", "_dark": "#0c0c0c" } },
            "secondary": { "value": { "base": "#e6d717", "_dark": "#242424" } },
            "tertiary": { "value": { "base": "#ffd700", "_dark": "#3d3d3d" } }
          },
          accent: {
            "primary": { "value": { "base": "#ffef99" } },
            "secondary": { "value": { "base": "#ccac00" } }
          },
          text: {
            "primary": { "value": { "base": "#ffffff", "_dark": "#ffffff" } },
            "secondary": { "value": { "base": "#9e9e9e", "_dark": "#f0f0f0" } },
            "accent": { "value": { "base": "#006fff", "_dark": "#006fff" } },
            "error": { "value": { "base": "#454545", "_dark": "#ffd700" } }
          }
        },
        fontSizes: {
          'heading/L1': { value: { base: '{fontSizes.5xl}' } },
          'heading/L2': { value: { base: '{fontSizes.4xl}' } },
          'heading/L3': { value: { base: '{fontSizes.3xl}' } },
          'heading/L4': { value: { base: '{fontSizes.2xl}' } },
        }
      },
      textStyles: {
        body: {
          description: 'The body text style - used in paragraphs',
          value: {
            fontWeight: 'medium',
            fontSize: 'md',
            lineHeight: '1.5rem'
          }
        },
        'heading/L1': {
          value: {
            fontWeight: 'bold',
            fontSize: 'heading/L1'
          }
        },
        'heading/L2': {
          value: {
            fontWeight: 'bold',
            fontSize: 'heading/L2'
          }
        },
        'heading/L3': {
          value: {
            fontWeight: 'bold',
            fontSize: 'heading/L3'
          }
        },
        'heading/L4': {
          value: {
            fontWeight: 'bold',
            fontSize: 'heading/L4'
          }
        },
      }
    },
  },
  // The output directory for your css system
  outdir: "src/styled-system",
  jsxFramework: 'react'
});
