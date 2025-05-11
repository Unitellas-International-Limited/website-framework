import React, { useState, useEffect } from "react";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";
import { sendGTMEvent } from "@next/third-parties/google";
export interface AIForm {
  service: string;
  senderName: string; // sender name
  senderEmail: string; // sender email
  senderPhone: string; // sender phone number
  orgName: string; // sender org
  senderNotes: string; // sender notes
  senderCountry: string;
  gpuSize: number;
  nvmeSize: string;
  customNvmeSize: string;
  os: string; // required os
  ramSize: string; // required ram size in gib/tb
  customRamSize: string; // custom ram size in gib/tb
  cpuNumber: number; // required cpu number
  database: string;
}

interface AIProps {
  serviceName: string;
}

interface Country {
  name: {
    common: string;
  };
}

const AI: React.FC<AIProps> = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const [openCustomRAM, setOpenCustomRAM] = useState(false);
  const [openCustomNVMe, setOpenCustomNVMe] = useState(false);
  const [customRAM, setCustomRAM] = useState("");
  const [customNVMe, setCustomNVMe] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState<AIForm>({
    service: serviceName,
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    orgName: "",
    senderNotes: "",
    senderCountry: "",
    gpuSize: 1,
    nvmeSize: "1920 GiB",
    customNvmeSize: "",
    os: "Windows",
    cpuNumber: 14,
    ramSize: "112GiB",
    customRamSize: "",
    database: "SQL",
  });

  // for countries list
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(async (res) => await res.json())
      .then((data) => {
        const countryNames = data.map(
          (country: Country) => country.name.common
        );
        const sortedCountryNames = countryNames.sort();
        setCountries(sortedCountryNames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  // general input change handler
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };

  const handleRamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;

    if (value === "Custom") {
      setOpenCustomRAM(true);
      setFormData((prev) => ({ ...prev, ramSize: "Custom" }));
    } else {
      setOpenCustomRAM(false);
      setFormData((prev) => ({ ...prev, ramSize: value }));
    }
  };

  const handleCustomRamChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const customValue = event.target.value;
    setCustomRAM(customValue);
    setFormData((prev) => ({ ...prev, customRamSize: customValue }));
  };

  const handleNVMeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;

    if (value === "Custom") {
      setOpenCustomNVMe(true);
      setFormData((prev) => ({ ...prev, nvmeSize: "Custom" }));
    } else {
      setOpenCustomNVMe(false);
      setFormData((prev) => ({ ...prev, nvmeSize: value }));
    }
  };

  const handleCustomNVMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const customValue = event.target.value;
    setCustomNVMe(customValue);
    setFormData((prev) => ({ ...prev, customNvmeSize: customValue }));
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    fetch("api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => await response.json())
      .then(() => {
        toast.success("Sent successfully! We'll get back to you soon.");
        setLoading(false);
        setFormData({
          service: serviceName,
          senderName: "",
          senderEmail: "",
          senderPhone: "",
          orgName: "",
          senderNotes: "",
          senderCountry: "",
          gpuSize: 1,
          nvmeSize: "1920 GiB",
          customNvmeSize: "",
          os: "Windows",
          cpuNumber: 14,
          ramSize: "4GiB",
          customRamSize: "",
          database: "SQL",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred");
      });
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto my-20 max-w-5xl space-y-8 px-8"
    >
      {/* input for name */}
      <input
        className="block w-full rounded-sm border border-gray-400 p-3"
        name="senderName"
        id="senderName"
        value={formData.senderName}
        onChange={(e) => {
          handleChange(e);
        }}
        type="text"
        placeholder="Name"
        required
      />

      {/* input for email */}
      <input
        className="block w-full rounded-sm border border-gray-400 p-3"
        name="senderEmail"
        id="senderEmail"
        value={formData.senderEmail}
        onChange={(e) => {
          handleChange(e);
        }}
        type="email"
        placeholder="Email"
        required
      />

      {/* input for phone number */}
      <input
        className="block w-full rounded-sm border border-gray-400 p-3"
        name="senderPhone"
        id="senderPhone"
        minLength={11}
        maxLength={11}
        value={formData.senderPhone}
        onChange={(e) => {
          handleChange(e);
        }}
        type="tel"
        placeholder="Phone Number"
      />

      {/* input for organization */}
      <input
        className="block w-full rounded-sm border border-gray-400 p-3"
        name="orgName"
        id="orgName"
        value={formData.orgName}
        onChange={(e) => {
          handleChange(e);
        }}
        type="text"
        placeholder="Organization"
      />

      {/* input for country */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Country:</p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="senderCountry"
          id="senderCountry"
          value={formData.senderCountry}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        >
          <option value="">Select a Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="mb-2 font-Mongoose text-3xl">Operating System:</p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="os"
          id="os"
          value={formData.os}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="Windows">Windows</option>
          <option value="Linux">Linux</option>
        </select>
      </div>

      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required vCPU Size:</p>
        <input
          type="number"
          min={14}
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="cpuNumber"
          id="cpuNumber"
          value={formData.cpuNumber}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>

      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required RAM Size:</p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="ramSize"
          id="ramSize"
          value={formData.ramSize}
          required
          onChange={handleRamChange}
        >
          <option value="112iB">112GiB</option>
          <option value="224GiB">224GiB</option>
          <option value="448GiB">448GiB</option>
          <option value="Custom">Custom Size</option>
        </select>
      </div>

      {/* database */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Database: </p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="database"
          id="database"
          value={formData.database}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="MySQL">MySQL</option>
          <option value="PostreSQL">PostgreSQL</option>
          <option value="Oracle">Oracle</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Microsoft SQL Server">Microsoft SQL Server</option>
        </select>
      </div>

      {/* for custom RAM */}
      {openCustomRAM && (
        <div>
          <input
            className="block w-full rounded-sm border border-gray-400 p-3"
            name="customRAM"
            id="customRAM"
            placeholder="Enter your required RAM size e.g 300 GiB"
            value={customRAM}
            onChange={handleCustomRamChange}
            type="text"
            required
          />
        </div>
      )}

      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required NVMe Size:</p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="nvmeSize"
          id="nvmeSize"
          value={formData.nvmeSize}
          required
          onChange={handleNVMeChange}
        >
          <option value="1920 GiB">1920 GiB</option>
          <option value="3840 GiB">3840 GiB</option>
          <option value="7680 GiB">7680 GiB</option>
          <option value="Custom">Custom Size</option>
        </select>
      </div>

      {/* for custom NVMe */}
      {openCustomNVMe && (
        <div>
          <input
            className="block w-full rounded-sm border border-gray-400 p-3"
            name="customNVMe"
            id="customNVMe"
            placeholder="Enter your required NVMe size e.g 300 GiB"
            value={customNVMe}
            onChange={handleCustomNVMeChange}
            type="text"
            required
          />
        </div>
      )}

      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required GPU Size:</p>
        <input
          type="number"
          min="1"
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="gpuSize"
          id="gpuSize"
          value={formData.gpuSize}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>

      {/* SENDER NOTES */}
      <div className={"mb-2"}>
        <p className="mb-2 font-Mongoose text-3xl">Other Notes: </p>
        <textarea
          name="senderNotes"
          id="senderNotes"
          rows={5}
          className="block w-full resize-none rounded-sm border border-gray-400 p-3"
          value={formData.senderNotes}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </div>

      <BaseButtonWithColor
        loading={loading}
        onClick={() => {
          sendGTMEvent({ event: "buttonClicked", value: "AI Form Submitted" });
        }}
        text="Submit"
        size="full"
      />
    </form>
  );
};

export default AI;
