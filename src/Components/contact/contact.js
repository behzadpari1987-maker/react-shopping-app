import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="card p-4 text-center">
        <h3>Contact Us</h3>

        <p>Email: info@myshop.com</p>
        <p>Phone: +49 123 456789</p>

        <h5 className="mt-3">Social Media</h5>

        <div>
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icon"
          />

          <FontAwesomeIcon
            icon={faFacebook}
            className="social-icon"
          />

          <FontAwesomeIcon
            icon={faLinkedin}
            className="social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;