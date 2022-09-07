import LogoS from '../../assets/images/Screenshot.png'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'
import {
  faSolarPanel,
  faWind,
  faBatteryThreeQuarters,
  faChargingStation,
  faLightbulb,
  faPlug,
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'N',
    'i',
    'c',
    'o',
    'l',
    'a',
    'e',
    ' ',
    'P',
    'a',
    't',
    'r',
    'a',
    's',
  ]
  const jobArray = [
    'S',
    'u',
    's',
    't',
    'a',
    'i',
    'n',
    'a',
    'b',
    'i',
    'l',
    'i',
    't',
    'y',
    ' ',
    'P',
    'r',
    'o',
    'f',
    'e',
    's',
    's',
    'i',
    'o',
    'n',
    'a',
    'l',
  ]

  // useEffect(() => {
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src = {LogoTitle} alt='developer'/> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Energy Analyst | Data Scientist | Data Enginner </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faSolarPanel} color="#FFFF00" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faWind} color="#D1F1F9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faBatteryThreeQuarters} color="#EFFF00" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faChargingStation} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faLightbulb} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPlug} color="#EC4D28" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
