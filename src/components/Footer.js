import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="abc">
        <div className="contact">
          <div className="call abc">
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <a href="tel:+91 630-666-479-5">+91 (630) 666-4795</a>
          </div>

          <div className="call abc">
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <a href="mailto:info@contentlink.in">info@contentLink.in</a>
          </div>

          <div className="call abc">
            <span>
              <i className="fa fa-share"></i>
            </span>
            <a href="contact.html">connect</a>
          </div>
        </div>

        <div className="logo">
          <a href="http://localhost:3007/" title="Pyari Aanya">
            <img src={props.Pic} alt="LOGO" />
          </a>
        </div>

        <div className="details">
          <p>❝ If you think you are right then do what you think is right. ❞</p>
        </div>
      </footer>

      <div className="copyright">
        <h4>Copyright ©2022 All Rights Reserved Design by contentLink 2022</h4>
      </div>
    </>
  );
};
export default Footer;
