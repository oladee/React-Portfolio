import React from "react";
import { useFormik } from "formik";
import { Button } from "./Hero";
import * as Yup from 'yup';
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'maximum of 15 characters or less').required('Required field'),
      email: Yup.string().email('Invalid email address, Please check!').required('Required field'),
      message: Yup.string().min(3, 'Minimum of three characters allowed, can\'t wait to hear from you')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="myprojects">
        <header>
          <h2>Contact</h2>
          <hr />
        </header>
        <form name="contactless" method="post" onSubmit={formik.handleSubmit} netlify>
        <input type="hidden" name="form-name" value="contactless" />
          <div className="forme">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </div>
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ): null}
          </div>
          <Button type='submit' className="button" disabled={formik.dirty}>Send</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
