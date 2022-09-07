import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPython,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  //     useEffect(() => {
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     }, 4000)
  // }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              // letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p> 
           I'm a visionary thinker, the evangelist of a decentralized economy, 
           and the supporter of a zero-marginal-cost society.
          </p>
          <p>
            Also, I'm a sustainability professional, adept at enhancing resource
            and energy conservation for different types of businesses.
            Systematic, well-coordinated and resilient with strong attention to
            detail, good critical thinking skills and superior work ethic.
            Focused on utilizing expertise in new role devoted to boosting
            environmental outreach and stimulating sustainable practices.
          </p>
          <p>
            Tech-savvy and innovative.
          </p>
          <br>
  
          </br>
          <p>
          <b>Tech-stack experience:</b>
          </p>
          <p>
            <b>Cloud Computing:</b> AWS (S3, EC2, Lambda, Redshift, Athena, Glue)
          </p>
          <p>
            <b>Programming Languages:</b> Python, SQL, JavaScript, HTML
          </p>
          <p>
            <b>Data Science:</b> Pandas, Numpy, Scikit-Learn
          </p>
          <p>
            <b>Visualization:</b> Bokeh, Matplotlib, Plotly
          </p>
          <p>
            <b>Dashboard Software:</b> Qlick Sense, PowerBI, Domo, Graffana
          </p>
          
          <p>
            <b>Distributed version control:</b> GitHub, GitLab
          </p>


        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
