"use client";

import { useState } from "react";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";

export interface ContactForm {
  senderName: string;
  senderEmail: string;
  emailSubject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    senderName: "",
    senderEmail: "",
    emailSubject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => await response.json())
      .then(() => {
        toast.success("Sent successfully");
        setLoading(false);
        setFormData({
          senderName: "",
          senderEmail: "",
          emailSubject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred");
      });
  }

  return (
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
        name="senderEmail"
        id="senderEmail"
        value={formData.senderEmail}
        onChange={(e) => {
          handleChange(e);
        }}
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="block w-full rounded-sm border border-gray-400 p-3"
        name="emailSubject"
        id="emailSubject"
        value={formData.emailSubject}
        onChange={(e) => {
          handleChange(e);
        }}
        type="text"
        placeholder="Subject"
        required
      />
      <textarea
        className="block h-52 w-full rounded-sm border border-gray-400 p-3"
        name="message"
        value={formData.message}
        onChange={(e) => {
          handleChange(e);
        }}
        id="message"
        placeholder="Message"
        required
      ></textarea>
      <BaseButtonWithColor loading={loading} text="Submit" size="full" />
    </form>
  );
}
