import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
<section className="section about-section gray-bg" id="about">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text mt-5 pt-2 go-to">
          <h3 className="dark-color">About Me</h3>
          <h6 className="theme-color lead">A MERN Developer &amp; A Crypto Trader based in Lahore</h6>
          <p>I <mark>design and develop webApps</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to Built digital user experiences through the bold interface and meaningful interactions.</p>

          <div className="row about-list">
            <div className="col-md-6">
              <div className="media">
                <label>Age</label>
                <p>21 Yr 👦🏻</p>
              </div>
              <div className="media">
                <label>Residence</label>
                <p>Lahore 🏠</p>
              </div>
              <div className="media">
                <label>Address</label>
                <p>SomeWhere In Lahore 😌</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <label>E-mail</label>
                <p>sohaib.umair2002@gmail.com 📨</p>
              </div>
              <div className="media">
                <label>Phone</label>
                <p><a style={{color:"white", textDecoration:"none"}} href='https://api.whatsapp.com/send/?phone=923144030224&text&type=phone_number&app_absent=0' target='block' >0314-4030224 🤙🏻</a></p>
              </div>
              <div className="media">
                <label>Insta</label>
                <p><a style={{color:"white", textDecoration:"none"}} href='https://www.instagram.com/sohaib_aka_mugester/' target='block' >sohaib_aka_mugester 🙋🏻‍♂️</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-avatar">
          <img className='img-fluid' src="./myimage.jpeg" title alt />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutMe
