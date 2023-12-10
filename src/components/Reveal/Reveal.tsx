import React from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
}

export const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}