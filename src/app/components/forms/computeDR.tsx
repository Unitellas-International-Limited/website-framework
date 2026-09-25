"use client";

import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { sendGTMEvent } from "@next/third-parties/google";

interface ComputeDRProps {
  serviceName: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  senderEmail: string;
  referral: string;
  jobFunction: string;
}

const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TIME_SLOTS = [
  "9:00 AM",
  "9:15 AM",
  "9:30 AM",
  "9:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "1:00 PM",
  "1:15 PM",
  "1:30 PM",
  "1:45 PM",
  "2:00 PM",
  "2:15 PM",
  "2:30 PM",
  "2:45 PM",
  "3:00 PM",
  "3:15 PM",
  "3:30 PM",
  "3:45 PM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
];

const REFERRAL_OPTIONS = [
  "Google",
  "LinkedIn",
  "Twitter / X",
  "Facebook",
  "YouTube",
  "Referral",
  "Event / Conference",
  "Other",
];

const JOB_FUNCTION_OPTIONS = [
  "IT / Technology",
  "Engineering",
  "Operations",
  "Finance",
  "Sales",
  "Marketing",
  "Executive / Management",
  "Government",
  "Other",
];

function getDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatSelectedDate(date: Date) {
  return `${WEEKDAY_NAMES[date.getDay()]}, ${
    MONTH_NAMES[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

function getLagosNow() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(new Date());

  const values: Record<string, string> = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  });

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

function isToday(date: Date) {
  const now = getLagosNow();

  return (
    date.getFullYear() === now.year &&
    date.getMonth() + 1 === now.month &&
    date.getDate() === now.day
  );
}

function isPastDate(date: Date) {
  const now = getLagosNow();

  const selected = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const today = new Date(now.year, now.month - 1, now.day);

  return selected < today;
}

function isTimeSlotAvailable(date: Date, time: string) {
  if (!isToday(date)) {
    return true;
  }

  const [timePart, modifier] = time.split(" ");
  let hours = Number(timePart.split(":")[0]);
  const minutes = Number(timePart.split(":")[1]);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }

  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  const now = getLagosNow();

  const currentMinutes = now.hour * 60 + now.minute;
  const slotMinutes = hours * 60 + minutes;

  // Require at least 30 minutes notice for same-day bookings.
  return slotMinutes >= currentMinutes + 30;
}

function getCalendarDays(month: number, year: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const days: (Date | null)[] = [];

  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
}

export default function ComputeDR({ serviceName }: ComputeDRProps) {
  const today = useMemo(() => {
    const now = getLagosNow();

    return new Date(now.year, now.month - 1, now.day);
  }, []);

  const [step, setStep] = useState<1 | 2>(1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedTime, setSelectedTime] = useState<string>("");

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    senderEmail: "",
    referral: "",
    jobFunction: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const calendarDays = useMemo(
    () => getCalendarDays(currentMonth.getMonth(), currentMonth.getFullYear()),
    [currentMonth],
  );

  const selectedDateFormatted = selectedDate
    ? formatSelectedDate(selectedDate)
    : "";

  const canGoToPreviousMonth =
    currentMonth.getFullYear() > today.getFullYear() ||
    (currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() > today.getMonth());

  const handlePreviousMonth = () => {
    if (!canGoToPreviousMonth) return;

    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const handleDateSelect = (date: Date) => {
    if (isPastDate(date)) return;

    if (date.getDay() === 0 || date.getDay() === 6) {
      return;
    }

    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    if (!selectedDate) {
      toast.error("Please select a date.");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select a time.");
      return;
    }

    setStep(2);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    setStep(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error("Please select an appointment time.");
      setStep(1);
      return;
    }

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.senderEmail.trim() ||
      !formData.referral ||
      !formData.jobFunction
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      service: serviceName,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      senderName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      senderEmail: formData.senderEmail.trim(),
      referral: formData.referral,
      jobFunction: formData.jobFunction,
      appointmentDate: getDateKey(selectedDate),
      appointmentDateFormatted: formatSelectedDate(selectedDate),
      appointmentTime: selectedTime,
      timezone: "Africa/Lagos (WAT)",
      duration: "30 minutes",
    };

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to schedule the demo.");
      }

      sendGTMEvent({
        event: "Demo Scheduled",
        service: serviceName,
      });

      toast.success("Your demo has been scheduled successfully.");

      setFormData({
        firstName: "",
        lastName: "",
        senderEmail: "",
        referral: "",
        jobFunction: "",
      });

      setSelectedDate(null);
      setSelectedTime("");
      setStep(1);
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong while scheduling your demo. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#F5F8FA] py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
              step === 1 ? "bg-[#15C9E4] text-white" : "bg-[#102A43] text-white"
            }`}
          >
            1
          </div>

          <div
            className={`h-[2px] w-16 sm:w-24 ${
              step === 2 ? "bg-[#15C9E4]" : "bg-slate-300"
            }`}
          />

          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
              step === 2
                ? "bg-[#15C9E4] text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            2
          </div>
        </div>

        {step === 1 ? (
          // <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(16,42,67,0.06)] lg:grid-cols-[1fr_0.9fr]">
            {/* Calendar */}
            <div className="border-b border-slate-200 p-4 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-7">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#15C9E4]">
                  Step 1 of 2
                </p>

                <h2 className="text-2xl font-bold text-[#102A43] sm:text-3xl">
                  Choose a time
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Select a convenient date and time for your 30-minute Unitellas
                  demo.
                </p>
              </div>

              {/* <div className="mb-5 flex items-center justify-between"> */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5">
                <button
                  type="button"
                  onClick={handlePreviousMonth}
                  disabled={!canGoToPreviousMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-[#102A43] transition hover:border-[#15C9E4] hover:text-[#15C9E4] disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Previous month"
                >
                  ‹
                </button>

                <h3 className="text-base font-semibold text-[#102A43]">
                  {MONTH_NAMES[currentMonth.getMonth()]}{" "}
                  {currentMonth.getFullYear()}
                </h3>

                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-[#102A43] transition hover:border-[#15C9E4] hover:text-[#15C9E4]"
                  aria-label="Next month"
                >
                  ›
                </button>
              </div>

              <div className="mb-2 grid grid-cols-7">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="py-2 text-center text-xs font-semibold text-slate-400"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return <div key={`empty-${index}`} />;
                  }

                  const disabled =
                    isPastDate(date) ||
                    date.getDay() === 0 ||
                    date.getDay() === 6;

                  const selected =
                    selectedDate &&
                    getDateKey(selectedDate) === getDateKey(date);

                  const todayDate = isToday(date);

                  return (
                    <button
                      key={getDateKey(date)}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleDateSelect(date)}
                      // className={`relative aspect-square rounded-lg text-sm font-medium transition ${
                      className={`relative aspect-square min-h-[42px] rounded-xl text-sm font-medium transition ${
                        selected
                          ? "bg-[#15C9E4] text-white shadow-sm"
                          : disabled
                            ? "cursor-not-allowed text-slate-300"
                            : "text-[#102A43] hover:bg-[#EAF4FC]"
                      }`}
                    >
                      {date.getDate()}

                      {todayDate && !selected && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#15C9E4]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#15C9E4]" />
                  Selected
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-slate-300" />
                  Available
                </div>
              </div>
            </div>

            {/* Time slots */}
            <div className="p-4 sm:p-8">
              <div className="mb-7">
                <p className="text-sm font-semibold text-[#102A43]">
                  {selectedDate ? selectedDateFormatted : "Select a date"}
                </p>

                <p className="mt-1 text-sm text-slate-500">Available times</p>
              </div>

              {!selectedDate ? (
                <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-[#F5F8FA] px-6 text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF4FC] text-xl">
                      📅
                    </div>

                    <h3 className="font-semibold text-[#102A43]">
                      Select a date
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                      Choose an available weekday from the calendar to see
                      appointment times.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid max-h-[420px] grid-cols-2 gap-2.5 overflow-y-auto pr-1 sm:gap-3 xl:grid-cols-3">
                    {TIME_SLOTS.map((time) => {
                      const available = isTimeSlotAvailable(selectedDate, time);

                      const selected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={!available}
                          onClick={() => setSelectedTime(time)}
                          className={`min-h-[48px] rounded-xl border px-3 py-3 text-sm font-medium transition ${
                            selected
                              ? "border-[#15C9E4] bg-[#15C9E4] text-white shadow-sm"
                              : available
                                ? "border-slate-200 bg-white text-[#102A43] hover:border-[#15C9E4] hover:bg-[#EAF4FC]"
                                : "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#D5F3F8] bg-[#EAF4FC] px-4 py-4 text-sm leading-6 text-[#102A43]">
                    <strong>Timezone:</strong> Africa/Lagos (WAT)
                    <br />
                    <strong>Duration:</strong> 30 minutes
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="w-full rounded-xl bg-[#15C9E4] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#102A43] hover:shadow-md"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(16,42,67,0.06)] sm:p-8 lg:p-10">
            {/* Appointment summary */}
            <div className="mb-8 rounded-xl border border-[#BCEEF5] bg-[#EAF4FC] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#15C9E4]">
                    Selected appointment
                  </p>

                  <p className="mt-1 font-semibold text-[#102A43]">
                    {selectedDateFormatted}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {selectedTime} · 30 minutes · Africa/Lagos (WAT)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex min-h-[40px] items-center text-sm font-semibold text-[#102A43] underline decoration-[#15C9E4] underline-offset-4 hover:text-[#15C9E4]"
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#15C9E4]">
                Step 2 of 2
              </p>

              <h2 className="text-2xl font-bold text-[#102A43] sm:text-3xl">
                Your information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell us a little about yourself so we can prepare for the
                conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-[#102A43]"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="First name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-[#102A43]"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Last name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="senderEmail"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Work email <span className="text-red-500">*</span>
                </label>

                <input
                  id="senderEmail"
                  name="senderEmail"
                  type="email"
                  value={formData.senderEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="referral"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  How did you hear about us?{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20"
                >
                  <option value="">Select an option</option>

                  {REFERRAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="jobFunction"
                  className="mb-2 block text-sm font-medium text-[#102A43]"
                >
                  Job function <span className="text-red-500">*</span>
                </label>

                <select
                  id="jobFunction"
                  name="jobFunction"
                  value={formData.jobFunction}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#102A43] outline-none transition focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20"
                >
                  <option value="">Select your job function</option>

                  {JOB_FUNCTION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#102A43] transition hover:border-[#15C9E4] hover:bg-[#EAF4FC] sm:w-auto"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[180px] rounded-xl bg-[#15C9E4] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#102A43] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Demo"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
