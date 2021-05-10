import React, { useState } from 'react';

import { SectionTitle } from 'app/sc/SectionTitle';

import { FormWrapper } from './style';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   });
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);

   const changeHandler = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => {
         return { ...prev, [name]: value };
      });
   };

   const submitHandler = async (e) => {
      e.preventDefault();

      const res = await fetch(
         'https://rakhat-me-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json',
         {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
               'Content-type': 'application/json',
            },
         }
      );

      const resData = await res.json();

      if (resData.name) {
         setSuccess(true);
      } else {
         setError(true);
      }

      setFormData({
         name: '',
         email: '',
         subject: '',
         message: '',
      });
   };

   return (
      <FormWrapper>
         <SectionTitle>Contact me</SectionTitle>

         <form onSubmit={submitHandler}>
            {success && (
               <div className="message success">
                  <span>
                     Contact form successfully submitted. Thank you, I will get
                     back to you soon!
                  </span>

                  <button onClick={() => setSuccess(false)}>&times;</button>
               </div>
            )}

            {error && (
               <div className="message error">
                  <span>
                     Unfortunately your message was not sent. Try again, later.
                  </span>

                  <button onClick={() => setError(false)}>&times;</button>
               </div>
            )}

            <div className="form-wrap">
               <div className="form-control">
                  <input
                     name="name"
                     value={formData.name}
                     onChange={changeHandler}
                     type="text"
                     placeholder="Name"
                     required
                  />
                  <input
                     name="email"
                     value={formData.email}
                     onChange={changeHandler}
                     type="email"
                     placeholder="Email"
                     required
                  />
                  <input
                     name="subject"
                     value={formData.subject}
                     onChange={changeHandler}
                     type="text"
                     placeholder="Subject"
                     required
                  />
               </div>

               <textarea
                  name="message"
                  value={formData.message}
                  onChange={changeHandler}
                  placeholder="Message"
               />
            </div>

            <button type="submit">Send message</button>
         </form>
      </FormWrapper>
   );
};

export { ContactForm };
