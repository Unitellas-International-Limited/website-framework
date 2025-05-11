import { useState, type ChangeEvent, type FormEvent } from "react";
import { truncateString } from "@/helpers/truncateString";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseButton, BaseButtonWithColor } from "@/components/UI/Buttons";
import {
  faTrashAlt,
  faCartShopping,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import Layout from "@/components/UI/Layout";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Place| Unitellas International Limited",
  description: "...",
};

interface ISolution {
  name: string;
  description: string;
}

interface IFormData {
  name: string;
  email: string;
  phone: string;
}

export default function Marketplace() {
  const [loading, setLoading] = useState(false);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [view, setView] = useState<"checkout" | "form">("checkout");
  const [selectedSolutions, setSelectedSolutions] = useState<ISolution[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const solutions = [
    {
      name: "Predictive Analysis",
      description: `Predictive analysis for retail sales using AI by ingesting historic data and leveraging advanced algorithms to forecast future sales patterns and trends. Analysis was done on historical sales data, customer behavior, market conditions and other factors.`,
    },
    {
      name: "Business Intelligence",
      description: `Predictive analysis for retail sales using AI by ingesting historic data and leveraging advanced algorithms to forecast future sales patterns and trends. Analysis was done on historical sales data, customer behavior, market conditions and other factors.`,
    },
    {
      name: "Assessment Generator",
      description: `Predictive analysis for retail sales using AI by ingesting historic data and leveraging advanced algorithms to forecast future sales patterns and trends. Analysis was done on historical sales data, customer behavior, market conditions and other factors.`,
    },
    {
      name: "Computer Vision",
      description: `Predictive analysis for retail sales using AI by ingesting historic data and leveraging advanced algorithms to forecast future sales patterns and trends. Analysis was done on historical sales data, customer behavior, market conditions and other factors.`,
    },
  ];
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };
  function onSelect(solution: ISolution) {
    const solutionExists = selectedSolutions.find(
      (_solution) => _solution.name === solution.name
    );
    console.log(solutionExists);
    if (solutionExists === undefined) {
      setSelectedSolutions([...selectedSolutions, solution]);
      toast.success("Added to cart");
    }
  }
  function onDelete(solution: ISolution) {
    const filteredSolutions = selectedSolutions.filter(
      (_solution) => _solution.name !== solution.name
    );
    setSelectedSolutions(filteredSolutions);
  }
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        senderEmail: formData.email,
        emailSubject: `Interested Solutions: ${selectedSolutions
          .map((solution) => solution.name)
          .join(", ")}`,
        message: `Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}`,
      }),
    })
      .then(async (response) => await response.json())
      .then(() => {
        toast.success("Sent successfully");
        setLoading(false);
        setView("checkout");
        setModalDisplay(false);
        setSelectedSolutions([]);
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred");
      });
  }
  console.log(selectedSolutions);

  return (
    <>
      <Layout className="relative">
        <PageHeader
          title="Market Place"
          subtitle="Diverse Solutions, One Platform"
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:p-12">
          <h1 className="mb-5 text-center font-Mongoose text-5xl">
            Your Gateway to Cloud Excellence!
          </h1>
          <p className="text-center text-base">
            Unlock the power of the cloud with our comprehensive marketplace,
            where cutting-edge solutions meet seamless integration. Whether
            you&apos;re a startup, a growing enterprise, or an established
            business, we have the cloud solutions to elevate your operations and
            drive unparalleled efficiency.
          </p>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:p-12 xl:gap-8">
          {solutions.map((solution) => (
            <div
              key={encodeURI(solution.name)}
              onClick={() => {
                onSelect(solution);
              }}
              className="flex cursor-pointer flex-col rounded-xl p-4 shadow-xl"
            >
              <div className="w-full">
                <Image
                  className="h-60 w-full rounded-xl object-cover"
                  src="/assets/images/solutions/enterprise-compute.jpg"
                  alt="companies"
                  width={1000}
                  height={500}
                />
              </div>
              <h2 className="my-3 text-2xl font-semibold">{solution.name}</h2>
              <p className="">
                {truncateString(solution.description, 200)}
                {/* <Link
                                href="/solutions/enterprise-compute"
                                className="ml-2 duration-300 border-b-2 whitespace-nowrap text-uni-blue hover:border-uni-blue"
                            >
                                See More
                            </Link> */}
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setModalDisplay(true);
          }}
          className="fixed bottom-0 right-0 m-6 flex h-16 w-16 items-center justify-center rounded-full bg-uni-blue"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-8 w-8 cursor-pointer text-white duration-300"
          />
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-white text-sm leading-none">
            {selectedSolutions.length}
          </span>
        </div>
      </Layout>
      <Modal
        title="Checkout"
        display={modalDisplay}
        close={() => {
          setModalDisplay(false);
        }}
      >
        {view === "checkout" && (
          <div className="flex h-full flex-col">
            <div className="flex h-[calc(100vh-13rem)] flex-col overflow-auto p-4">
              {selectedSolutions.length === 0 && (
                <div className="m-auto flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHourglassEnd}
                    className="h-8 w-8 cursor-pointer duration-300"
                  />
                  <h1 className="font-Mongoose text-2xl">No items selected</h1>
                </div>
              )}
              {selectedSolutions.length > 0 &&
                selectedSolutions.map((solution) => (
                  <div
                    key={encodeURI(solution.name)}
                    className="flex cursor-pointer items-center gap-4 rounded-md p-4 duration-300 hover:bg-gray-100"
                  >
                    <div className="w-16">
                      <Image
                        className="h-16 w-full rounded-xl object-cover"
                        src="/assets/images/solutions/enterprise-compute.jpg"
                        alt="companies"
                        width={1000}
                        height={500}
                      />
                    </div>
                    <h1 className="font-Mongoose text-2xl">{solution.name}</h1>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={() => {
                        onDelete(solution);
                      }}
                      className="ml-auto h-4 w-4 cursor-pointer duration-300 hover:text-red-500"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-auto p-4">
              <BaseButtonWithColor
                text="Continue"
                className=""
                size="full"
                onClick={() => {
                  if (selectedSolutions.length > 0) {
                    setView("form");
                  }
                }}
              />
            </div>
          </div>
        )}
        {view === "form" && (
          <form onSubmit={submitHandler} className="flex h-full flex-col">
            <div className="flex h-[calc(100vh-13rem)] flex-col space-y-4 overflow-auto p-4">
              <fieldset>
                <input
                  className="block w-full rounded-sm border border-gray-400 p-3"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  placeholder="Name"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  className="block w-full rounded-sm border border-gray-400 p-3"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  className="block w-full rounded-sm border border-gray-400 p-3"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </fieldset>
            </div>
            <fieldset className="mt-auto flex gap-4 p-4">
              <BaseButton
                onClick={() => {
                  setView("checkout");
                }}
                text="Go Back"
                className=""
                size="full"
              />
              <BaseButtonWithColor
                loading={loading}
                text="Submit"
                className=""
                size="full"
              />
            </fieldset>
          </form>
        )}
      </Modal>
    </>
  );
}
