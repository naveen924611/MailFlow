import React from 'react'
import './Login.css'
const Login :React.FC = ()=> {
  return (
    <div className='flex-box'>   
     {/* <div className='Login'> */}
        <div className='login-box'>
            <h1>Login</h1>
            <div className='login-divs ' style={{width:"100%"}} >
                {/* <button className='login-btn' style={{background:"#CFE6D8"}}>Sign in with Google</button> */}
                <button className="google-btn">
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" 
         alt="Google icon" 
         className="google-icon" />
    Login with Google
</button>

            </div>
            <div style={{width:"100%"}}> <p style={{textAlign:"center" , marginTop:"10px"}}>or sign in with google</p></div>
            <div className='login-divs input-divs'>
            <input type="text" className='login-input' style={{marginTop:"10px !important"}} placeholder='Username' />    
            </div>
            <div className=' login-divs input-divs'>
             <input type="password" className='login-input' placeholder='Password' />
            </div >
     
            {/* <div className='login-divs'> */}
              <button className='login-btn'>Login</button>
            {/* </div> */}

        </div>
     {/* </div> */}
    </div>
  )
}

export default  Login;