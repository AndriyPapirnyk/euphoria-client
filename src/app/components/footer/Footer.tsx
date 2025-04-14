import "./Footer.scss"
import Image from "next/image"
import facebookIcon from "../../../../public/icons/facebook_f.png"
import instagramIcon from "../../../../public/icons/instagram_f.png"
import twitterIcon from "../../../../public/icons/twitter_f.png"
import linkedinIcon from "../../../../public/icons/linkedin_f.png"
import arrowIcon from "../../../../public/icons/arrow.png"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__col-list">
                <div className="footer__col">
                    <h1>Need Help</h1>
                    <ul>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Returns & Refunds</li>
                        <li>FAQ'S</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h1>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Euphoria Blog</li>
                        <li>Euphoriastan</li>
                        <li>Collaboration</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h1>More Info</h1>
                    <ul>
                        <li>Term and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h1>Location</h1>
                    <ul>
                        <li>support@euphoria.in</li>
                        <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                        <li>NH 8- Near Mahadev Hotel Udaipur, India- 313002</li>
                    </ul>
                </div>
            </div>
            <div className="footer__socials">
                <Image src={facebookIcon} alt={'facebook icon'} style={{width: "37px"}} />
                <Image src={instagramIcon} alt={'facebook icon'} style={{width: "37px"}} />
                <Image src={twitterIcon} alt={'facebook icon'} style={{width: "37px"}} />
                <Image src={linkedinIcon} alt={'facebook icon'} style={{width: "37px"}} />
            </div>
            <div className="footer__categories">
                <h1>Popular Categories</h1>
                <Image src={arrowIcon} alt={'arrow icon'} style={{width: "22px"}} />
            </div>
            <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
    </footer>
  )
}
