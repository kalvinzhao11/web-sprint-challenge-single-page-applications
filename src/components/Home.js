import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'
import formSchema from '../schema/formSchema'
import { Route, Link } from 'react-router-dom'
import Pizza from './Pizza'

const Home = (props) => {
    const initialForm = {
        name: '',
        side: '',
        sauce: '',
        special: '',
        toppings: {
            pepperoni: false,
            sausage: false,
            bacon: false, 
            spicySausage: false,
        },
      }
    
      // the current form to be submitted
      const [currentForm, setCurrentForm] = useState(initialForm)
      // data of all pizzas
      const [pizzas, setPizzas] = useState([])
      // error message state
      const [error, setError] = useState(initialForm)
    
      const [disabled, setDisabled] = useState(true)
    
      //axios post function
      const postCredential = pc => {
        axios.post('https://reqres.in/api/pizzas', pc)
          .then(response =>{
            setPizzas(pizzas.concat(response.data)) //maybe change form to only current logged in user
          })
          .catch(error => {
            debugger
          })
          .finally(()=>{
            setCurrentForm(initialForm)
          })
      }
    
      //need a update form function
      const updateForm = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
          setError({
            ...error,
            [name]: "",
          })
        })
        .catch(err => {
          setError({
            ...error,
            [name]: err.errors[0],
          })
        })
        setCurrentForm({...currentForm, [name]: value})
      }
    
      //need a submit function
      //check credentials
      //post using an axios function
      //reset form
      const submitForm = () => {
        const appendForm = {
          name: currentForm.name.trim(),
          side: currentForm.side,
          sauce: currentForm.sauce,
          special: currentForm.special.trim(),
          toppings: Object.keys(currentForm.toppings).filter(t => {
            return currentForm.toppings[t] //only filter the truely
          })
        }
        if (!appendForm.name || !appendForm.side ) return
        postCredential(appendForm)
      }

      const checkboxChange = (name, isChecked) => {
        // 🔥 STEP 7- IMPLEMENT!
        //  set a new state for the whole form
        setCurrentForm({
          ...currentForm,
          toppings: {
            ...currentForm.toppings,
            [name] : isChecked
          }
        })
      }
    
      useEffect(() => {
        formSchema.isValid(currentForm)
          .then(valid => {
            setDisabled(!valid); 
        });
      }, [currentForm])
    
      return (
        <div className="App">
            <Link to='/form'>Order</Link>
            <Route path="/form">
                <Form 
                    submit={submitForm}
                    update={updateForm}
                    checkboxChange={checkboxChange}
                    value={currentForm}
                    error={error}
                    disabled={disabled}
                    pizzas={pizzas}
                    />
            </Route>
          {
            pizzas.map(user =>{
              return <Pizza user={user}/>
            })
          }
        </div>
      );
}

export default Home