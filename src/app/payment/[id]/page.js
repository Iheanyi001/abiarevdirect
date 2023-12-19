"use client"

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Payment(){
  const handleSubmit = (e)=>{
    e.preventDefault();
    router.push(`https://paystack.com/pay/gzdu76qgds`);
}
  const router = useRouter();
  const {id} = useParams()
  const [showMin, setShowMin] = useState(false)
  const [currentMini, setCurrentMini] = useState('');
  const [duration, setDuration] = useState('');
  const [amount, setAmount] = useState('');
  const miniMain = [
    'MINISTRY OF DIGITAL ECONOMY AND SMEs','MINISTRY OF AGRICULTURE', 'MINISTRY OF JUSTICE','MINISTRY OF FINANCE', 'MINISTRY OF WORKS',
    'MINISTRY OF SCIENCE AND TECHNOLOGY','MINISTRY OF PUBLIC UTILITIES AND WATER SUPPLY', 'MINISTRY OF COMMERCE AND INDUSTRY'
  ];
  const purposeMain = {
    'MINISTRY OF DIGITAL ECONOMY AND SMEs':[
      {title:'SME Certificate', duration:'One Time Payment', amount:'₦20,000'},
    ],
    'MINISTRY OF AGRICULTURE':[
      {title:'Advertisement Tax', duration:'One Time Payment', amount:'₦20,000'},
      {title:'Gaming Licenses', duration:'Recurring Payment', amount:'₦15,000'},
      {title:'BOREHOLE DRILLING LICENSES', duration:'One-Time Payment', amount:'₦38,938'},
    ],
    'MINISTRY OF JUSTICE':[
      {title:'DRIVERS LICENSES', duration:'Recurring Payment', amount:'₦20,000'},
      {title:'Rider\'s Permit', duration:'Recurring Payment', amount:'₦28,000'},
      {title:'Drilling Permit', duration:'One-Time Payment', amount:'₦10,000'},
    ],
    'MINISTRY OF FINANCE':[
      {title:'Advertisement Tax', duration:'One Time Payment', amount:'₦20,000'},
      {title:'Gaming Licenses', duration:'Recurring Payment', amount:'₦15,000'},
      {title:'BOREHOLE DRILLING LICENSES', duration:'One-Time Payment', amount:'₦38,938'},
    ],
    'MINISTRY OF WORKS':[
      {title:'DRIVERS LICENSES', duration:'Recurring Payment', amount:'₦20,000'},
      {title:'Rider\'s Permit', duration:'Recurring Payment', amount:'₦28,000'},
      {title:'Drilling Permit', duration:'One-Time Payment', amount:'₦10,000'},
    ],
    'MINISTRY OF SCIENCE AND TECHNOLOGY':[
      {title:'Advertisement Tax', duration:'One Time Payment', amount:'₦20,000'},
      {title:'Gaming Licenses', duration:'Recurring Payment', amount:'₦15,000'},
      {title:'BOREHOLE DRILLING LICENSES', duration:'One-Time Payment', amount:'₦38,938'},
    ],
    'MINISTRY OF PUBLIC UTILITIES AND WATER SUPPLY':[
      {title:'DRIVERS LICENSES', duration:'Recurring Payment', amount:'₦20,000'},
      {title:'Rider\'s Permit', duration:'Recurring Payment', amount:'₦28,000'},
      {title:'Drilling Permit', duration:'One-Time Payment', amount:'₦10,000'},
    ],
    'MINISTRY OF COMMERCE AND INDUSTRY':[
      {title:'Advertisement Tax', duration:'One Time Payment', amount:'₦20,000'},
      {title:'Gaming Licenses', duration:'The payment you are about to make is part of our monthly subscription plan. By processing this payment, you\'re renewing our ongoing services for the upcoming month', amount:'₦15,000'},
      {title:'BOREHOLE DRILLING LICENSES', duration:'One-Time Payment', amount:'₦38,938'},
    ],
  }

  const [ministry, setMinistry] = useState([
    'MINISTRY OF DIGITAL ECONOMY AND SMEs','MINISTRY OF AGRICULTURE', 'MINISTRY OF JUSTICE','MINISTRY OF FINANCE', 'MINISTRY OF WORKS',
    'MINISTRY OF SCIENCE AND TECHNOLOGY','MINISTRY OF PUBLIC UTILITIES AND WATER SUPPLY', 'MINISTRY OF COMMERCE AND INDUSTRY'
  ])
  const [purpose, setPurpose] = useState([])
  const handleMinClick = ()=>{
    setShowMin(true)
  }
  const handleMiniListClick = (e)=>{
     setShowMin(false)
     setCurrentMini(e.target.innerText);
     setPurpose(purposeMain[e.target.innerText]);
     setDuration(purposeMain[e.target.innerText][0].duration);
    setAmount(purposeMain[e.target.innerText][0].amount)
  }
  const handleChange = (e)=>{

   let searchValue = e.target.value.toUpperCase();
   setCurrentMini(e.target.value);
   console.log(e.target.value)
   if(searchValue.length <=0){
    setMinistry(miniMain)
   }else{
   let filterArr =  miniMain.map((obj)=>{
          if(obj.toUpperCase().indexOf(searchValue) > -1){
            return obj
          }
          else{
            return null;
          }
      }).filter(obj=>obj);
    setMinistry(filterArr);
   }
  
  }

  const handleOptionSelect = (e) =>{
    //setDuration(obj.duration);
    //console.log(e.target.value);
    //console.log({purposeMain})
    purposeMain[currentMini].map(obj=>{
      if(obj.title == e.target.value){
        setDuration(obj.duration);
        setAmount(obj.amount)
      }
    })
   }

    return(
    <div className="sign-up-form">
        <h3 className="tittle">Payment <i className="glyphicon glyphicon-briefcase" /></h3>
        <p>Please complete the payment process by choosing the ministry and specifying the purpose of payment</p>
        <div className="sign-up">
          
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="a">Abssin ID* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="text" className="text" value={id} onfocus="this.value = '';" disabled={true} />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="b">Ministry* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input style={{ color: 'black' }} type="text" onClick={handleMinClick} className="text" value={currentMini} onChange={handleChange} />
                  <ul id="myUL" style={{listStyleType:'none', padding: 0, margin: 0}}>
                    {showMin && ministry.map((obj,i)=>{
                      return(
                        <li key={i} onClick={handleMiniListClick} style={{ border: '1px solid #ddd',
                          marginTop: '-1px',
                          backgroundColor: '#f6f6f6',
                          padding: '12px',
                          textDecoration: 'none',
                          fontSize: '18px',
                          color: 'black',
                          display: 'block'
                        }}><a href="#">{obj}</a></li>
                      )
                    })}
                  </ul>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
            
          

          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="c">Purpose of payment* :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <select className="text" onChange={handleOptionSelect} style={{ color: 'black' }}>
                      {purpose.map((obj,i) =>{
                       return obj.length <= 0
                        ?
                        (<option value={obj.title}>---Select Purpose of Payment----</option>)
                        :
                        (
                          <option key={i} value={obj.title}>{obj.title}</option>
                        )
                      })}
                </select>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>

          <div className="sign-u">
            <div className="sign-up1">
              <h4 className="a">Amount :</h4>
            </div>
            <div className="sign-up2">
              <form>
                <input type="text" className="text" value={amount}disabled={true} />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          
          <div className="sign-u">
            <div className="sign-up1">
              
            </div>
            <div className="sign-up2">
              <form>
                <span>{duration}</span>
               </form>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="sign-u">
            <div className="sign-up1">
              
            </div>
            <div className="sign-up2">
              
            </div>
            <div className="clearfix"> </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="submit" style={{ width:'50%' }} value={`Proceed to Pay ${amount}`} />
          </form>
        </div>
      </div>)
      
}