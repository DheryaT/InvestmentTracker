import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

function PortfolioForm() {

    const onSubmit = e => {
        e.preventDefault()
    }

    const [text, setText] = useState('')

  return (
    <section className='form'>
        <form onSubmit = {onSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Portfolio</label>
                <input type = "text" name="text" id="text" value = {text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type = 'submit'>
                    Add Portfolio
                </button>
            </div>
        </form>
    </section>
  )
}

export default PortfolioForm