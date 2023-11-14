import { button } from "@/components/atomic/button"
import { css } from "@/styled-system/css"
import { center, container, divider, hstack, vstack } from "@/styled-system/patterns"
import { token } from "@/styled-system/tokens"
import Image from 'next/image'

const sectioncss = center({
  minH: 'screen',
  flexDirection: 'column',
  padding: 8
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

const sectionTitle = css({
  textStyle: 'heading/L2',
  bgGradient: 'to-r',
  gradientFrom: 'brand.secondary',
  gradientTo: 'brand.primary',
  backgroundClip: 'text',
  color: 'transparent',
  marginBottom: 10
})

export default function Privacy() {
  return (
    <main>
      <header
        className={headercss}
      >
        <a href="/">
          <div className={hstack()}>
            <Image src="/icon.png" alt="icon" width={32} height={32} />
            <span>Prompkit</span>
          </div>
        </a>
        <button className={button({ visual: 'solid', size: 'sm' })} style={{ borderRadius: token.var('radii.lg') }}>
          Add to browser
        </button>
      </header>

      <section className={sectioncss} id="faq-section">
        <h2 className={sectionTitle}>
          Privacy Policy
        </h2>
        <div className={vstack({ w: 800, alignItems: 'start', gap: 4, textStyle: 'body', marginBottom: 20 })}>
          <p className={css({alignSelf: 'end'})}>Last updated: 2023 November 14</p>
          <div className={divider({color: 'hsla(0,0%,100%,.1)', marginBottom: 8})}/>
          <p>This Privacy Policy explains how Prompkit collects, uses, and discloses information about users of the Prompkit (Extension). By installing or using the Extension, you agree to the terms of this Privacy Policy.</p>
          <p className={css({textStyle: 'heading/L3'})}>Information We Do Not Collect</p>
          <p>We want to be transparent about the data we do <b>not</b> collect:</p>
          <ul className={css({listStyleType: 'circle', listStylePosition: 'inside'})}>
            <li><b>Personal Identifiable Information (PII):</b> We do <b>not</b> collect information that directly identifies you, such as your name, address, phone number, or email address.</li>
            <li><b>Financial Information:</b> We do <b>not</b> collect any financial information, including credit card details or banking information.</li>
            <li><b>Sensitive Information:</b> We do <b>not</b> collect sensitive information, such as racial or ethnic origin, political opinions, religious or philosophical beliefs, or health-related information.</li>
          </ul>
          <p className={css({textStyle: 'heading/L3'})}>Information We Collect</p>
          <p>The Extension may collect data related to user activities to improve user experience and functionality. This may include, but is not limited to:</p>
          <ul className={css({listStyleType: 'circle', listStylePosition: 'inside'})}>
            <li>Page interactions</li>
            <li>Error logs</li>
          </ul>
          <p className={css({textStyle: 'heading/L3'})}>How We Use the Information</p>
          <p>We use the collected information for the following purposes:</p>
          <ul className={css({listStyleType: 'circle', listStylePosition: 'inside'})}>
            <li><b>Analytics:</b> Aggregated and anonymized data may be used for analytical purposes to understand user behavior and preferences.</li>
            <li><b>Communication:</b> We may use contact information provided by users for communication purposes, such as responding to inquiries or providing updates related to the Extension.</li>
          </ul>
          <p className={css({textStyle: 'heading/L3'})}>Information Security</p>
          <p>We take appropriate measures to protect the limited information we collect from unauthorized access, disclosure, alteration, or destruction. We follow industry-standard practices to ensure the security of the data we manage.</p>
          <p className={css({textStyle: 'heading/L3'})}>Updates to This Privacy Policy</p>
          <p>We reserve the right to update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage users to review this page periodically for any updates.</p>
          <p className={css({textStyle: 'heading/L3'})}>Contact Us</p>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a className={css({color: 'brand.secondary', fontWeight: 'bold'})} href="mailto:prompkit@gmail.com">Prompkit</a>.</p>
          <p>By using the Extension, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use the Extension.</p>
        </div>
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