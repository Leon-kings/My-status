/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DownloadButton = ({ fileUrl, fileName }) => {
  const downloadFile = async () => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={downloadFile}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
