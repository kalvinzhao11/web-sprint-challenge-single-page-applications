import React from 'react'
import {useHistory } from 'react-router-dom'

const Form = (props) => {
    const {submit, update, value, error, disabled} = props

    const history = useHistory()
    const toPizza = () => {
      history.push('/pizza')
    }
    const onSubmit = (evt) =>{
        evt.preventDefault()
        submit()
        toPizza()
    }
    const onInputChange = (evt) =>{
        const {name, value } = evt.target
        update(name, value)
    }

    return (
        <form onSubmit={onSubmit}>

            <label>name&nbsp;
            <input
                value={value.name}
                onChange={onInputChange}
                name='name'
                type='text'
            />
            </label>
            {/* <Error>{error.name}</Error> */}

            <label>Choice of Side&nbsp;
            <select 
                value={value.role}
                onChange={onInputChange}
                name="side"
                >
                <option value="">Select</option>
                <option value="fries">fries</option>
            </select>
            </label>
            {/* <Error>{error.size}</Error> */}

            <label>Choice of Sauce</label>
            <label>Original Red&nbsp;
                <input 
                    type='radio'
                    name='sauce'
                    value='red'
                    checked={value.sauce === 'red'}
                    onChange={onInputChange}
                    />
            </label>

            <label>Garlic Ranch&nbsp;
                <input 
                    type='radio'
                    name='sauce'
                    value='ranch'
                    checked={value.sauce === 'ranch'}
                    onChange={onInputChange}
                    />
            </label>

            <label>BBQ Sauce&nbsp;
                <input 
                    type='radio'
                    name='sauce'
                    value='bbq'
                    checked={value.sauce === 'bbq'}
                    onChange={onInputChange}
                    />
            </label>

            <label>Spinach Alfredo&nbsp;
                <input 
                    type='radio'
                    name='sauce'
                    value='alfredo'
                    checked={value.sauce === 'alfredo'}
                    onChange={onInputChange}
                    />
            </label>

            <label>Special Instrucution&nbsp;
            <input
                value={value.special}
                onChange={onInputChange}
                name='special'
                type='text'
            />
            
            </label>
        {/* <Error>{error.tos}</Error> */}

        <button onSubmit={onsubmit} disabled={disabled}>Submit</button>
        </form>
    )
}

export default Form