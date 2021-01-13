/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

// import icons
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <ul id="navbatidaperfeita" >
        <li><a class="icon -center" href="https://batidaperfeita.confira.link/instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} style={{ fill: '#fff' }} /></a>     </li>
        <li><a class="icon -center" href="https://batidaperfeita.confira.link/youtube" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} style={{ fill: '#fff' }}/></a>     </li>
        <li><a class="icon -center" href="https://batidaperfeita.confira.link/facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ fill: '#fff' }}/></a>     </li>
        <li><a class="icon -center" href="https://batidaperfeita.confira.link/telegram" target="_blank" rel="noopener noreferrer"><FaTelegram size={30} style={{ fill: '#fff' }}/></a>     </li>
      </ul> 
      <p>GatsbyJS Theme <span className="icon -love"><RiHeart2Line /></span> por <Link to="/">Stackrole.com</Link></p>
    </div>
  </footer>
)

export default Footer