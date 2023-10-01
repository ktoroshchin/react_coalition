import kazbegi_0 from '../assets/kazbegi_0.jpg'
import kazbegi_1 from '../assets/kazbegi_1.jpg'
import kazbegi_2 from '../assets/kazbegi_2.jpg'
import Slider from './Carousel'
import MenuNav from './Menu'
import Schedule from './Schedule'
import AccordionMenu from './Accordion'
import { useEffect, useState } from 'react'
import '../App.css'

function App() {
  const [view, setView] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setView(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])


  return (
    <main>
      <div className='hero'>
        <div className='hero__avatar'>
          <img alt='img_mountain' src={kazbegi_0} />
        </div>
        <div className='hero__nav'>
          <a href='#hero_1'>01. HISTORY</a>
          <a href='#hero_2'>02. TEAM</a>
        </div>
        <img alt='img_mountain' src={kazbegi_0} />
      </div>

      {/*****SECTION 1*************/}
      <div className='hero_1__logo__nav'>
        <div className='hero_1__logo'>
          <img alt='img_mountain' src={kazbegi_1} />
          <p>KAZBEGI</p>
        </div>
        <div className='hero_1__nav'>
          <a href='#hero_1'>01. HISTORY</a>
          <a href='#hero_2'>02. TEAM</a>
        </div>
      </div>

      <div id='hero_1' className='hero'>

        <div className='hero_1__container'>
          <div className='hero_1__number__history'>
            <h1 className='hero_1__number'>01</h1>
            <div className='hero_1__history'>
              <h3>HISTORY</h3>
              <div className='dot'></div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum atque magnam vel culpa provident cum, reiciendis fugiat iste nisi debitis eaque tenetur totam laborum perspiciatis numquam excepturi eos consectetur.</p>
        </div>


        <img alt='img_mountain' src={kazbegi_1} />
        <div className='slider_container'>
          <Slider />
        </div>
      </div>

      {/**********SECTION 2*************/}

      <div className='hero_2'>
        <div className='hero_2__number__climb'>
          <h1 className='hero_2__number'>02</h1>
          <div className='hero_2__climb'>
            <h3>CLIMB</h3>
            <div className='dot'></div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum atque magnam vel culpa provident cum, reiciendis fugiat iste nisi debitis eaque tenetur totam laborum perspiciatis numquam excepturi eos consectetur.</p>
      </div>

      {view < 768 ? <AccordionMenu /> : <MenuNav />}

      <div id='hero_2' className='hero_2__container'>
        <img alt='img_mountain' src={kazbegi_2} />
        <Schedule />
      </div>

      <div className='hero_2_footer'>
        <div className='hero_1__logo'>
          <img alt='img_mountain' src={kazbegi_1} />
          <p>KAZBEGI MOUNTAINS</p>
        </div>
        <p>COPYRIGHT 2023. ALL RIGHTS RESERVED</p>
      </div>
    </main>
  )
}

export default App
