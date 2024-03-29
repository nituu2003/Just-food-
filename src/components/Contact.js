import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xYJPYPdpsteLw5vxWfg7BMZeiK3821n6Fc-EhmRCH6jHDQFr" alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks for contacting just food, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;
