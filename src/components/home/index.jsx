import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import starsAnimationData from '@/assets/lotties/stars.json'
import lightingAnimationData from '@/assets/lotties/lighting.json'
import smokeAnimationData from '@/assets/lotties/smoke.json'
import github from '@/assets/images/github.png'
import telegram from '@/assets/images/telegram.png'
import twitter from '@/assets/images/twitter.png'
import fusefi from '@/assets/images/fusefi.png'
import arrow from '@/assets/images/enter_app.png'
import NewsletterForm from './newsletter_form'

const HomePage = () => {
  const starsRef = useRef(null)
  const lightingRef = useRef(null)
  const smokeRef = useRef(null)
  const { animate } = useSelector(state => state.animation)

  useEffect(() => {
    if (smokeRef.current) {
      lottie.loadAnimation({
        animationData: smokeAnimationData,
        container: smokeRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true
      })
    }
  }, [])

  useEffect(() => {
    if (lightingRef.current) {
      lottie.loadAnimation({
        animationData: lightingAnimationData,
        container: lightingRef.current,
        renderer: 'svg',
        autoplay: animate,
        loop: false
      })
    }
  }, [animate])

  useEffect(() => {
    if (starsRef.current) {
      lottie.loadAnimation({
        animationData: starsAnimationData,
        container: starsRef.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [])

  return (
    <>
      <section className='homepage__container'>
        <div className='logo'>
          <img src={fusefi} />
          <a className='enter_app' rel='noreferrer noopener' target='_blank' href='https://app.fuse.fi'>
            <span>Enter App</span>
            <img src={arrow} />
          </a>
        </div>
        <div className='homepage'>
          {!isMobile && <div className='stars' ref={starsRef} />}
          {!isMobile && <div className='smoke' ref={smokeRef} />}
          {animate && <div className='lighting' ref={lightingRef} />}
          <div className='homepage__main grid-y align-spaced align-middle'>
            <div className='headline cell'>
              <h1 className='headline__title'>Frictionless DEFI is coming</h1>
              <p className='headline__text'>
                The DAO to bring the next billion
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
        <footer className='footer'>
          <a rel='noreferrer noopener' target='_blank' href='https://t.me/fuse_fi'>
            <img src={telegram} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://github.com/fuseio'>
            <img src={github} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://twitter.com/Fuse_Fi'>
            <img src={twitter} />
          </a>
        </footer>
      </section>
    </>
  )
}

export default HomePage
