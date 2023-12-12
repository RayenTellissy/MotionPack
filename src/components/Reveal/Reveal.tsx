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
  fade?: "in" | "out"

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
export const Reveal = ({ children, startingHeight = 10, duration = 0.3, ease, fade = "in", delay }: RevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: { y: startingHeight, opacity: fade === "in" ? 0 : 1 },
        visible: { y: 0, opacity: fade === "in" ? 1 : 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}