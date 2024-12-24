import React, { useState } from "react";
import "./About.css";
import company from './Pngimages/Group 26.svg';
import comp from './Pngimages/Group 25.svg';
import omko from './Images/Omko Vision.svg'
import mission from './Images/Frame 70.svg'
import corevalues from './Pngimages/Frame 83.svg'
import user from './Images/mdi_user-outline.svg'
import email from './Images/fontisto_email.svg'
import phone from './Images/material-symbols_call-outline.svg'
import service from './Images/Services Icon.svg'
const About = () => {
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
    <div className="about-container">
      {/* Section Background */}
      <section className="bg">
        <div className="driven">
          <h5>
            Driven by Innovation, <br />
            Designed for Excellence
          </h5>
          <h6>
            We believe every business deserves designs that inspire and perform. <br />
            That’s why innovation and excellence are at our core
          </h6>
          <button>Connect</button>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview-section p-4">
        <div className="header">
          <img src={comp} alt="Company Icon" className="icon" />
          <h2>Company Overview</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={company} alt="company" className="companyss"/>
                </div>
                <div className="col-md-5">
                    <p className="passion">At Omko Solutions, we are driven by a passion for innovation and a vision to empower businesses with digital solutions that make an impact. We are a dynamic and forward-thinking IT consulting and development company specializing in UI/UX design, app development, web development, and website redesign services. Whether your business needs a striking new design or a scalable development solution, we’re here to make it happen. At Omko Solutions, we believe technology is the cornerstone of modern success. Our expertise and creativity work hand in hand to craft solutions that not only solve challenges but also help elevate your brand.</p>
                </div>
            </div>
        </div>
      </section>
      <section className="vision p-4">
      <div className="header">
          <img src={comp} alt="Company Icon" className="icon" />
          <h2>Vision</h2>
        </div>
        <div className="omko">
            <img src={omko} alt='omko'/>
        </div>
        <div className="vision">
            <p>Our vision is to shape the future of digital experiences by delivering innovative and transformative solutions that empower businesses to thrive. At <br/> Omko Solutions, we aim to lead with creativity, inspire with our designs, and leave a lasting impact through excellence and innovation.</p>
        </div>
      </section>
      <section className="core p-4">
      <div className="header">
          <img src={comp} alt="Company Icon" className="icon" />
          <h2>Core Values</h2>
         
        </div>
      <div className="values">
        <h5>Core Values</h5>
        <img src={corevalues} alt="core values"/>
      </div>
      </section>
      <section className="misson p-4">
      <div className="header">
          <img src={comp} alt="Company Icon" className="icon" />
          <h2>Mission</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 digital">
                    <p>Our mission is to create user-centric digital solutions that help businesses succeed in a rapidly evolving digital landscape. Through creativity, collaboration, and dedication, we focus on turning ideas into impactful realities.</p>
                </div>
                <div className="col-md-6 solutions">
            <img src={mission} alt="mission" />
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
        <img src={email} alt="Message Icon" className="textarea-icon" />
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

export default About;
