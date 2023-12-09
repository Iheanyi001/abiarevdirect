"use client"
import { useState, useRef } from "react"

export default function Register() {
    const [abssin, setAbssin] = useState();
    const subBtn = useRef();
    function handleChange(e){
        
       
    }
  return (
    <div className="sign-up-form">
        <h3 className="tittle">Registration <i className="glyphicon glyphicon-file" /></h3>
        <p>Having hands on experience in creating innovative designs,I do offer design 
          solutions which harness</p>
        <div className="sign-up">
          <h3 className="tittle reg">Personal Information <i className="glyphicon glyphicon-user" /></h3>
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="a">First Name* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="text" className="text" defaultValue="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="b">Last Name* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="text" className="text" defaultValue="Last Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Last Name';}" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="c">Email Address* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="text" className="text" defaultValue="Email Address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email Address';}" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <h3 className="tittle reg">Login Information <i className="glyphicon glyphicon-off" /></h3>
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="d">Password* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="password" className="Password" defaultValue="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="sign-u">
            <div className="sign-up1">
              <h4>Confirm Password* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="password" className="Password" defaultValue="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <form>
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
  )
}
