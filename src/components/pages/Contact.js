import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="card" id="form">
        <div className="card-body">
          <h3 className="card-title">Enter your info below to reach out to me directly:</h3>
            <form>
              <label for="fname">First name:</label><br></br>
              <input type="text" id="fname" name="fname"></input><br></br>
              <label for="lname">Last name:</label><br></br>
              <input type="text" id="lname" name="lname"></input><br></br>
              <label for="email">Enter your email:</label><br></br>
              <input type="email" id="email" name="email"></input><br></br>
              <input type="submit" value="Submit"></input>
           </form>
         </div>
      </div>
    </div>
  );
}

export default Contact;
