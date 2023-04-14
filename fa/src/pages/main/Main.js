import React from 'react'
import About from '../../components/about/About'
import Animation from '../../components/animation/Animation'
import Roadmap from '../../components/roadmap/Roadmap'
import FAQ from '../../components/faq/FAQ'

import './main.css'

const Main = () => {
  return (
    <div className='main'>
      <About />
      <Roadmap />
      <FAQ />
      <Animation />
    </div>
  )
}

export default Main
