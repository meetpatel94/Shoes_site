import React from "react";
import "./footer.css";
import visa from "../assets/visa.jpg";
import paypal from "../assets/paypal.jpg";
import master from "../assets/mastercard.jpg";

const footer = () => {
  return (
    <footer class="foot">
      <div class="img-pays">
        <ul>
          <li>
            <img src={visa} alt="" height="30" width="45" />
          </li>
          <li>
            <img src={paypal} alt="" height="30" width="45" />
          </li>
          <li>
            <img src={master} alt="" height="30" width="45" />
          </li>
        </ul>
      </div>
      <div class="foot-desc">
        <p>© 2022 Evershop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
