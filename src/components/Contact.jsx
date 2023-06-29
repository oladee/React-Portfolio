import React from "react";
import { useFormik } from "formik";
import { Button } from "./Hero";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className='myprojects'>
        <header>
          <h2>Contact</h2>
          <hr />
        </header>
        <form onSubmit='submit' name="contact" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
          <div className="forme">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
            </div>
          </div>
          <Button type='submit' className="button">Send</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
