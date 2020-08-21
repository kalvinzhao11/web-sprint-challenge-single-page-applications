import React from 'react'

const PizzaOne = (props) => {

    const {name} = props
    return (
        <div>
            <p>{name} is arriving in 2 minutes</p>
        </div>
    )
}

export default PizzaOne