import React from 'react'
import PropTypes from 'prop-types'

function CounterButton(props){
    return (
        <input type="button" value={props.initialValue} />
    )
}

CounterButton.propTypes = {
    initialValue: PropTypes.number.isRequired
};

// Greeting.defaultProps = {
//     name: 'World'
// }

export default CounterButton