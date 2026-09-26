import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "Contact Us | Unitellas International Limited",
  description:
    "Contact Unitellas International Limited for cloud infrastructure, support, partnerships, and business inquiries.",
  keywords: [
    "Unitellas",
    "Contact Unitellas",
    "Cloud Support Nigeria",
    "Unitellas International Limited",
    "Edge Cloud Services Nigeria",
    "Cloud Infrastructure Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/contact",
  },
  openGraph: {
    title: "Contact Us | Unitellas International Limited",
    description:
      "Get in touch with Unitellas for cloud infrastructure, support, partnerships, and business inquiries.",
    url: "https://www.unitellas.com.ng/contact",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Contact Unitellas International Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Unitellas International Limited",
    description:
      "Get in touch with Unitellas for cloud infrastructure, support, partnerships, and business inquiries.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https://www.unitellas.com.ng/unitellasicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const contactDetails = [
  {
    label: "General enquiries",
    value: "info@unitellas.com.ng",
    href: "mailto:info@unitellas.com.ng",
  },
  {
    label: "Phone",
    value: "+234 803 230 3207",
    href: "tel:+2348032303207",
  },
];

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Let’s talk about your infrastructure, technology requirements, or next project."
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="unitellas-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Get in touch</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Let’s build what comes next.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
              Whether you are exploring cloud infrastructure, need support,
              looking for a technology partner, or have a business enquiry, our
              team is ready to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="bg-[#F5F8FA] py-16 sm:py-20 lg:py-24">
        <div className="unitellas-container">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            {/* Contact information */}
            <aside className="overflow-hidden rounded-2xl bg-[#102A43] p-7 text-white shadow-[0_20px_60px_rgba(16,42,67,0.12)] sm:p-9 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                Unitellas International
              </span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                Start a conversation.
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you are working on and how we can help. Our team
                can discuss your requirements and the infrastructure options
                available to you.
              </p>

              <div className="mt-10 space-y-7">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </p>

                    <a
                      href={item.href}
                      className="mt-2 inline-block text-sm font-semibold text-white transition-colors hover:text-[#15C9E4] sm:text-base"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  Business enquiries
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  For cloud infrastructure, partnerships, enterprise
                  requirements and other business enquiries, use the form
                  alongside this panel.
                </p>
              </div>
            </aside>

            {/* Existing contact form */}
            <div className="rounded-2xl border border-[#102A43]/8 bg-white p-6 shadow-[0_12px_40px_rgba(16,42,67,0.06)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <span className="unitellas-eyebrow">Send an enquiry</span>

                <h2 className="unitellas-heading mt-4 text-4xl sm:text-5xl">
                  How can we help?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52697F]">
                  Complete the form and provide a few details about your
                  enquiry. Our team will use the information to understand how
                  best to respond.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="unitellas-container">
          <div className="mb-10 max-w-2xl">
            <span className="unitellas-eyebrow">Our location</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Find Unitellas.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#52697F]">
              Visit or locate Unitellas International Limited using the map
              below.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#102A43]/8 bg-[#F5F8FA] shadow-[0_12px_40px_rgba(16,42,67,0.06)]">
            <iframe
              className="block h-[360px] w-full border-0 sm:h-[450px] lg:h-[520px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4203703315075!2d3.5629625731562733!3d6.468313393523378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf74cc6b40421%3A0xd96ba79020e4b2c1!2sUnitellas%20International%20Limited!5e0!3m2!1sen!2sng!4v1748207956132!5m2!1sen!2sng"
              title="Unitellas International Limited location"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="bg-[#F5F8FA] py-16 sm:py-20">
        <div className="unitellas-container">
          <div className="relative overflow-hidden rounded-3xl bg-[#102A43] px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#15C9E4]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                  Ready to explore?
                </span>

                <h2 className="mt-4 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  See the platform in action.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Schedule a demo to explore how Unitellas cloud infrastructure
                  can support your organization.
                </p>
              </div>

              <a href="/demo" className="unitellas-button-primary shrink-0">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
