import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faMapMarkedAlt,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovereign Cloud | Unitellas International Limited",
  description: "...",
};

export default function SovereignCloud() {
  const iconClasses = "h-20 text-[#1379B4] mb-4 mx-auto block";
  const benefits = [
    {
      icon: faShieldAlt,
      title: "Security and Compliance",
      text: "Our local partners provide strong security features, such as encryption, multi-factor authentication, and continuous monitoring, and ensure compliance with relevant localized data protection regulations.",
    },
    {
      icon: faMapMarkedAlt,
      title: "Sovereign by Design",
      text: "Deliver the performance and reliability your customers expect no matter the location. Offer low-latency edge services with Unitellas's existing fully-managed clouds or global base of 300+ MSP partners.",
    },
    {
      icon: faAtom,
      title: "Global reach. Local appeal.",
      text: "Deliver the performance and reliability your customers expect no matter the location. Offer low-latency edge services with Unitellas's existing fully-managed clouds or global base of 300+ MSP partners.",
    },
  ];
  return (
    <Layout>
      <PageHeader
        title="True Data Sovereignty"
        subtitle="Get True Data Sovereignty with Unitellas Edge Cloud"
      />

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 rounded-xl md:h-72 md:w-96">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src="/assets/images/solutions/sovereign-cloud/image-1.jpg"
            alt="companies"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <p className="max-w-md text-center text-base md:text-left">
            Unitellas global Edge Cloud service provider network is designed to
            give you the greatest possible control over your data and customers
            data, no matter where your business and customers are located.
            Unitellas unique approach reduces dependence on overseas cloud
            service providers who operate under nonresident legislation,
            mitigating potential security risks associated with hosting
            sensitive data outside of the host country.
          </p>
        </div>
      </div>

      <section className="p-12">
        <h1 className="mb-8 text-center font-Mongoose text-5xl">
          Key Benefits
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={encodeURI(benefit.title)}>
              <FontAwesomeIcon
                icon={benefit.icon}
                size="7x"
                className="text-[#1379B4] mb-4 mx-auto w-full block"
              />
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
          A True Sovereign Cloud
        </h1>
        <p className="text-center text-base">
          Some of the largest cloud providers in the world deliver outstanding
          services, but even though they may deploy equipment in different
          geographical locations, they all too often operate under legislation
          of their head quartered organization.
          <br />
          <br />
          Hyperscale cloud organizations can, and often do, operate under
          different legislation than sovereign cloud providers. When choosing a
          cloud provider you want to ensure you have control over your data
          including:
        </p>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/sovereign-cloud/image-2.jpg"
            alt="A team of people trying to lift a flag"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Ownership and Control:
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Sovereign cloud services are owned, operated, and managed under
            local jurisdiction, providing organizations and their respective
            governments greater control and security over sensitive data.
            Hyperscale cloud providers, on the other hand, are typically subject
            to the laws and regulations of their respective host country.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/sovereign-cloud/image-3.jpg"
            alt="Board with tasks checked off"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Jurisdiction and Compliance:
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Sovereign clouds are by default, set to comply with local and
            regional data privacy regulations, while hyperscalers often operate
            across multiple jurisdictions and may struggle to comply with all
            relevant regulations in each location.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/sovereign-cloud/image-4.jpg"
            alt="Laptop with code opened and a magnifying glass finding `bugs`"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Customization and Flexibility:
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Sovereign clouds can be customized to meet the specific needs of
            government agencies and other organizations that handle sensitive
            data. This level of customization may not be possible with
            hyperscale cloud providers, which offer a more standardized service.
          </p>
        </div>
      </div>
    </Layout>
  );
}
