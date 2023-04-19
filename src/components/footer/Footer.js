import React from "react";
import styyles from "./footer.module.scss";

const data = new Date();
const year = data.getFullYear();
const Footer = () => {
  return (
    <div className={styyles.footer}>&copy; {year} All Rights Reserved</div>
  );
};

export default Footer;
