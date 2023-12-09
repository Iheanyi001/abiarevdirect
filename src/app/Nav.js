import Logo from '../images/page_logo.png'
import Image from 'next/image'
import Link from 'next/link'


export default function Nav(){
    return (
        <div className="col-md-3 top-nav login">
            <div className="logo">
              {/* <h4>AbiaRevDirect</h4> */}
              <Image
                src={Logo}
                alt="Picture of the author"
                />
              <a href="index.html"><h1>AbiaRev<br />Direct</h1></a>
            </div>
            <div className="top-menu">
              <span className="menu"> </span>
              <ul className="cl-effect-16">
                <li><Link href="/" data-hover="HOME">Home</Link></li> 
                <li><Link href="/about" data-hover="About">About</Link></li>
                {/* <li><Link href="grid.html" data-hover="Grids">Grids</Link></li>
						<li><Link href="services.html" data-hover="Services">Services</Link></li> */}
                {/* <li><Link href="gallery.html" data-hover="Gallery">Gallery</Link></li> */}
                <li><Link href="/contact" data-hover="CONTACT">Contact</Link></li>
              </ul>
              {/* script-for-nav */}
              {/* script-for-nav */} 	
              <ul className="side-icons">
                <li><a className="fb" href="#" /></li>
                <li><a className="twitt" href="#" /></li>
                {/* <li><a class="goog" href="#"></a></li>
							<li><a class="drib" href="#"></a></li> */}
              </ul>
            </div>
          </div>

    )
}