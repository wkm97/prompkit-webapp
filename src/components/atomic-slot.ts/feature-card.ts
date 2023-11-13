import { sva } from "@/styled-system/css";


export const featureCard = sva({
  slots: ['container', 'title', 'description', 'image'],
  base: {
    container: {
      position: 'relative',
      w: 'full',
      minH: '400px',
      display: 'flex',
      flexDir: 'column',
      alignItems: 'start',
      padding: 8,
      borderRadius: 'lg',
      gap: '2',
      bg: 'fill.secondary',
      shadow: 'border',
      _hover: {
        filter: 'brightness(120%)'
      }
    },
    title: { textStyle: 'heading/L3' },
    description: { textStyle: 'body' },
    image: {position: 'absolute', right: 0, bottom: 0, w:'full', height: '250px'}
  },
})