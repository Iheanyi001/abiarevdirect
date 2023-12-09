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
            <div className="search-box" style={{backgroundColor: '#077D53'}}>
              <div className="b-search" style={{backgroundColor: '#077D53'}}>
                <form style={{backgroundColor: '#077D53'}}>
                  <input type="text" defaultValue="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" style={{backgroundColor: '#077D53'}} />
                  <input type="submit" value="" />
                </form>
              </div>
            </div>
            <div className="clearfix" />
          </div>
    )
}