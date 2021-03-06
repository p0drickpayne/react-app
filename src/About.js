import React from 'react'
import PropTypes from 'prop-types'
import Axios from './Axios'
import Styled from 'styled-components'

const Paragraph = Styled.p`
  text-decoration: underline;
`

function About(props) {
   
      return(
        <div>
        <Paragraph>Hello {props.name || PropTypes.name}!</Paragraph>
        <Axios />
        </div>
      ) 
}

About.propTypes = {
    name: PropTypes.string
};

// Greeting.defaultProps = {
//     name: 'World'
// }



export default About