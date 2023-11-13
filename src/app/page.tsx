'use client'
import { styled } from '@/styled-system/jsx'
import { css } from '../styled-system/css'
import { center, container, float, grid, gridItem, hstack, vstack, wrap } from '@/styled-system/patterns'
import Image from 'next/image'
import { button } from '@/components/atomic/button'
import { token } from '@/styled-system/tokens'
import { featureCard } from '@/components/atomic-slot.ts/feature-card'
import { faqItem } from '@/components/atomic-slot.ts/faq-item'
import { Variants, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

const sectioncss = center({
  minH: 'screen',
  flexDirection: 'column',
  padding: 8
})

const sectionTitle = css({
  textStyle: 'heading/L2',
  bgGradient: 'to-r',
  gradientFrom: 'brand.secondary',
  gradientTo: 'brand.primary',
  backgroundClip: 'text',
  color: 'transparent',
  marginBottom: 10
})

const headercss = container({
  position: 'sticky',
  display: 'flex',
  width: 750,
  justifyContent: 'space-between',
  fontSize: 'xl',
  padding: 3,
  top: 4,
  zIndex: 3,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'var(--backdrop-blur)',
  boxShadow: '2xl',
  borderRadius: 'full',
  backdropBlur: 'md',
  border: '1px solid rgba(255, 255, 255, 0.2)'
})

export default function Home() {
  const installButton = useRef<HTMLButtonElement>(null)
  const { scrollY } = useScroll()
  const [showHeader, setShowHeader] = useState(false);
  const styledFeatureCard = featureCard()
  const styledFaqItem = faqItem()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (installButton) {
      if (installButton.current && latest > installButton.current.offsetTop) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -300
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <main>
      {showHeader && <motion.header
        className={headercss}
        variants={{
          hidden: { opacity: 0, y: -100 },
          show: {
            opacity: 1, y: 0, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        <div className={hstack()}>
          <Image src="/icon.png" alt="icon" width={32} height={32} />
          <span>Prompkit</span>
        </div>
        <button className={button({ visual: 'solid', size: 'sm' })} style={{ borderRadius: token.var('radii.lg') }}>
          Add to browser
        </button>
      </motion.header>}
      <section className={sectioncss} id="hero-section">
        <div className={vstack({ gap: 6 })}>
          <Image src="/icon.png" alt="icon" width={280} height={280} loading='eager' />
          <h1 className={css({ textStyle: 'heading/L1' })}>
            <span>Take control of AI prompts with <span className={css({ bgGradient: 'to-r', gradientFrom: 'brand.primary', gradientTo: 'brand.secondary', backgroundClip: 'text', color: 'transparent' })}>Prompkit</span></span>
          </h1>
          <span className={css({ textStyle: 'body' })}>Simplify way to keep your favorite prompts with our browser extension.</span>

          <div className={hstack({ flexWrap: 'wrap', justify: 'center' })}>
            <a href='#faq-section'>
              <button ref={installButton} className={button({ visual: 'solid', size: 'md' })} style={{ width: token.var('spacing.80') }}>
                Add to browser
              </button>
            </a>
            <a href='#feature-section'>
              <button className={button({ visual: 'outline', size: 'md' })}>
                Learn more
              </button>
            </a>
          </div>
        </div>
      </section>
      <section
        id="feature-section"
        className={sectioncss} >
        <h2 className={sectionTitle}>
          Effortlessly Manage Your AI Prompts
        </h2>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 'some' }}
          className={grid({ columns: 3, gap: 6 })}
        >
          <motion.div variants={itemVariants} className={gridItem({ colSpan: 2 })}>
            <div className={styledFeatureCard.container} >
              <h3 className={styledFeatureCard.title}>Organize your prompts</h3>
              <p className={styledFeatureCard.description}>Add, edit, delete and search for your favorite prompts</p>
              <div className={styledFeatureCard.image} style={{ background: 'url(/manager.png) no-repeat 100%', backgroundSize: 'contain' }} />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className={gridItem({ colSpan: 1 })}>
            <div className={styledFeatureCard.container} >
              <h3 className={styledFeatureCard.title}>Quick copy</h3>
              <p className={styledFeatureCard.description}>Discover prompt that you like? Just copy it.</p>
              <div className={styledFeatureCard.image} style={{ background: 'url(/copy.png) no-repeat bottom right', backgroundSize: 'contain' }} />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className={gridItem({ colSpan: 1 })}>
            <div className={styledFeatureCard.container} >
              <h3 className={styledFeatureCard.title}>Full prompt search</h3>
              <p className={styledFeatureCard.description}>Too much prompt in your pocket? Just search it.</p>
              <div className={styledFeatureCard.image} style={{ background: 'url(/search.png) no-repeat bottom right', backgroundSize: 'contain' }} />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className={gridItem({ colSpan: 1 })}>
            <div className={styledFeatureCard.container}>
              <h3 className={styledFeatureCard.title}>Quick insert</h3>
              <p className={styledFeatureCard.description}>Navigation and shortcut with keyboard is supported</p>
              <div className={styledFeatureCard.image} style={{ background: 'url(/keyboard.png) no-repeat center center', backgroundSize: 'contain' }} />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className={gridItem({ colSpan: 1 })}>
            <div className={styledFeatureCard.container} >
              <h3 className={styledFeatureCard.title}>Multiplatform compatibility</h3>
              <p className={styledFeatureCard.description}>Work with ChatGPT, Bard, Claude and others</p>
              <div className={styledFeatureCard.image} style={{ background: 'url(/compatibility.png) no-repeat center center', backgroundSize: 'contain' }} />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className={sectioncss} id="faq-section">
        <h2 className={sectionTitle}>
          FAQs
        </h2>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 'some' }}
        >
          <motion.div variants={itemVariants} className={styledFaqItem.item} >
            <h3 className={styledFaqItem.question}>
              What is Prompkit?
            </h3>
            <p className={styledFaqItem.answer}>
              A simple prompt template manager for all popular platforms with easy-to-use features for adding, deleting, and searching.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className={styledFaqItem.item} >
            <h3 className={styledFaqItem.question}>
              How easy it is to add/copy prompt template?
            </h3>
            <p className={styledFaqItem.answer}>
              Come with a feature that allows you to copy prompt templates directly from any website using text selection.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className={styledFaqItem.item} >
            <h3 className={styledFaqItem.question}>
              How easy it is to use prompt template?
            </h3>
            <p className={styledFaqItem.answer}>
              Come with a feature that perform full search on all the prompt templates, intuitive keyboard control and shortcut included.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className={styledFaqItem.item} >
            <h3 className={styledFaqItem.question}>
              Which browsers can I use with Prompkit?
            </h3>
            <p className={styledFaqItem.answer}>
              Prompkit is compatible with major browsers like Chrome, Edge for now.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className={styledFaqItem.item} >
            <h3 className={styledFaqItem.question}>
              Which platform can I use with Prompkit?
            </h3>
            <p className={styledFaqItem.answer}>
              Prompkit is compatible with major platform like ChatGPT, Bard, Claude, Bing Chat for now.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <footer className={hstack({
        justify: 'space-around',
        p: 8,
        fontSize: 'sm',
        borderTop: '1px solid hsla(0,0%,100%,.1)',
      })}>
        <span>
          Copyright © 2023 Prompkit
        </span>
        <ul className={hstack()}>
          <li className={css({ cursor: 'pointer', _hover: { filter: 'brightness(85%)' } })}><a href="/privacy">Privacy</a></li>
          <li className={css({ cursor: 'pointer', _hover: { filter: 'brightness(85%)' } })}><a href="mailto:prompkit@gmail.com">Contact</a></li>
        </ul>
      </footer>
    </main>
  )
}