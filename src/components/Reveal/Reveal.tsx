import React from "react"
import { motion } from "framer-motion"

type RevealProps = {
  /**
   * The content to reveal.
   */
  children: React.ReactNode
  
  /**
   * The starting height of the animation.
   */
  startingHeight?: number

  /**
   * The duration of the animation.
   */
  duration?: number

  /**
   * The easing function for the animation.
   */
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate"
  
  /**
   * Determines whether the animation fades in or out.
   */
  fade?: "in" | "out" | "none"

  /**
   * The delay before the animation starts
   */
  delay?: number
}

/**
 * Reveal component for animating content.
 * 
 * ```js
 * import { Reveal } from "motion-pack"
 * 
 * return (
 *  <Reveal>
 *    <p>this text will be animated with reveal effect!</p>
 *  </Reveal>
 * )
 * ```
 *
 * @param {RevealProps}
 * @returns A Reveal wrapper component.
 */
export const Reveal = ({ children, startingHeight = 30, duration = 0.5, ease, fade = "in", delay }: RevealProps) => {
  const fadeSetting = {
    hidden: {
      in: 0,
      out: 1,
      none: 1
    },
    visible: {
      in: 1,
      out: 0,
      none: 1
    }
  }
  
  return (
    <motion.div
      variants={{
        hidden: { y: startingHeight, opacity: fadeSetting.hidden[fade] },
        visible: { y: 0, opacity: fadeSetting.visible[fade] }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}