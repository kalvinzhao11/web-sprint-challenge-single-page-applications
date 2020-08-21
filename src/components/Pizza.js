import React from 'react'

const Pizza = (props) => {
    const {user} = props
    if (!user) return <div>hi</div>
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Side: {user.side}</p>
            <p>Sauce: {user.sauce}</p>
            <p>Special Instruction: {user.special}</p>
        </div>
    )
}

export default Pizza