import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="products">
          <h1>Our Products & Services</h1>
          <div className="product-des">
            <span>Home</span>
          </div>
        </div>
        <div className="contacts">
          <h1>Contact With Us</h1>
          <h2>Contact Us</h2>
          <div className="contacts-des">
            <div className="email">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mail-closed.svg/2048px-Mail-closed.svg.png"
                alt=""
              />
              <span>info@mycompany.email.com</span>
            </div>
            <div className="phone">
              <img
                src="https://www.citypng.com/public/uploads/preview/-121610644163auvwfv1nkr.png"
                alt=""
              />
              <span>+1 236 000000</span>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266__480.png"
              alt=""
            />
          </div>
        </div>
        <div className="about-us">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            distinctio qui corporis pariatur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Harum repellendus provident explicabo
            culpa atque facilis odio eius architecto enim iste! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus distinctio qui
            corporis pariatur Lorem ipsum dolor sit amet,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
