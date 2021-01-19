import Layout from '../components/Layout/index'
import styles from '../styles/context.module.css'

import { createRef, useEffect, useRef, useState } from 'react'
import useNearScreen from '../hooks/useNearScreen'

import { Selected } from '../components/nav/index'

import Principal from '../sections/main/main'
import AboutMe from '../sections/aboutMe/about'

const {menuRef} = ref()

function ref(){
  const menuRef = [] 
  for (let i = 0; i < 4 ; i++){
    menuRef.push(createRef())
  }
  return {menuRef}
}


function Near(){
  const menuNear = [] 
  for(let i = 0; i < 4; i++){
    menuNear.push(useNearScreen({ externalRef : menuRef[i] , distance : .4}))
  }
  return {menuNear}
}


export const goToSection = () => {
  window.scrollTo(0,0)
}

export default function Home() {

  const {menuNear} = Near()

  // useEffect(()=>{
  //   for(let l = 0; l < 4; l++){
  //     // console.log(`l : ${menuNear[l].isNearScreen}`)
  //     if(menuNear[l].isNearScreen) Selected({refNum : l})
  //   }
  // },[menuNear])


  return (
    <Layout>  
      <section className = {styles.contextMainContainer}>
        <Principal/>
        <AboutMe/>
      </section>
    </Layout>
  )
}
