import React from "react";

// Logo image import
import image_2 from "../assets/images/image_2.png";

export default function Header() {
  return (
    <>
      <header className="abc">
        <nav>
          <ul className="abc humburger">
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            <li>
              <a href="bookList.html">Books</a>
            </li>
            <li>
              <a href="typesOf.html">Inspiration Quotes</a>
            </li>
            <li>
              <a href="https://www.forbes.com/real-time-billionaires/#678f4a9b3d78">
                Forbes
              </a>
            </li>
          </ul>
        </nav>
        <div target="logo" id="logo">
          <img src={image_2} alt="LOGO" />
        </div>

        <div className="btn" id="btn">
          <a href="sign-up.html">
            <button>Sign Up Free</button>
          </a>
        </div>

        <div className="mainn abc">
          <div className="clock" id="clock">
            <p></p>
          </div>

          <div className="day_date abc">
            <div className="day" id="day">
              <p></p>
            </div>

            <div className="date" id="date">
              <p></p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
