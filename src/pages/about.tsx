import Layout from "@/components/UI/Layout";
import Head from "next/head";
import PageHeader from "@/components/UI/PageHeader";
import Row from "@/components/UI/Row";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Head>
        <title> About Us | Unitellas International Limited</title>
      </Head>
      <PageHeader
        title="About Unitellas"
        subtitle="Enterprise Edge Cloud Services Provider"
      />

      <Row className="items-center">
        <div className="h-80 w-full shrink-0 xs:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/about/who-we-are.jpg"
            alt="companies"
            width={1000}
            height={500}
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="mb-2 font-Mongoose text-4xl">Who We Are</h1>
          <h3 className="mb-4 text-xl">
            The first hyper scale edge cloud in Africa
          </h3>
          <p className="text-lg">
            Unitellas International Limited is a leading IT company registered
            in Nigeria that deals with cloud services. We are the official
            distributor for Zadara Edge Cloud in Africa, delivering edge cloud
            infrastructure as a service to telecommunications operators and
            cloud service providers.
            <br />
            We empower african teleco&apos;s and cloud service providers by
            providing access to on-demand, enterprise-grade compute, networking
            and storage as a service (IaaS), designed to lower your costs,
            future-proof your infrastructure, and handle any workload.
          </p>
        </div>
      </Row>

      <Row>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">Our Mission</h1>
          <p className="text-lg">
            We aim to empower organizations move from a huge CAPEX to fully
            optimized OPEX based operations by transitioning to - as a service
            business model; by providing fully featured, fully elastic, full
            stack cloud infrastructure and IT solutions as a service to business
            organizations across Africa.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">Our Vision</h1>
          <p>
            We aim to be a technology leader in Africa, touching lives in the
            most important ways by influencing the way we transact business, are
            entertained and educated through digital solutions.
          </p>
        </div>
      </Row>
      <Row className="items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-5xl text-uni-blue">Why Choose Us?</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-1/2">
          <div>
            <h2 className="mb-2 text-lg font-medium">Empower</h2>
            <p className="text-lg">
              We empower our clients to serve their customers better by creating
              meaningful solutions to drive excellence.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Expand</h2>
            <p className="text-lg">
              We aid our clients in offering conveninece to their customers by
              leveraging new and emerging technologies.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Attract</h2>
            <p className="text-lg">
              We offer our clients solutions which distinguishes them in their
              industry and enables them to provide attractive and uninterrupted
              services.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Dominate</h2>
            <p className="text-lg">
              We aim to transform our clients businesses by aiding them with the
              required technologies to dominate their industries.
            </p>
          </div>
        </div>
      </Row>
      <Row className="items-center">
        <div className="flex w-full items-center justify-between gap-2 lg:w-1/2">
          {[
            "/assets/images/about/award1.png",
            "/assets/images/about/award2.png",
            "/assets/images/about/award3.png",
          ].map((image) => (
            <div className="w-1/3 shrink-0" key={image}>
              <Image
                className="h-full w-full object-contain"
                src={image}
                alt="awards"
                width={1000}
                height={500}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">
            Industry Awards and Accolades
          </h1>
          <p className="text-lg">
            Our solutions have been recognized for innovation and leadership.
            The accolades include: Frost & Sullivan New Product Innovation
            Leadership Award; Cloud Computing Backup & Disaster Recovery; the
            Red Herring Global 100; and Dell Founders 50 are among some.
          </p>
        </div>
      </Row>
    </Layout>
  );
}
