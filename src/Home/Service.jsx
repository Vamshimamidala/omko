import React, { useState } from "react";
import "./Service.css";
import services from './Pngimages/image 15.svg'
import blue from './Pngimages/Ellipse 31 (1).svg'
import frame from './Images/Frame 102 (1).svg'
import image18 from './Images/Mobile 1.svg'
import img1 from './Images/uil_technology.png'
import img2 from './Images/eos-icons_performance.png'
import img3 from './Images/bx_customize.png'
import img4 from './Images/openmoji_collaboration.png'
import img19 from './Pngimages/image.png'
import img20 from './Pngimages/bx_customize.svg'
import img21 from './Pngimages/mdi_responsive (1).svg'
import img22 from './Pngimages/material-symbols_feature-search-outline-rounded.svg'
import img23 from './Pngimages/icon-park-outline_data.svg'
import user from './Images/mdi_user-outline.svg'
import email from './Images/fontisto_email.svg'
import phone from './Images/material-symbols_call-outline.svg'
import service from './Images/Services Icon.svg'
import message from './Images/fontisto_email (1).svg'

const Service = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:4000/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Form submitted successfully');
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: '',
              message: '',
            });
          } else {
            alert('Failed to submit form');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Error submitting form');
        }
      };
  return (
    <div>
    <section className="webbg">
    </section>
    <section className="covered p-5">
    <div className="web">
        <h2>Looking for innovative web development solutions to elevate your online presence? We’ve got you covered.</h2>
        <h4>we specialize in crafting custom websites designed to reflect your brand's identity and vision.<br/>
        With our expertise, we create seamless, responsive, and user-friendly experiences tailored to your unique business needs.</h4>
        <button className="connect-button">Connect</button>
        </div>
    </section>
    <section className="phoone">
    <div className="phonee">
    <img src={services} alt="services" />
    <h4>Custom Web Development Solutions Crafted for Your Business
    </h4>
    </div>
    <div className="container goals">
        <div className="row">
            <div className="col-md-3">
                <img src={blue} alt='blue'/>
                <span>Your vision</span>
            </div>
            <div className="col-md-3">
                <img src={blue} alt='blue'/>
                <span>Your goals</span>
            </div>
            <div className="col-md-3">
                <img src={blue} alt='blue'/>
                <span>Our commitment</span>
            </div>
        </div>
       
    </div>
    
    </section>
    <section className="parter">
        <div className="result">
       <h6>At Omko Solutions, we partner with you to deliver personalized web solutions that not only captivate your audience but<br/> also drive results. Our comprehensive web development services include:</h6>
        </div>
    </section>
    <section className="class">
        <div className="create">
            <h2>UI UX Design</h2>
        </div>
        <div className="step">
            <h5>Our design process is a structured approach to create user-centered solutions. From understanding your goals to delivering a fully functional product, we ensure every step is carefully crafted for success. </h5>
        </div>
        <div className="frames">
            <img src={frame} alt="frame102"/>
        </div>
    </section>
    <section className="appbuild">
        <div className="build">
        <h2>App Development</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-7 image18">
                    <img src={image18} alt="image1" />
                </div>
                <div className="col-md-5 appbuilds">
  <p>
    We don't just build apps; we craft digital ecosystems tailored to your business. 
    Our approach is rooted in innovation, ensuring every app aligns perfectly with your vision 
    and offers long-term growth opportunities.
  </p>
  <ul className="features-list">
    <li className="feature-item">
      <div className="feature-icon" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img1} alt="Feature 1" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Usage of Emerging Technologies</span>
    </li>
    <li className="feature-item">
      <div className="feature-icon" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img2}alt="Feature 2" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Performance Optimization</span>
    </li>
    <li className="feature-item">
      <div className="feature-icon" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img3} alt="Feature 3" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Customizable Solution</span>
    </li>
    <li className="feature-item">
      <div className="feature-icon" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img4} alt="Feature 3" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Collaboration at every stage</span>
    </li>
  </ul>
</div>

            </div>
        </div>
    </section>
    <section className="webdevelopment">
        
            <div className="webdevep">
                <h2>Web Development</h2>
        
        </div>
            <div className="container">
            <div className="row">
                <div className="col-md-7 img19">
                    <img src={img19} alt="img19"/>
                </div>
                <div className="col-md-5 craft">
                 
                  <h3>We don't just create websites; we craft digital experiences that elevate your brand and connect with your audience on a deeper level.</h3>
                <ul className="features-lists">
    <li className="feature-items">
      <div className="feature-icons" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img20} alt="Feature 1" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Usage of Emerging Technologies</span>
    </li>
    <li className="feature-items">
      <div className="feature-icons" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img21}alt="Feature 2" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Performance Optimization</span>
    </li>
    <li className="feature-items">
      <div className="feature-icons" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img22} alt="Feature 3" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Customizable Solution</span>
    </li>
    <li className="feature-items">
      <div className="feature-icons" style={{ width: '40px', height: '40px', flexShrink: '0', fill: '#FF6427' }}>
        <img src={img23} alt="Feature 3" style={{ width: '24px', height: '24px', flexShrink: '0' }} />
      </div>
      <span>Collaboration at every stage</span>
    </li>
  </ul>
                </div>
            </div>
            </div>
    </section>
    <section className="bgform p-5"> 
        <div className="container">
        <div className="row">
          <div className="col-md-6 quote">
            <p>Request a quote<br/>
            <span>Let’s collaborate -<br/>
                  we’re here for <br/>
                  your success</span>
            </p>
            
          </div>
          <div className="col-md-6">
          <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        {/* Name Input */}
        <div className="input-wrapper">
          <img src={user} alt="Name Icon" className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        {/* Email Input */}
        <div className="input-wrapper">
          <img src={email} alt="Email Icon" className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        {/* Contact Input */}
        <div className="input-wrapper">
          <img src={phone} alt="Contact Icon" className="input-icon" />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        {/* Service Dropdown */}
        <div className="input-wrapper">
        <img src={service} alt="Service Icon" className="input-icon" />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Android Development">Android Development</option>
            <option value="iOS Development">iOS Development</option>
            <option value="Web Development">Web Development</option>
          </select>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="input-wrapper textarea-wrapper">
        <img src={message} alt="Message Icon" className="textarea-icon" />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea-field"
        />
      </div>

      {/* Submit Button */}
      <div className="button-wrapper">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};


export default Service;
