import React,{useState} from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({ setCategories }) => {


    const [inputValue, setinputValue] = useState('');
    const changeValue = (e) =>{
        setinputValue(e.target.value)
    }
    const submit = (e)=>{
            e.preventDefault();
            if(inputValue.trim().length > 2 ){
              setCategories(cats => [inputValue, ...cats])
              setinputValue('');
            }
            
    }


  return (
      <form onSubmit={submit}>
        <input 
            type="text"       
            value={inputValue}
            onChange={changeValue}
        />
      </form>
  )
}

AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired
}