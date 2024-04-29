import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='Home' id="home">
        <main>
          <h1>TECHONTOP</h1>
          <p>You are on top </p>
        </main>
      </div>

      <div className='Home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to tech keeping our customer always on top.
            We are leading company aiming to use tech to bring everyone on top.
          </p>
        </div>
      </div>
      <div className='Home3' id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At TechOnTop, we're more than just a tech company. We're your ultimate solution, dedicated to keeping our customers always ahead of the curve.

            Our mission is clear: to utilize technology as a driving force, empowering individuals and businesses to reach new heights. We believe that by harnessing the power of innovation, we can lead the way in transforming industries and revolutionizing the digital landscape.

            TechOnTop is not just about being a leader; we're pioneers in our field. Our vision is to create a world where everyone has the opportunity to excel. Through our cutting-edge solutions and unwavering commitment to excellence, we aim to elevate individuals and organizations to their fullest potential.
          </p>
        </div>
      </div>

      <div className='Home4' id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationdelay: 0.9,
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationdelay: 0.7,
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationdelay: 0.4,
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationdelay: 0.1,
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>


          </article>
        </div>
      </div>
    </>
  )
}

export default Home
