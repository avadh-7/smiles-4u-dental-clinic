"use client";

import React from "react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "917303635131";
  const defaultMessage = encodeURIComponent(
    "Hi Smiles 4 U Dental Clinic, I would like to book an appointment or inquire about dental treatments."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip text bubble */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 bg-slate-900/90 text-white text-xs font-sans font-medium rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Smiles 4 U Dental Clinic on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/50 transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current text-white relative z-10"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.7.77 5.23 2.11 7.39L2.2 30.15l6.98-1.83C11.23 29.5 13.55 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.54c-2.18 0-4.22-.59-5.98-1.62l-.43-.25-4.43 1.16 1.18-4.32-.28-.44C4.94 20.25 4.36 18.2 4.36 16c0-6.42 5.22-11.64 11.64-11.64 6.42 0 11.64 5.22 11.64 11.64 0 6.42-5.22 11.64-11.64 11.64zm6.39-8.73c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.38-.2.23-.41.26-.76.09-2.06-1.03-3.41-1.84-4.77-4.17-.36-.62.36-.58 1.03-1.92.11-.23.06-.44-.03-.62-.09-.18-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.91 0 1.72 1.25 3.38 1.43 3.61.18.23 2.46 3.76 5.96 5.27 2.21.96 3.08 1.04 4.19.88.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.24-.66-.42z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
