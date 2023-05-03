import * as React from 'react'

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <section className={`container mx-auto px-6 xl:px-0 ${className}`}>{children}</section>
}

export default Container
