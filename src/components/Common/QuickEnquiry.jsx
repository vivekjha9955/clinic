import React from "react";
import "./QuickEnquiry.css";

const QuickEnquiry = ({ onClick }) => {
  return (
    <button className="quick-enquiry" onClick={onClick}>
      Quick Enquiry
    </button>
  );
};

export default QuickEnquiry;