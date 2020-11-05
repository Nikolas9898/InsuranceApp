import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={FooterCSS.footer_wrapper}>
      &copy;All rights reserved
    </footer>
  );
}

export default Footer;
