import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionHeader = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer p-2 py-1  border-b border-black"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h1 className="text-2xl md:text-3xl font-bold truncate flex-grow">{title}</h1>
        {isExpanded ? (
          <FaChevronUp className="text-gray-600 text-2xl ml-4" />
        ) : (
          <FaChevronDown className="text-gray-600 text-2xl ml-4" />
        )}
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionHeader;
