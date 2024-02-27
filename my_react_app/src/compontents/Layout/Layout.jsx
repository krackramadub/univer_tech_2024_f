import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { useCustomHook } from '../../hooks/myCustomHook'

import './Layout.css'

import classes from './Layout.module.css'

export const Layout = ({ children }) => {

  const [number, setNumber] = useState(0)

  // custom hook
  const value = useCustomHook('change value to custom hook')


  console.log("🚀 ~ Layout ~ value:", value)

  // useEffect(() => {
  //   alert('Component mount')
  // }, [number])


  const increment = () => {
    // let _number = number
    setNumber(number + 1)
  }


  // useMemo 
  // useCallback 

  // const memoMethod = useMemo(() => {
  //   return 'any value'
  // })

  // const callbackMethod = useCallback(() => {
  //   return 'any value'
  // })

  const textareaRef = useRef()


  return (
    <div className={classes.layout_container}>
      <Header />


      {/* <textarea ref={textareaRef}></textarea>
      <input type='button' value={'Increment'} onClick={() => increment()} /> :{number}
      <input type='button' value={'Get textarea value'} onClick={() => console.log('ref', textareaRef)} />
      <br/>
      <p>Custom hook value</p>
      <p>{value}</p> */}



      <div className={classes.child_container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}




