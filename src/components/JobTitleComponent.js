import React, { useRef, useState, useEffect, useCallback } from 'react';
// import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import '../css/JobTitle.css';

function JobTitle() {
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
      from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#4e4b6e' },
      enter: [
        { opacity: 1, height: 80, innerHeight: 80 },
        { transform: 'perspective(600px) rotateX(180deg)', color: '#886364' },
        { transform: 'perspective(600px) rotateX(0deg)' },
      ],
      leave: [{ color: '#b5765b' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
      update: { color: '#02344b' },
    })
  
    const reset = useCallback(() => {
      ref.current.map(clearTimeout)
      ref.current = []
      set([])
      ref.current.push(setTimeout(() => set(['HTML', 'CSS', 'Javascript']), 2000))
      ref.current.push(setTimeout(() => set(['MongoDB', 'Node JS', 'React', 'React Native']), 5000))
      ref.current.push(setTimeout(() => set(['Full Stack Web Developer']), 8000))
    }, [])
  
    useEffect(() => void reset(), [])
  
    return (
      <div>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    )
  }
  
  export default JobTitle;