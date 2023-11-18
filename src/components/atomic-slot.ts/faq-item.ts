import { sva } from "@/styled-system/css";


export const faqItem = sva({
  slots: ['item', 'question', 'answer'],
  base: {
    item: {
      marginBottom: 5,
      paddingBottom: 5,
      borderBottom: '1px solid hsla(0,0%,100%,.1)',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    question: { textStyle: 'heading/L3', marginBottom: 3 },
    answer: { textStyle: 'body' },
  },
})