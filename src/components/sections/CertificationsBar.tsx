import React from "react";

type CertificationsBarProps = {
  className?: string;
};

const CertificationsBar = ({ className = "" }: CertificationsBarProps) => {
  return (
    <section
      className={`w-full py-6 bg-white border-b border-gray-200 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/TempoLabsAI/tempo-assets/main/ordit-logo.png"
              alt="ORDIT - Official Register of Driving Instructor Training"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/TempoLabsAI/tempo-assets/main/dsa-logo.png"
              alt="Driving Standards Agency Approved Driving Instructor"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/TempoLabsAI/tempo-assets/main/dbs-logo.png"
              alt="Disclosure and Barring Service"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/TempoLabsAI/tempo-assets/main/drive-dojo-logo.png"
              alt="Drive Dojo"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/TempoLabsAI/tempo-assets/main/pass-plus-logo.png"
              alt="Pass Plus Registered Instructor"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
