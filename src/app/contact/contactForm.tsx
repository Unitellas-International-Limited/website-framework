"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export interface ContactFormData {
  senderName: string;
  senderEmail: string;
  emailSubject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  senderName: "",
  senderEmail: "",
  emailSubject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully.");

      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClassName =
    "mt-2 block w-full rounded-lg border border-[#102A43]/12 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition-all duration-200 placeholder:text-[#8A9BAD] hover:border-[#102A43]/20 focus:border-[#15C9E4] focus:ring-4 focus:ring-[#15C9E4]/10 disabled:cursor-not-allowed disabled:bg-[#F5F8FA] disabled:opacity-70";

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="senderName"
            className="text-sm font-semibold text-[#102A43]"
          >
            Your name
            <span className="ml-1 text-[#15C9E4]">*</span>
          </label>

          <input
            className={inputClassName}
            name="senderName"
            id="senderName"
            value={formData.senderName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            disabled={loading}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="senderEmail"
            className="text-sm font-semibold text-[#102A43]"
          >
            Work email
            <span className="ml-1 text-[#15C9E4]">*</span>
          </label>

          <input
            className={inputClassName}
            name="senderEmail"
            id="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            disabled={loading}
            required
          />
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label
            htmlFor="emailSubject"
            className="text-sm font-semibold text-[#102A43]"
          >
            Subject
            <span className="ml-1 text-[#15C9E4]">*</span>
          </label>

          <input
            className={inputClassName}
            name="emailSubject"
            id="emailSubject"
            value={formData.emailSubject}
            onChange={handleChange}
            type="text"
            placeholder="What would you like to discuss?"
            disabled={loading}
            required
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-[#102A43]"
          >
            Message
            <span className="ml-1 text-[#15C9E4]">*</span>
          </label>

          <textarea
            className={`${inputClassName} min-h-[180px] resize-y leading-7`}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements, project, or enquiry..."
            disabled={loading}
            required
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-[#102A43]/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-[#71859A]">
          By submitting this form, you are providing your contact details so the
          Unitellas team can respond to your enquiry.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#15C9E4] px-7 text-sm font-bold text-[#102A43] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0FB5CF] hover:shadow-[0_8px_24px_rgba(21,201,228,0.22)] focus:outline-none focus:ring-4 focus:ring-[#15C9E4]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {loading ? (
            <>
              <span
                aria-hidden="true"
                className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#102A43]/30 border-t-[#102A43]"
              />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
