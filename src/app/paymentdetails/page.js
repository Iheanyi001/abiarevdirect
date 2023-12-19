"use client"
import './grid.css'
import { useParams, useRouter } from 'next/navigation'

export default function Pagedetails(){
const router = useRouter();
function handleSubmit(e){
  e.preventDefault();
  router.replace(`https://paystack.com/pay/gzdu76qgds`);
}

    return (
      <div className="container payment-container">
        <div className="container">
        <div className="payment-slip">
          <h2>Summary Of Payments</h2>
          <form id="paymentForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="payerName">Payer Name:</label>
              <span>Digital Economy</span>
              {/* <input type="text" class="form-control" id="payerName" placeholder="Digital Economy" required> */}
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <span>20,000</span>
              {/* <input type="number" class="form-control" id="amount" placeholder="20,000" required> */}
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="payerName">Purpose Of Payment:</label>
              <span>For Certificate:</span>
              {/* <input type="text" class="form-control" id="payerName" placeholder="Certificate" required> */}
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="payerName">Phone:</label>
              <span>+234567890:</span>
              {/* <input type="text" class="form-control" id="payerName" placeholder="09020304050" required> */}
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="payerName">Ministry:</label>
              <span>Digital Economy:</span>
              {/* <input type="text" class="form-control" id="payerName" placeholder="Ministry Of Lands" required> */}
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="paymentDate">Payment Date:</label>
              <span>10-20-2023:</span>
              {/* <input type="date" class="form-control" id="paymentDate" placeholder="10-05-2023" required> */}
            </div>
            <hr />
            <button type="submit" className="btn btn-primary" id="generateBtn" style={{backgroundColor: '#077D53', color: 'white'}}>Proceed To Pay</button>
          </form>
          <div id="paymentSlipResult" className="mt-4" />
        </div>
      </div>
      </div>  
      )
}