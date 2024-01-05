"use client"

import { usePathname} from 'next/navigation'
import Link from 'next/link'



export default function TopNav(){
    const pathname = usePathname()
    
    return(
        <div className="top-header">
            <ul className="cl-effect-16 top-nag">
              <li><Link className={pathname == "/"?  'active' : ''} href="/">Home</Link></li>
              <li><Link id="register" className={pathname =='/register' ? 'active':''} href="/register" data-hover="Registration">Registration</Link></li>
              <li><Link id="about" className={pathname=='/about' ? 'active':''} href="/about" data-hover="About">About</Link></li>
              <li><Link id="contact" className='nav' href="/contact" data-hover="CONTACT">Contact</Link></li>
            </ul>
            <div className="search-box" >
              <div className="b-search" style={{background:'transparent',display: 'flex', justifyContent: 'flex-end',alignItems: 'flex-end',border: 'none'}}>
                <button style={{background: 'none',border: 'none',fontSize: '18px',fontWeight: 'bold',color: 'green',width: '100px', borderRadius: '20px',background: 'linear-gradient(to right, #f5f5f5, #fff)',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',transition: 'transform 0.3s ease-in-out',padding: '10px'}}>Verify</button>
              </div>
            </div>
            <div className="clearfix" />
          </div>
    )
}