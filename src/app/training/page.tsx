import { Metadata } from "next";
import Image from "next/image";

import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export const metadata: Metadata = {
  title: "Training and Education | Unitellas International Limited",
  description:
    "Advance your technology skills with Unitellas training in information systems, edge cloud computing, business information management, and digital literacy.",
  keywords: [
    "Unitellas Training",
    "Cloud Education Nigeria",
    "Edge Cloud Training",
    "Digital Literacy Africa",
    "Information Systems Courses",
    "Business IT Training",
    "Technology Training Nigeria",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/training",
  },
  openGraph: {
    title: "Training and Education | Unitellas International Limited",
    description:
      "Explore Unitellas training programs covering information systems, edge cloud computing, business information management, and digital literacy.",
    url: "https://www.unitellas.com.ng/training",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/training/image-1.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Training and Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training and Education | Unitellas",
    description:
      "Build practical technology skills with Unitellas training programs.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https://www.unitellas.com.ng/assets/images/training/image-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const benefits = [
  {
    number: "01",
    title: "Affordable Costs",
    text: "We believe that everyone should have access to quality education. Our aim is to develop digital and computing skills and bridge the gap in the tech ecosystem.",
  },
  {
    number: "02",
    title: "Award-Winning Training",
    text: "Unitellas was awarded the “IT Education and Training Award” by the National Information Development Agency (NITDA) at Digital Nigeria 2023.",
  },
  {
    number: "03",
    title: "Learn With Purpose",
    text: "Our training programs are designed to help individuals and organizations develop practical knowledge across technology, computing, cloud and business information.",
  },
];

const courses = [
  {
    number: "01",
    title: "Information Systems and Technologies",
    text: "This domain covers the fundamentals of information systems, including information systems and technology, databases, software engineering, web development, mobile development, artificial intelligence, machine learning, and cybersecurity.",
  },
  {
    number: "02",
    title: "Edge Cloud Computing",
    text: "This domain covers the concepts and applications of edge cloud computing, including cloud architecture, cloud services, cloud security, cloud migration, cloud optimization, cloud orchestration, and cloud analytics.",
  },
  {
    number: "03",
    title: "Business Information Management",
    text: "This domain covers the skills and tools for managing business information effectively, including business analysis, project management, data analysis, data visualization, business intelligence, and decision making.",
  },
  {
    number: "04",
    title: "Computing Fundamentals and Digital Literacy",
    text: "This domain covers the basic knowledge and skills for using computers and digital devices efficiently, including computer hardware, operating systems, software applications, internet basics, online safety, digital citizenship, and digital creativity.",
  },
];

const formats = [
  {
    number: "01",
    title: "Virtual Training",
    text: "Learn from the comfort of your home or office with interactive online courses.",
  },
  {
    number: "02",
    title: "In-Person Training",
    text: "Experience hands-on learning in classroom-based training environments.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Expert Instructors",
    text: "Our instructors are industry professionals with experience in their respective fields.",
  },
  {
    number: "02",
    title: "Flexible Scheduling",
    text: "We offer flexible schedules to accommodate different learning and work commitments.",
  },
  {
    number: "03",
    title: "Accessible Education",
    text: "We believe quality technology education should be accessible and designed around practical learning needs.",
  },
];

export default function Training() {
  return (
    <Layout>
      <PageHeader
        title="Training & Education"
        subtitle="Building practical technology skills for individuals and organizations."
      />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/training/image-1.png"
                alt="Unitellas training and education"
                width={2000}
                height={500}
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                  Unitellas Education
                </span>

                <p className="mt-2 max-w-md font-Mongoose text-3xl text-white sm:text-4xl">
                  Technology knowledge for a digital future.
                </p>
              </div>
            </div>

            <div>
              <span className="unitellas-eyebrow">
                Training &amp; education
              </span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Learn technology. Apply it with purpose.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#52697F] sm:text-lg">
                <p>
                  At Unitellas, we are committed to providing training and
                  education services across various areas of technology.
                </p>

                <p>
                  Our courses are designed for both corporates and individuals,
                  and are offered through virtual and in-person formats.
                </p>

                <p>
                  From information systems and edge cloud computing to business
                  information management and digital literacy, our programs
                  cover different levels of technology knowledge and interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F8FA] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="mb-14 max-w-3xl">
            <span className="unitellas-eyebrow">Why Unitellas training</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Learning designed around access and opportunity.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="unitellas-card p-8 sm:p-9"
              >
                <span className="font-Mongoose text-5xl text-[#15C9E4]">
                  {benefit.number}
                </span>

                <h3 className="mt-8 font-Mongoose text-4xl leading-none text-[#102A43] sm:text-5xl">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#52697F] sm:text-base">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Training courses</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Four areas of technology learning.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-[#52697F] sm:text-lg">
                Unitellas offers training courses across four main domains,
                covering technical, business and digital skills.
              </p>
            </div>

            <div className="divide-y divide-[#102A43]/10 border-y border-[#102A43]/10">
              {courses.map((course) => (
                <article
                  key={course.number}
                  className="group grid gap-5 py-9 sm:grid-cols-[72px_1fr]"
                >
                  <span className="text-sm font-bold tracking-[0.12em] text-[#15C9E4]">
                    {course.number}
                  </span>

                  <div>
                    <h3 className="font-Mongoose text-4xl leading-none text-[#102A43] transition-colors duration-200 group-hover:text-[#15C9E4] sm:text-5xl">
                      {course.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-[#52697F]">
                      {course.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-[#102A43] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Training formats</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Learn in a format that works for you.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-slate-300 sm:text-lg">
                We understand that learners have different preferences and
                commitments, so our courses are available through virtual and
                in-person formats.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {formats.map((format) => (
                <article
                  key={format.number}
                  className="bg-[#102A43] p-8 sm:p-10"
                >
                  <span className="font-Mongoose text-5xl text-[#15C9E4]">
                    {format.number}
                  </span>

                  <h3 className="mt-8 font-Mongoose text-4xl text-white sm:text-5xl">
                    {format.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {format.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#F5F8FA] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="mb-14 max-w-3xl">
            <span className="unitellas-eyebrow">The learning experience</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Built around practical learning.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-2xl border border-[#102A43]/8 bg-white p-8 shadow-[0_12px_40px_rgba(16,42,67,0.05)] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#15C9E4]" />

                  <span className="text-xs font-bold tracking-[0.12em] text-[#71859A]">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-10 font-Mongoose text-4xl text-[#102A43] sm:text-5xl">
                  {reason.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#52697F] sm:text-base">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Award recognition */}
      <section className="bg-white py-16 sm:py-20">
        <div className="unitellas-container">
          <div className="flex flex-col gap-8 rounded-2xl border border-[#102A43]/8 bg-[#EAF4FC] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-3xl">
              <span className="unitellas-eyebrow">Recognition</span>

              <h2 className="unitellas-heading mt-5 text-4xl sm:text-5xl">
                IT Education and Training Award
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#52697F] sm:text-base">
                Unitellas was awarded the “IT Education and Training Award” by
                the National Information Development Agency (NITDA) at Digital
                Nigeria 2023, according to the existing training-page content.
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-[#15C9E4]/30 bg-white px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#102A43]">
              Digital Nigeria 2023
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                  Start learning
                </span>

                <h2 className="mt-4 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Ready to develop your technology skills?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Contact Unitellas to discuss training requirements for
                  yourself or your organization.
                </p>
              </div>

              <a href="/contact" className="unitellas-button-primary shrink-0">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
