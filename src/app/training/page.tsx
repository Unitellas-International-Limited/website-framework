import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import {
  faMoneyBill,
  faAward,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export default function Training() {
  const iconClasses = "h-20 text-[#1379B4] mb-4 mx-auto block";
  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faMoneyBill} className={iconClasses} />,
      title: "Affordable Costs",
      text: "We believe that everyone should have access to quality education. That’s why we offer our courses at affordable costs. Our aim is to develop digital and computing skills and bridge the gap in the Tech Ecosystem.",
    },
    {
      icon: <FontAwesomeIcon icon={faAward} className={iconClasses} />,
      title: "Award Winning Training",
      text: "We are proud to announce that we were awarded the “IT Education and Training Award” by the National Information Development Agency (NITDA) at Digital Nigeria 2023. This recognition motivates us to continue providing high-quality training to our students.",
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} className={iconClasses} />,
      title: "Join Us",
      text: "Ready to take the next step in your career? Join us at Unitellas Edge Cloud Services, where we empower you with the skills you need to succeed in the digital world.",
    },
  ];
  const courses = [
    {
      title: "Information Systems and Technologies",
      text: "This domain covers the fundamentals of information systems, such as Introduction to information systems and Technology, databases, software engineering, web development, mobile development, artificial intelligence, machine learning, and cybersecurity.",
    },
    {
      title: "Edge Cloud Computing",
      text: "This domain covers the concepts and applications of edge cloud computing, such as cloud architecture, cloud services, cloud security, cloud migration, cloud optimization, cloud orchestration, and cloud analytics.",
    },
    {
      title: "Business Information Management",
      text: "This domain covers the skills and tools for managing business information effectively, such as business analysis, project management, data analysis, data visualization, business intelligence, and decision making.",
    },
    {
      title: "Computing Fundamentals and Digital Literacy",
      text: "This domain covers the basic knowledge and skills for using computers and digital devices efficiently, such as computer hardware, operating systems, software applications, internet basics, online safety, digital citizenship, and digital creativity. ",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Training and Education | Unitellas International Limited</title>
      </Head>

      <PageHeader title="Unitellas Training and Education" />

      <section className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/training/image-1.png"
            alt="companies"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <p className="max-w-md text-center text-base sm:text-xl md:text-left">
            At Unitellas, we are committed to providing top-notch training and
            education services in various areas of technology. Our courses are
            designed for both corporates and individuals, and are offered both
            virtually and in-person.
          </p>
        </div>
      </section>

      <section className="p-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={encodeURI(benefit.title)}>
              {benefit.icon}
              <h2 className="mb-4 text-center font-Mongoose text-2xl sm:mb-0 sm:text-3xl">
                {benefit.title}
              </h2>
              <p className="text-center text-base">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">
          Training Courses{" "}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base">
          Unitellas offers a variety of training courses for different levels of
          expertise and interest. The courses are categorized into four main
          domains:
        </p>
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((feature) => (
            <li key={encodeURI(feature.title)}>
              <h1 className="mb-2 font-Mongoose text-3xl">{feature.title}</h1>
              <hr className="mb-4 w-28 border-2 border-uni-blue" />
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="p-4 xs:p-8 sm:p-16">
        <h1 className="mb-2 text-center font-Mongoose text-4xl">
          Training Formats
        </h1>
        <p className="mb-12 text-center text-lg font-medium">
          We understand that everyone has unique learning preferences, so we
          offer our courses in two formats:
        </p>
        <div className="flex flex-col justify-center gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 font-Mongoose text-3xl">Virtual Training</h1>
            <p className="text-lg">
              Learn from the comfort of your home or office with our interactive
              online courses.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 font-Mongoose text-3xl">In Person Training</h1>
            <p>
              Experience hands-on learning in our state-of-the-art classrooms.
            </p>
          </div>
        </div>
      </section>

      <section className="p-4 xs:p-8 sm:p-16">
        <h1 className="mb-12 text-center font-Mongoose text-4xl">
          Why Choose Us?
        </h1>
        <div className="flex flex-col justify-center gap-10 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="mb-2 font-Mongoose text-3xl">VExpert Instructors</h1>
            <p className="text-lg">
              Our instructors are industry professionals with years of
              experience in their respective fields.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h1 className="mb-2 font-Mongoose text-3xl">Flexible Scheduling</h1>
            <p>
              We offer flexible schedules to accommodate your busy lifestyle.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h1 className="mb-2 font-Mongoose text-3xl">Affordable Pricing</h1>
            <p>
              We believe that quality education should be accessible to
              everyone, which is why we offer our courses at affordable prices.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
