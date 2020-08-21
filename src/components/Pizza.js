import React from 'react'
import {Link, Route} from 'react-router-dom'
import PizzaOne from './PizzaOne'

const Pizza = (props) => {
    const {user} = props
    if (!user) return <div>hi</div>
    return (
        <div>
            <p>Congrats! Pizza is on it's way!</p>
            <Link to='pizza/one'>
                <p>Name: {user.name}</p>
                <p>Size: {user.size}</p>
                <p>Side: {user.side}</p>
                <p>Sauce: {user.sauce}</p>
                <p>Special Instruction: {user.special}</p>
                <p>Glutten Free?: {user.glutenFree ? 'yes' : 'no'}</p>
            </Link>
            <Route path='pizza/one'>
                <PizzaOne name={user.name}/>
            </Route>
        </div>
    )
}

export default Pizza