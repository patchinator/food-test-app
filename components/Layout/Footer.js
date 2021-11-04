import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.position}>
      <ul className={style.icons}>
        <li>
          <a
            href="https://github.com/patchinator"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/patrick.hoveman"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="mailto:patrickhoveman@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
