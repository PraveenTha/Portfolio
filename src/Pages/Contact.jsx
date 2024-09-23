import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'a56981b5-2c41-4dc2-9cd8-071ec173243a');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success',
        text: 'Message Sent successfully',
        icon: 'success',
      });
    }
  };

  return (
    <div id="contact">
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact">
                <div className="contact-form">
                  <div className="contact-detail form">
                    <div class="call box-con">
                      <h4>PHONE</h4>
                      <p>
                        You can contact me anytime, I will help you grow your
                        business
                      </p>
                      <a href="tel:8527884128">8527884128</a>
                    </div>
                    <div class="mail box-con">
                      <h4>EMAIL</h4>
                      <p>
                        Send me an email about your business concern and I will
                        respond to you to create your business website
                      </p>
                      <a href="email:  praveentha8@gmail.com">
                        praveentha8@gmail.com
                      </a>
                    </div>
                  </div>

                  <form className="form" onSubmit={onSubmit}>
                    <h2>Contact Form</h2>
                    <div className="input-box">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="field"
                        placeholder="Enter your name"
                        required
                        name="name"
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="field"
                        placeholder="Enter your email"
                        required
                        name="email"
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        className="field mess"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
