"use client";

import "../style.css";

interface SubmitMsgProps {
  Name: string;
  close: () => void;
}

const SubmitMsg: React.FC<SubmitMsgProps> = ({ Name, close }) => {
  return (
    <div className="submit-container">
      <i className="bx bx-check"></i>
      <h1>Successfully Sent</h1>
      <h2>Dear {Name}</h2>
      <p>Thanks for your message! We appreciate your feedback. The author will get back to you shortly.</p>
      <button className="close-btn" onClick={close}>Close</button>
    </div>
  );
};

export default SubmitMsg;
