import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import "./Certificate.css";
import logo from "../../assets/Hellow.png"; 

function Certificate() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const topic = params.get("topic");

  useEffect(() => {
    if (!name || !topic) {
        window.location.href = "/signin"; 
    
    }
  }, [name, topic]);

  const handleDownload = () => {
    const certificate = document.getElementById("certificate");
    html2canvas(certificate).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${name}_${topic}_Certificate.png`;
      link.click();
    });
  };

  return (
    <div className="certificate-container">
      <div id="certificate" className="certificate">
     
        <img src={logo} alt="Logo" className="logo" />

        <h1>Certificate of Achievement</h1>
        <p>This certificate is proudly presented to</p>
        <h2 className="certificate-name">{name}</h2>
        <p>for successfully completing the <strong>{topic}</strong> Basics.</p>

   
        <p className="auth-text">
          This certificate is awarded in recognition of your hard work and dedication to learning.  
          Keep pushing forward and achieving greatness!
        </p>

     
        <div className="certificate-footer">
          <p className="signature"><strong>Signature:</strong> <u>Pritiranjan Patra</u></p>
          <p className="date"><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <button onClick={handleDownload} className="download-btn">Download Certificate</button>
    </div>
  );
}

export default Certificate;
