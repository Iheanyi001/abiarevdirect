"use client"
import { useRouter } from 'next/navigation'
import { useState, useRef } from "react"


export default function Home() {
    const [abssin, setAbssin] = useState();
    const subBtn = useRef();
    const router = useRouter()
    function handleChange(e){
        if(e.target.value.length == 11)
        {
            subBtn.current.style.backgroundColor = "#077D53"
        }
        else{
            subBtn.current.style.backgroundColor = "#bbeddc"
        }
       setAbssin(e.target.value);
       
    }

    const handleSubmit = (e)=>{
        console.log('soelsoel')
        e.preventDefault();
        if(abssin.length == 11)
        router.push(`payment/${abssin}`);
    }
  return (
    <div className="login">
              <div className="login-grids">
                <div className="col-md-6 log">
                  <h3 className="tittle">Enter ABBSIN No <i className="glyphicon glyphicon-lock" /></h3>
                  <p>Welcome, please enter the following to continue.</p>
                  <p>If you have previously Login with us, <a href="#">click here</a></p>
                  <form onSubmit={handleSubmit} method="POST">
                    <h5>Enter ABBSIN:</h5>	
                    <input type="text" value={abssin} name="abssin_no" onChange={handleChange} />
                    {/* <h5>Password:</h5>
						 <input type="password" value="">					 */}
                    <a href="./register">
                      <input type="submit" defaultValue="Proceed"  ref={subBtn} style={{backgroundColor:'#bbeddc'}}/>
                    </a>
                  </form>
                  {/* <a href="#">Forgot Password ?</a> */}
                </div>
                <div className="col-md-6 login-right">
                  <h3 className="tittle">Get ABSSIN <i className="glyphicon glyphicon-file" /></h3>
                  <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  <a href="registration.html" className="hvr-bounce-to-bottom button">Get ABSSIN</a>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
  )
}
