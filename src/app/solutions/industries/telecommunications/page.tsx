import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";

export default function Telecommunications() {
  return (
    <Layout>
      <PageHeader
        title="Telecommunications"
        subtitle="Developing Future Infrastructure for Global Communications, Today."
      />
      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">
          Unitellas for Telecommunications
        </h1>
        <p className="text-center text-base">
          Unitellas is developing the future of telecommunications at many of
          the Africa’s largest communications service providers (CSPs) –
          including the two of Africa&apos;s largest. By partnering with
          Unitellas, CSPs are able to deliver fully-managed
          Infrastructure-as-a-Service (IaaS) solutions from a single edge cloud
          provider which means they can realize new revenue streams faster from
          cutting-edge 5G and edge services.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/telecommunications/image-1.png"
            alt="Rocket taking off"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Accelerate the Digital Transformation Journey
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Optimize performance, strengthen security posture, and leverage our
            dedicated team of infrastructure experts to fully-manage your system
            24/7/365.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/telecommunications/image-2.png"
            alt="Mobile devices and the Cloud"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Optimize your Network for the Edge (Mno&apos;s & Mvno&apos;s)
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Virtually eliminate latency issues for applications, connected
            devices, and mobile services by transforming how your cloud and edge
            work together.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-contain"
            src="/assets/images/solutions/industries/telecommunications/image-3.png"
            alt="Money bag with arrow going downward"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Pay Less than AWS with Upfront, Simple Pricing
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Remove the risk of exorbitant (hidden) fees for services like
            support and data egress. Unitellas delivers best-in-class, managed
            solutions at pay-only-for-what-you-use pricing.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/telecommunications/image-4.png"
            alt="Representation of the Unitellas Edge Cloud Service Dashboard"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Simplify and Expedite Access to Insights
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Gain real-time insights, make data-driven decisions to reduce churn,
            manage network performance, detect fraud and implement IoT solutions
            at scale. Create a culture driven by our most valuable asset – data
            – by providing insights for all.
          </p>
        </div>
      </div>
    </Layout>
  );
}
