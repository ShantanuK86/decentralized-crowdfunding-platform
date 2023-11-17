import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterComponent(props) {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="trademarkSection">DeFi © 2023</div>
        <div className="externalLinks">
          <div className="linkWrapper">
            <div className="icon">
              <a
                href="\"
                className="twitter-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="icon">
              <a
                href="\"
                className="github-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="icon">
              <div className="insta-icon-bg">
                <a
                  href="\"
                  className="insta-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
