import { center } from "@/styled-system/patterns"
import Image from 'next/image'
import { AnimatePresence, Variants, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";
import { css } from "@/styled-system/css";

export const LandingIcon = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useScroll()

  const placeholdercss = center({
    w: 'full',
    h: 'full'
  })

  const triggerVideoHandler = {
    onClick: () => setShowVideo(true),
    onMouseOver: () => setShowVideo(true)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(showVideo === false){
      setShowVideo(true)
    }
  })

  const logoVariants: Variants = {
    showVideo: {
      opacity: 1,
      rotateY: 360,
      transition: { duration: .35 },
    },
    showLogo: {
      opacity: 1,
    }
  }

  return (
    <div className={center({ p: 8 })}>
      <div className={css({ w: 672, h: 378 })} >
        <AnimatePresence>
          {!showVideo && <motion.div key="logo" className={placeholdercss} variants={logoVariants} initial="showLogo" exit="showVideo" {...triggerVideoHandler}>
            <Image src="/icon.png" alt="icon" width={280} height={280} loading='eager' />
          </motion.div>}
          <motion.div className={center({ w: 'full', h: 'full' })} variants={{ hidden: { display: 'none', opacity: 0 }, show: { opacity: 1, display: 'flex', transition: { delay: 0.4 } } }} initial="hidden" animate={showVideo? "show": "hidden"}>
            <iframe className={css({ w: 'full', h: 'full' })} src="https://www.youtube.com/embed/2Yx4tmw4NYY?si=lv_tC6drMiv-vfWo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}