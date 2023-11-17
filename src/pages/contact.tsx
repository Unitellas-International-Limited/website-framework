import React, { useState } from "react";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export interface ContactForm {
  senderName: string;
  senderMail: string;
  senderSubject: string;
  senderMessage: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    senderName: "",
    senderMail: "",
    senderSubject: "",
    senderMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        toast.success("Sent successfully");
        setLoading(false);
        setFormData({
          senderName: "",
          senderMail: "",
          senderSubject: "",
          senderMessage: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred");
      });
  }

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you. For support, visit info.unitellas.com.ng"
      />
      <form
        onSubmit={submitHandler}
        className="mx-auto my-20 max-w-5xl space-y-8 p-8"
      >
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="senderName"
          id="senderName"
          value={formData.senderName}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="senderMail"
          id="senderMail"
          value={formData.senderMail}
          onChange={(e) => {
            handleChange(e);
          }}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="senderSubject"
          id="senderSubject"
          value={formData.senderSubject}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="block h-52 w-full rounded-sm border border-gray-400 p-3"
          name="senderMessage"
          value={formData.senderMessage}
          onChange={(e) => {
            handleChange(e);
          }}
          id="senderMessage"
          placeholder="Message"
          required
        ></textarea>
        <BaseButtonWithColor loading={loading} text="Submit" size="full" />
      </form>
    </Layout>
  );
}
