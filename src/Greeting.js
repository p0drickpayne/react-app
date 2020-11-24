import React from 'react'
import PropTypes from 'prop-types'



function Greeting(props) {
   
      return(
        <p>Hello {props.name || PropTypes.name}!</p>
      ) 
}

Greeting.propTypes = {
    name: PropTypes.string
};

Greeting.defaultProps = {
    name: 'World'
}



export default Greeting