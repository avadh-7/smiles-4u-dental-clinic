"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import { services } from "@/data/services";

export const AppointmentForm: React.FC<{ className?: string; defaultTreatment?: string }> = ({ className, defaultTreatment }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: defaultTreatment || "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number (10+ digits).";
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.date) tempErrors.date = "Please select a preferred date.";
    if (!formData.time) tempErrors.time = "Please select a preferred time slot.";
    if (!formData.service) tempErrors.service = "Please select a service/treatment.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that specific field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Map service ID to human-readable title
      let serviceName = formData.service;
      if (formData.service === "consult") {
        serviceName = "General Consultation";
      } else if (formData.service === "smile-suraksha") {
        serviceName = "Smile Suraksha AMC Plan";
      } else {
        const matched = services.find((s) => s.id === formData.service);
        if (matched) {
          serviceName = matched.title;
        }
      }

      // Map time slot ID to human-readable text
      const timeSlots: Record<string, string> = {
        "morning-1": "Morning: 10:00 AM - 11:30 AM",
        "morning-2": "Morning: 11:30 AM - 1:00 PM",
        "evening-1": "Evening: 5:00 PM - 6:30 PM",
        "evening-2": "Evening: 6:30 PM - 8:00 PM",
        "evening-3": "Evening: 8:00 PM - 9:00 PM",
      };
      const timeText = timeSlots[formData.time] || formData.time;

      // Format WhatsApp message
      const whatsappMessage = `New Appointment Request
Full Name: ${formData.name}
Mobile Number: ${formData.phone}
Email Address: ${formData.email.trim() || "N/A"}
Treatment/Service: ${serviceName}
Preferred Date: ${formData.date}
Preferred Time Slot: ${timeText}
Dental Concern/Message: ${formData.message.trim() || "N/A"}`;

      // Simulate a brief API loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Open WhatsApp in a new tab with the pre-filled message
      const encodedText = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/917303635131?text=${encodedText}`, "_blank");

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or call the clinic directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {submitError && (
          <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-100 text-rose-800 rounded-2xl text-sm">
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-sans font-semibold text-primary">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Harshal Shah"
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans focus:outline-none focus:border-secondary transition-smooth ${
                errors.name ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            />
            {errors.name && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.name}</span>}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-sans font-semibold text-primary">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. +91 91527 66951"
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans focus:outline-none focus:border-secondary transition-smooth ${
                errors.phone ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            />
            {errors.phone && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.phone}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-sans font-semibold text-primary">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. patient@mail.com"
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans focus:outline-none focus:border-secondary transition-smooth ${
                errors.email ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            />
            {errors.email && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.email}</span>}
          </div>

          {/* Treatment Select */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-sm font-sans font-semibold text-primary">
              Select Treatment / Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans text-primary/80 focus:outline-none focus:border-secondary transition-smooth ${
                errors.service ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            >
              <option value="">-- Choose Dental Care --</option>
              <option value="consult">General Consultation</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.id}>
                  {svc.title}
                </option>
              ))}
              <option value="smile-suraksha">Smile Suraksha AMC Plan</option>
            </select>
            {errors.service && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.service}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Date Picker */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="date" className="text-sm font-sans font-semibold text-primary">
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans focus:outline-none focus:border-secondary transition-smooth ${
                errors.date ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            />
            {errors.date && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.date}</span>}
          </div>

          {/* Time Picker */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="time" className="text-sm font-sans font-semibold text-primary">
              Preferred Time Slot *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-lavender-bg border rounded-2xl text-sm font-sans text-primary/80 focus:outline-none focus:border-secondary transition-smooth ${
                errors.time ? "border-rose-300 bg-rose-50/20" : "border-slate-200"
              }`}
            >
              <option value="">-- Select Time Slot --</option>
              <option value="morning-1">Morning: 10:00 AM - 11:30 AM</option>
              <option value="morning-2">Morning: 11:30 AM - 1:00 PM</option>
              <option value="evening-1">Evening: 5:00 PM - 6:30 PM</option>
              <option value="evening-2">Evening: 6:30 PM - 8:00 PM</option>
              <option value="evening-3">Evening: 8:00 PM - 9:00 PM</option>
            </select>
            {errors.time && <span className="text-xs text-rose-500 font-sans mt-0.5">{errors.time}</span>}
          </div>
        </div>

        {/* Message TextArea */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-sans font-semibold text-primary">
            Describe Dental Concern / Messages
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="e.g. I need a dental checkup and routine scaling. / Seeking details on orthodontic braces..."
            className="w-full px-4 py-3 bg-lavender-bg border border-slate-200 rounded-2xl text-sm font-sans focus:outline-none focus:border-secondary transition-smooth"
          />
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          variant="gold"
          disabled={isSubmitting}
          className="w-full py-4 text-primary font-semibold flex items-center justify-center gap-3 mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Verifying availability...</span>
            </>
          ) : (
            <span>Confirm Booking Request</span>
          )}
        </Button>
      </form>

      {/* Success Modal Lightbox Popup */}
      {submitSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-md px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="p-3 bg-emerald-50 rounded-full border border-emerald-100 mb-5">
              <CheckCircle2 className="h-14 w-14 text-emerald-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">
              Appointment Request Sent!
            </h3>
            <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
              Thank you for trusting Smiles 4 U. Our chief dentist <strong className="font-bold">Dr. Millin D. Desai</strong>&apos;s team will contact you on your mobile number shortly to finalize your appointment slot.
            </p>
            <Button
              variant="secondary"
              onClick={() => setSubmitSuccess(false)}
              className="w-full"
            >
              Close Window
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AppointmentForm;
