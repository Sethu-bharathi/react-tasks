import "./footer.css";
import Cities from "./cityData";
import { useEffect } from "react";
import CityLink from "../../Atoms/CityLink";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <div>
            <div className="uppercase faded">Company</div>
            <ul>
              <li>
                <a href="/about" target="_blank">
                  About us
                </a>
              </li>
              <li>
                <a href="/team" target="_blank">
                  Team
                </a>
              </li>
              <li>
                <a href="/careers" target="_blank">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://blog.swiggy.com"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Swiggy Blog
                </a>
              </li>
              <li>
                <a href="/bug-bounty" rel="nofollow noopener" target="_blank">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="/swiggy-super" rel="nofollow noopener" target="_blank">
                  Swiggy One
                </a>
              </li>
              <li>
                <a
                  href="https://corporate.swiggy.com"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Swiggy Corporate
                </a>
              </li>
              <li>
                <a
                  href="/swiggy-instamart"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Swiggy Instamart
                </a>
              </li>
              <li>
                <a href="/swiggy-genie" rel="nofollow noopener" target="_blank">
                  Swiggy Genie
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="uppercase faded">Contact</div>
            <ul>
              <li>
                <a href="/support" alt="Help &amp; Support">
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="https://partner-with-us.swiggy.com/onboard#/swiggy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  Partner with us
                </a>
              </li>
              <li>
                <a
                  href="https://ride.swiggy.com/"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="uppercase faded">Legal</div>
            <ul>
              <li>
                <a href="/terms-and-conditions" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/refund-policy" target="_blank">
                  Refund &amp; Cancellation
                </a>
              </li>
              <li>
                <a href="/privacy-policy" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" target="_blank">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/offer-terms" target="_blank">
                  Offer Terms
                </a>
              </li>
              <li>
                <a href="/beware-of-phishing-and-fraud" target="_blank">
                  Phishing &amp; Fraud
                </a>
              </li>
              <li>
                <a href="/tnc-corporate-sm" target="_blank">
                  Corporate – Swiggy Money Codes Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/tnc-corporate-discount" target="_blank">
                  Corporate - Swiggy Discount Voucher Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              rel="nofollow noopener"
              alt="Apple Store"
              target="_blank"
            >
              <img
                alt="Playstore"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              rel="nofollow noopener"
              target="_blank"
            >
              <img
                alt="Swiggy"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              />
            </a>
          </div>
        </div>
        <div id="city-links">
          <h4 className="uppercase faded">WE DELIVER TO</h4>
          <div>
            <ul>
              {Cities.slice(0, Math.floor(Cities.length / 4) + 1).map(
                (city) => (
                  <CityLink
                    text={city.slug}  
                    link={`https://www.swiggy.com/city/${city.slug}`}
                    key={city.cityId}
                  />
                )
              )}
            </ul>
            <ul>
              {Cities.slice(
                Math.ceil(Cities.length / 4),
                2 * Math.ceil(Cities.length / 4)
              ).map((city) => (
                <CityLink
                  text={city.slug}
                  link={`https://www.swiggy.com/city/${city.slug}`}
                  key={city.cityId}
                />
              ))}
            </ul>
            <ul>
              {Cities.slice(
                2 * Math.ceil(Cities.length / 4),
                3 * Math.ceil(Cities.length / 4)
              ).map((city) => (
                <CityLink
                  text={city.slug}
                  link={`https://www.swiggy.com/city/${city.slug}`}
                  key={city.cityId}
                />
              ))}
            </ul>
            <ul>
              {Cities.slice(3 * Math.ceil(Cities.length / 4)).map((city) => (
                <CityLink
                  text={city.slug}
                  link={`https://www.swiggy.com/city/${city.slug}`}
                  key={city.cityId}
                />
              ))}
            </ul>
          </div>
        </div>
        <br />
        <div className="flex-spacebetween">
          <div>
            <a href="/">
              <img
                className=""
                width="142"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              />
            </a>
          </div>
          <div>© 2023 Swiggy</div>
          <div className="flex-row">
            <a
              href="https://www.facebook.com/swiggy.in"
              rel="nofollow noopener"
              alt="facebook"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              />
            </a>
            <a
              href="https://pinterest.com/swiggyindia"
              rel="nofollow noopener"
              alt="pintrest"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
              />
            </a>
            <a
              href="https://instagram.com/swiggyindia/"
              rel="nofollow noopener"
              alt="instagram"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt="Instagram"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              />
            </a>
            <a
              href="https://twitter.com/swiggy"
              rel="nofollow noopener"
              alt="twitter"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt="Twitter"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
