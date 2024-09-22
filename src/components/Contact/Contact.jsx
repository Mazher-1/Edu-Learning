import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import dark_arrow from "../../assets/arrow.svg";
const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3fd55f4-a766-4b73-bfbc-83c4abd6a323");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  
  
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ab, quod tempore error aperiam ut nobis, voluptate eum
          repudiandae voluptatibus fuga ea facilis molestias dignissimos, velit
          labore ad quo et.
          <ul>
            <li><img src={mail_icon} alt="" />Contact@Mazher.dev</li>
            <li><img src={phone_icon} alt="" />+92 444 555 999</li>
            
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" id="" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Enter you mobile number" required/>
            <label>Write your message</label>
            <textarea name="message" rows='6' placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn hover-btn-white  center-btn">Submit now <img  className='new-btn' src={dark_arrow}  /></button>
        </form>
         <span>{result}</span>

      </div>
    </div>
  );
};

export default Contact;
