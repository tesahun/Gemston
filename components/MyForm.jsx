"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import emailjs from "@emailjs/browser";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const MyForm = ({}) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    file: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here (e.g., send data to server)
    const serviceID = "service_jg7q711";
    const templateID = "template_26msu4i";
    const userID = "GV-ckDolXb83wb-WY";

    emailjs.send(serviceID, templateID, values, userID).then(
      (response) => {
        console.log("Email sent successfully!", response);
        resetForm();
      },
      (error) => {
        console.error("Email send error:", error);
      }
    );

    console.log(values);
    resetForm();
  };

  return (
    <div id="myform" className="h-full w-full bg-gray-50 pb-5">
      <div>
        <h1 className="text-center text-2xl text-shadow-lg pt-10 pb-5">
          Contact us
        </h1>
        <p className="text-center pb-5">
          We value your inquiries, feedback, and are eager to assist you in any
          way we can.
        </p>
      </div>
      <dir className="relative flex justify-center items-center mr-10">
        <div className="absolute top-20 left-4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 -right-8 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 left-24 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="w-[350px] rounded-lg z-30">
          <h1 className="text-center font-semibold mt-5">Contact-us</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="max-w-xs mx-auto mt-5 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="mt-1 text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-1 text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />

                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="mt-1 text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 w-full mb-2 rounded-md hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </dir>
    </div>
  );
};

export default MyForm;
