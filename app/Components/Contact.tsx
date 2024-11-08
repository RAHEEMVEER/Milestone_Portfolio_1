"use client";

import React, { useState } from "react";
import "../style.css";
import SubmitMsg from "./successMsg"

interface FormData {
  name: string;
  email: string;
  mobile: string;
  address: string;
  message: string;
}

export default function Contact() {
  const [msgCall, setmsgCall] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mbljojde", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
      });
      setmsgCall(true);
    } else {
      alert("Failed to send message.");
    }
  };
  const closePopup = ()=>{
   setmsgCall(false)
  }
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
      {msgCall === true ? <SubmitMsg Name={formData.name} close={closePopup}/> : null}
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-box">
          <input type="number" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Home Address" value={formData.address} onChange={handleChange} required />
        </div>
        <textarea name="message" cols={10} rows={6} placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <div className="messageButton">
          <button type="submit" className="btn">Send Message</button>
        </div>
      </form>
    </section>
  );
}