import './grid.css'
export default function Gateway(){

    return (
      <div className="container payment-container">
        <h2 className="text-center mb-4">Choose Payment Method</h2>
        {/* Credit Card */}
        <div id="section1" className="section">
          <div className="payment-option">
            {/* <h4>Credit Card</h4> */}
            <br />
            <form id="creditCardForm">
              {/* Add your credit card form fields here */}
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" className="form-control" id="cvv" required />
              </div>
              <button type="button" className="btn btn-primary" onclick="processPayment('Credit Card')">Pay with Credit Card</button>
            </form>
          </div>
        </div>
        {/* PayPal */}
        <div id="section2" className="section">
          <div className="payment-option">
            <h4>PayPal</h4>
            <button type="button" className="btn btn-primary" onclick="processPayment('PayPal')">Pay with PayPal</button>
          </div>
        </div>
        {/* Bitcoin */}
        {/* <div class="payment-option">
		  <h4>Bitcoin</h4>
		  <p>Scan the QR code or copy the Bitcoin address to make a payment.</p> */}
        {/* Add Bitcoin QR code or address here */}
        {/* <div id="bitcoinQRCode" class="mb-3"></div>
		  <button type="button" class="btn btn-primary" onclick="processPayment('Bitcoin')">Pay with Bitcoin</button>
		</div> */}
        {/* Bank Transfer */}
        <div id="section3" className="section">
          <div className="payment-option">
            <h4>Bank Transfer</h4>
            <p>Make a transfer to the following bank account:</p>
            <p>Bank: Your Bank</p>
            <p>Account Number: XXXXXXXX</p>
            <button type="button" className="btn btn-primary" onclick="processPayment('Bank Transfer')">Pay with Bank Transfer</button>
          </div>
        </div>
        {/* USSD */}
        <div id="section4" className="section">
          <div className="payment-option">
            <h4>USSD</h4>
            <p>Dial the following USSD code on your phone:</p>
            <p>*XXXX#</p>
            <button type="button" className="btn btn-primary" onclick="processPayment('USSD')">Pay with USSD</button>
          </div>
        </div>
      </div>  
      )
}