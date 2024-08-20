import React from "react";
import "./featured-section.css";
import greenshoes from "../assets/Gshoes.png";
import pinkshoes from "../assets/Pshoes.png";
import grayshoes from "../assets/Grayshoes.png";
import blackshoes from "../assets/Bshoes.png";

const Featuredsection = () => {
  return (
    <section>
      <div class="featured">
        <h2>FEATURED PRODUCTS</h2>
        <div class="images-description">
          <div class="img1 border">
            <div class="img">
              <img src={greenshoes} alt="" />
            </div>
            <h5>Nike air zoom fair match pegasus 35</h5>
            <p>$452.10</p>
          </div>
          <div class="img2 border">
            <div class="img">
              <img src={pinkshoes} alt="" />
            </div>
            <h5>Seasonal color and match chuck 70</h5>
            <p>$900.90</p>
          </div>
          <div class="img3 border">
            <div class="img">
              <img src={grayshoes} alt="" />
            </div>
            <h5>Mix and match chuck taylor all star</h5>
            <p>$877.80</p>
          </div>
          <div class="img4 border">
            <div class="img">
              <img src={blackshoes} alt="" />
            </div>
            <h5>Geography class chuck taylor all star</h5>
            <p>$275.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuredsection;
