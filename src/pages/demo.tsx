import React, { useState, useEffect } from "react";
import Head from "next/head";
import { BaseButtonWithColor } from "@/components/UI/Buttons";
import toast from "react-hot-toast";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export interface DemoForm {
  senderName: string; // sender name
  senderEmail: string; // sender email
  senderPhone: string; // sender phone number
  senderNotes: string; // sender notes
  orgName: string; // sender org
  os: string; // required os
  publicIP: number; // required public IPs
  cpuNumber: number; // required cpu number
  ramSize: string; // required ram size in gib/tb
  customRamSize: string; // required ram size in gib/tb
  driveType: string; // required ram size in gib/tb
  storageType: string; // storage type e.g ssd, hdd
  storageAmount: number; // storage amount needed
  ssdGbTb: "GB" | "TB" | "none"; // gb or tb for ssd storage choice
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);
  const [customRAM, setCustomRAM] = useState("");
  const [formData, setFormData] = useState<DemoForm>({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    orgName: "",
    senderNotes: "",
    os: "Windows",
    publicIP: 0,
    cpuNumber: 1,
    ramSize: "4GiB",
    customRamSize: "",
    driveType: "HDD",
    storageType: "Block",
    storageAmount: 1,
    ssdGbTb: "GB",
  });

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

  useEffect(() => {
    if (
      formData.storageType === "EBS HDD" ||
      formData.storageType === "Object Storage"
    ) {
      setFormData((prev) => ({ ...prev, ssdGbTb: "TB" }));
    } else {
      setFormData((prev) => ({ ...prev, ssdGbTb: "GB" }));
    }
  }, [formData.storageType]);

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
          senderName: "",
          senderEmail: "",
          senderPhone: "",
          orgName: "",
          senderNotes: "",
          os: "Windows",
          publicIP: 0,
          cpuNumber: 1,
          ramSize: "4 GiB",
          customRamSize: "",
          driveType: "HDD",
          storageType: "Block",
          storageAmount: 0,
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
    <Layout>
      <Head>
        <title>Schedule a Demo | Unitellas International Limited</title>
      </Head>
      <PageHeader title="Schedule a Demo" />

      <form
        onSubmit={submitHandler}
        className="mx-auto my-20 max-w-5xl space-y-8 p-8"
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

        <div>
          <p className="mb-2 font-Mongoose text-3xl">Required vCPU Size:</p>
          <input
            type="number"
            min="1"
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
            <option value="Custom">Custom Size</option>
          </select>
        </div>

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

        <div>
          <p className="mb-2 font-Mongoose text-3xl">Required Storage Type: </p>
          <select
            className="block w-full rounded-sm border border-gray-400 p-3"
            name="storageType"
            id="storageType"
            defaultValue="HDD"
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

        <div>
          <p className="mb-2 font-Mongoose text-3xl">Required Drive Type: </p>
          {formData.storageType === "Object" && (
            <div>
              <select
                className="block w-full rounded-sm border border-gray-400 p-3"
                name="driveType"
                id="driveype"
                disabled
                defaultValue="HDD"
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
            id="driveype"
            defaultValue="HDD"
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

        <div>
          <p className="mb-2 font-Mongoose text-3xl">Required Storage Size:</p>
          <div className="flex items-center gap-2">
            {(formData.driveType === "NVMe" ||
              formData.driveType === "GPU") && (
              <>
                <input
                  type="number"
                  min={1}
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
                  name="GbTb"
                  id="GbTb"
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

            {formData.driveType === "HDD" && (
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
            )}

            {formData.driveType === "SSD" && (
              <>
                <input
                  type="number"
                  min={`${formData.ssdGbTb === "GB" ? 100 : 0}`}
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
                  name="GbTb"
                  id="GbTb"
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

            {formData.storageType === "Object Storage" && (
              <>
                <input
                  type="number"
                  min="1"
                  className="block w-full rounded-sm border border-gray-400 p-3"
                  name="storageAmount"
                  id="storageAmount"
                  value={`${formData.storageAmount}`}
                  required
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="font-Mongoose text-3xl">TB</p>
              </>
            )}
          </div>
        </div>

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

        <BaseButtonWithColor loading={loading} text="Schedule" size="full" />
      </form>
    </Layout>
  );
}
