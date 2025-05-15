import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";

export default function Finance() {
  return (
    <Layout>
      <PageHeader
        title="Finance"
        subtitle="Unitellas allows financial services firms to deliver more services to more people more efficiently."
      />
      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">
          Unitellas for Financial Services
        </h1>
        <p className="text-center text-base">
          Unitellas powers enterprise-class data storage and management across
          any financial services environment, whether you use legacy software,
          cloud applications, online channels, or even new fintech systems.
          Unitellas cloud-native structure, with fully-isolated resources,
          operates with speed, security, and agility for financial services
          enterprises of all types, including established institutions,
          startups, commercial banks, brokerage services, mortgage lenders and
          more.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/finance/image-1.png"
            alt="The web of factors considered in Edge Cloud"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Modernize Legacy Systems
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Modernize while preserving mission-critical investments by quickly
            connecting legacy systems with modern cloud and fintech
            applications.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/finance/image-2.png"
            alt="Unitellas edge cloud aids the finance industry"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Stay Agile
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Use an integrated data scheme to react quickly to changes, from the
            open banking movement such as PSD2 to blockchain and artificial
            intelligence.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/finance/image-3.png"
            alt="Shield with padlock unlocked in the middle"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Protect Your Data
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Unitellas delivers a data quality and governance framework that
            supports your governance, risk and compliance initiatives.
          </p>
        </div>
      </div>
    </Layout>
  );
}
