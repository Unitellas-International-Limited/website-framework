import { BaseButtonWithColor } from "@/components/UI/Buttons";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import React from "react";

export default function Contact() {
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you. For support, visit support.unitellas.com."
      />
      <form
        onSubmit={submitHandler}
        className="mx-auto my-20 max-w-5xl space-y-8 p-8"
      >
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="name"
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="email"
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="subject"
          id="subject"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="block h-52 w-full rounded-sm border border-gray-400 p-3"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
        <BaseButtonWithColor text="Submit" size="full" />
      </form>
    </Layout>
  );
}
