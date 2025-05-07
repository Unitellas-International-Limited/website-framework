import React, { useState, useEffect } from "react";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";
import { sendGTMEvent } from "@next/third-parties/google";

export interface QuoteForm {
  service: string;
  senderName: string; // sender name
  senderEmail: string; // sender email
  senderPhone: string; // sender phone number
  orgName: string; // sender org
  senderNotes: string; // sender notes
  senderCountry: string;
  driveType: string; // required drive Type in ssd, hdd...
  storageType: string; // storage type e.g object,file,block
  storageAmount: number; // storage amount needed
  ssdGbTb: "GB" | "TB" | "none"; // gb or tb for ssd storayge choice
}

interface BackupProps {
  serviceName: string;
}

const Backup: React.FC<BackupProps> = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState<QuoteForm>({
    service: serviceName,
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    orgName: "",
    senderNotes: "",
    senderCountry: "",
    driveType: "HDD",
    storageType: "Block",
    storageAmount: 1,
    ssdGbTb: "GB",
  });

  // for countries list
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

  // general input change handler
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((values) => ({ ...values, [targetName]: targetValue }));
  };

  useEffect(() => {
    if (
      formData.driveType === "HDD" ||
      formData.storageType === "Object Storage"
    ) {
      setFormData((prev) => ({ ...prev, ssdGbTb: "TB" }));
    } else {
      setFormData((prev) => ({ ...prev, ssdGbTb: "GB" }));
    }
  }, [formData.storageType]);

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
          driveType: "HDD",
          storageType: "Block",
          storageAmount: 1,
          ssdGbTb: "GB",
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
                defaultValue="GB"
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
            value: "Backup Form Submitted",
          });
        }}
        text="Submit"
        size="full"
      />
    </form>
  );
};

export default Backup;
