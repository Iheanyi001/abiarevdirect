import './bootstrap.css'
import './lightbox.css'
import './style.css'
import Nav from './Nav.js';
import TopNav from './TopNav.js'

export const metadata = {
  title: 'AbiaRevDirect',
  description: 'Abia payment portal',
}

export default function RootLayout({ children }) {
 return (
  <html lang="en">
      <body>
      <div>
        <div className="h-top" id="home">
          <TopNav/>
        </div>
        <div className="full">
          <Nav/>
          
          <div className="col-md-9 main">
            {/* login-page */}
            
            {children}
            
            {/* //login-page */}
            <div className="clearfix"> </div>
            {/*/footer*/}
            <div className="footer">
              <div className="footer-top">
                <div className="col-md-4 footer-grid">
                  <h4>AbiaRevDirect </h4>
                  <ul className="bottom">
                    <li> Your gateway to streamlined, transparent tax payments, fostering ease and accountability in financial transactions across the state.</li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grid">
                  <h4>Message Us Now</h4>
                  <ul className="bottom">
                    <li><i className="glyphicon glyphicon-home" />Available 24/7 </li>
                    <li><i className="glyphicon glyphicon-envelope" /><a href="mailto:info@example.com">info@abiarevdirect.gov.ng</a></li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grid">
                  <h4>Address Location</h4>
                  <ul className="bottom">
                    <li><i className="glyphicon glyphicon-map-marker" />29 Abia Investment Road, Umuahia </li>
                    <li><i className="glyphicon glyphicon-earphone" />phone: (+234) 7011134545 </li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="copy">
              <p>© 2023. All Rights Reserved | Design by <a href="/" style={{ color:'lightblue' }}>Digital Economy and SME Developers</a> </p>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>	
        {/*//footer*/}
        {/*start-smooth-scrolling*/}
        <a href="#home" id="toTop" className="scroll" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
      </div>
        
        
        
        
        </body>
    </html>
  )
}
