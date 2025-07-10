import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex-space-around">
      <div className="flex-space-around">
        <label htmlFor="subscribe">Subscribe to Newsletter:</label>
        <input
          type="email"
          id="subscribe"
          name="subscribe"
          className="footer__input"
          placeholder="Your Email Address"
        />
        <button className="btn btn__subscribe">Subscribe</button>
      </div>
      <div>
        <p>&copy; Copyright 2025 Fazle Hasan. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
