import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={FooterCSS.footer_wrapper}>&copy;All rights reserved</div>
  );
}

export default Footer;
