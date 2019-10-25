import React from 'react'
import '../App.css'



const LogIn = (props) => {
    return (
        <div className='App'>
            <div className='header' >
                {(props.check)?
                <h1>Logged In</h1>
                :
                <h1>Logged Out</h1>
                }
            </div>
        </div>
    )
}
export default LogIn