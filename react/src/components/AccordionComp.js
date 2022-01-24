import React, { useState, useRef } from 'react'
import Chevron from './Chevron'

export default function AccordionComp(props) {

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion_icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`)
    setRotateState(setActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')
  }
  return (
    <div className="accordion_section">
      <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion_title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={16} fill={'#444'} />
      </div>
      <div ref={content} style={{maxHeight: `${setHeight}`}}className="accordion_content">
        <div className="accordion_text">
          {props.content }
          </div>
      </div>
    </div>
  )
}
