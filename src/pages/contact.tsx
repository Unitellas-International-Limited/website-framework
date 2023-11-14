import { BaseButtonWithColor } from "@/components/UI/Buttons";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import React, { useState } from "react";

export interface ContactForm {
  contacterName: string;
  contacterEmail: string;
  contacterSubject: string;
  contacterMessage: string;
}

export default function Contact() {
  const [contacterData, setcontacterData] = useState<ContactForm>({
    contacterName: "",
    contacterEmail: "",
    contacterSubject: "",
    contacterMessage: "",
  });

  const handleChange = (event: any) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setcontacterData((values) => ({ ...values, [targetName]: targetValue }));
  };
  // const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = fetch('api/contact', {
  //       method: 'POST',
  //       body: JSON.stringify(contacterData),
  //     });

  //     if ((await response).ok) {
  //       console.log('Email sent!!')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you. For support, visit info.unitellas.com.ng"
      />
      <form
        // onSubmit={submitHandler}
        className="mx-auto my-20 max-w-5xl space-y-8 p-8"
      >
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="contacterName"
          id="contacterName"
          value={contacterData.contacterName}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="contacterEmail"
          id="contacterEmail"
          value={contacterData.contacterEmail}
          onChange={(e) => {
            handleChange(e);
          }}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="contacterSubject"
          id="contacterSubject"
          value={contacterData.contacterSubject}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="block h-52 w-full rounded-sm border border-gray-400 p-3"
          name="contacterMessage"
          value={contacterData.contacterMessage}
          onChange={(e) => {
            handleChange(e);
          }}
          id="contacterMessage"
          placeholder="Message"
          required
        ></textarea>
        <BaseButtonWithColor text="Submit" size="full" />
      </form>
    </Layout>
  );
}
