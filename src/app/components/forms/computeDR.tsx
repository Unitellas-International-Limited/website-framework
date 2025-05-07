import React, { useState, useEffect } from "react";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";
import { sendGTMEvent } from "@next/third-parties/google";

export interface ComputeDRForm {
  service: string;
  senderName: string; // sender name
  senderEmail: string; // sender email
  senderPhone: string; // sender phone number
  senderNotes: string; // sender notes
  orgName: string; // sender org
  senderCountry: string; // sender country
  os: string; // required os
  publicIP: number; // required public IPs
  cpuNumber: number; // required cpu number
  ramSize: string; // required ram size in gib/tb
  customRamSize: string; // required ram size in gib/tb
  bandwidth: string;
  customBandwidth: string;
  driveType: string; // required ram size in gib/tb
  storageType: string; // storage type e.g ssd, hdd
  storageAmount: number; // storage amount needed
  ssdGbTb: string; // gb or tb for ssd storage choice
  database: string;
}

interface ComputeDRProps {
  serviceName: string;
}

const ComputeDR: React.FC<ComputeDRProps> = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);
  const [openCustomBandwidth, setOpenCustomBandwidth] = useState(false);
  const [customRAM, setCustomRAM] = useState("");
  const [customBandwidth, setCustomBandwidth] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState<ComputeDRForm>({
    service: serviceName,
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    orgName: "",
    senderNotes: "",
    senderCountry: "",
    os: "Windows",
    publicIP: 0,
    cpuNumber: 1,
    bandwidth: "10Mbps",
    ramSize: "4GiB",
    driveType: "HDD",
    storageType: "Block",
    storageAmount: 1,
    ssdGbTb: "GB",
    customRamSize: "",
    customBandwidth: "",
    database: "SQL",
  });

  // to get countries list
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(async (res) => await res.json())
      .then((data) => {
        const countryNames = data.map((country: any) => country.name.common);
        const sortedCountryNames = countryNames.sort();
        setCountries(sortedCountryNames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  // handle input change for ram, bandwidth
  const handleRamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "Custom") {
      setOpenCustom(true);
      setFormData((prev) => ({ ...prev, ramSize: "Custom" }));
    } else {
      setOpenCustom(false);
      setFormData((prev) => ({ ...prev, ramSize: value }));
    }
  };

  const handleCustomRamChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const customValue = event.target.value;
    setCustomRAM(customValue);
    setFormData((prev) => ({ ...prev, customRamSize: customValue }));
  };

  const handleBandwidthChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value;

    if (value === "Custom") {
      setOpenCustomBandwidth(true);
      setFormData((prev) => ({ ...prev, bandwidth: "Custom" }));
    } else {
      setOpenCustomBandwidth(false);
      setFormData((prev) => ({ ...prev, bandwidth: value }));
    }
  };

  const handleCustomBandwidthChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const customValue = event.target.value;
    setCustomBandwidth(customValue);
    setFormData((prev) => ({ ...prev, customBandwidth: customValue }));
  };

  // to set default storage unit
  useEffect(() => {
    if (
      formData.storageType === "HDD" ||
      formData.storageType === "Object Storage"
    ) {
      setFormData((prev) => ({ ...prev, ssdGbTb: "TB" }));
    } else {
      setFormData((prev) => ({ ...prev, ssdGbTb: "GB" }));
    }
  }, [formData.storageType]);

  // handle general input change
  const handleChange = (event: any) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    fetch("api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        toast.success("Sent successfully. We'll get back to you soon.");
        setLoading(false);
        setFormData({
          service: serviceName,
          senderName: "",
          senderEmail: "",
          senderPhone: "",
          orgName: "",
          senderNotes: "",
          senderCountry: "",
          os: "Windows",
          publicIP: 0,
          cpuNumber: 1,
          bandwidth: "10Mbps",
          ramSize: "4GiB",
          driveType: "HDD",
          storageType: "Block",
          storageAmount: 1,
          ssdGbTb: "GB",
          customRamSize: "",
          customBandwidth: "",
          database: "SQL",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred. Try again.");
      });
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto my-20 max-w-5xl space-y-8 px-8"
    >
      {/* name */}
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

      {/* email */}
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

      {/* phone number */}
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

      {/* org */}
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

      {/* country */}
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

      {/* OS */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Operating System:</p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="os"
          id="os"
          defaultValue="Windows"
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

      {/* vCPU */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required vCPU Size:</p>
        <input
          type="number"
          min={1}
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

      {/* ram */}
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
          <option value="4GiB">4GiB</option>
          <option value="8GiB">8GiB</option>
          <option value="16GiB">16GiB</option>
          <option value="32GiB">32GiB</option>
          <option value="64GiB">64GiB</option>
          <option value="96GiB">96GiB</option>
          <option value="112iB">112GiB</option>
          <option value="128GiB">128GiB</option>
          <option value="160GiB">160GiB</option>
          <option value="192GiB">192GiB</option>
          <option value="224GiB">224GiB</option>
          <option value="256GiB">256GiB</option>
          <option value="288GiB">288GiB</option>
          <option value="320GiB">320GiB</option>
          <option value="384GiB">384GiB</option>
          <option value="448GiB">448GiB</option>
          <option value="672GiB">672GiB</option>
          <option value="896GiB">896GiB</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      {/* custom ram */}
      {openCustom && (
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

      {/* bandwidth */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Bandwidth: </p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="bandwidth"
          id="bandwidth"
          value={formData.bandwidth}
          required
          onChange={handleBandwidthChange}
        >
          <option value="10Mbps">10Mbps</option>
          <option value="15Mbps">15Mbps</option>
          <option value="100Mbps">100Mbps</option>
          <option value="STM 1">STM 1</option>
          <option value="1Gbps">1Gbps</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      {/* custom bandwidth */}
      {openCustomBandwidth && (
        <div>
          <input
            className="block w-full rounded-sm border border-gray-400 p-3"
            name="customBandwidth"
            id="customBandwidth"
            placeholder="Enter your required bandwidth size e.g 300Gbps"
            value={customBandwidth}
            onChange={handleCustomBandwidthChange}
            type="text"
            required
          />
        </div>
      )}

      {/* public IP */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Public IPs:</p>
        <input
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="publicIP"
          id="publicIP"
          min={0}
          value={formData.publicIP}
          onChange={(e) => {
            handleChange(e);
          }}
          type="number"
          required
        />
      </div>

      {/* stroage type */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Storage Type: </p>
        <select
          className="block w-full rounded-sm border border-gray-400 p-3"
          name="storageType"
          id="storageType"
          value={formData.storageType}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="Block">Block Storage</option>
          <option value="File">File Storage</option>
          <option value="Object">Object Storage</option>
        </select>
      </div>

      {/* drive type */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Drive Type: </p>
        {formData.storageType === "Object" && (
          <div>
            <select
              className="block w-full rounded-sm border border-gray-400 p-3"
              name="driveType"
              id="driveype"
              disabled
              value={formData.driveType}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="HDD">HDD</option>
            </select>
          </div>
        )}

        <select
          className={`${
            formData.storageType === "Object" ? "hidden" : ""
          } block w-full rounded-sm border border-gray-400 p-3`}
          name="driveType"
          id="driveType"
          value={formData.driveType}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="HDD">HDD</option>
          <option value="SSD">SSD</option>
          <option value="NVMe">NVMe</option>
          <option value="GPU">GPU</option>
        </select>
      </div>

      {/* storage amount */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Required Storage Size:</p>
        <div className="flex items-center gap-2">
          {formData.driveType === "HDD" || formData.storageType === "Object" ? (
            <>
              <input
                type="number"
                min="1"
                className="block w-full rounded-sm border border-gray-400 p-3"
                name="storageAmount"
                id="storageAmount"
                value={formData.storageAmount}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <p className="font-Mongoose text-3xl">TB</p>
            </>
          ) : (
            <>
              <input
                type="number"
                min={`${formData.driveType === "SSD" ? 100 : 1}`}
                className="block w-full rounded-sm border border-gray-400 p-3"
                name="storageAmount"
                id="storageAmount"
                value={formData.storageAmount}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <select
                className="block font-Mongoose text-3xl"
                name="ssdGbTb"
                id="ssdGbTb"
                value={formData.ssdGbTb}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="GB">GB</option>
                <option value="TB">TB</option>
              </select>
            </>
          )}
        </div>
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

      {/* notes */}
      <div>
        <p className="mb-2 font-Mongoose text-3xl">Other Notes: </p>
        <textarea
          className="block w-full resize-none rounded-sm border border-gray-400 p-3"
          name="senderNotes"
          id="senderNotes"
          value={formData.senderNotes}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </div>

      <BaseButtonWithColor
        loading={loading}
        onClick={() => {
          sendGTMEvent({
            event: "buttonClicked",
            value: "Compute/DR Form Submitted",
          });
        }}
        text="Submit"
        size="full"
      />
    </form>
  );
};

export default ComputeDR;
