import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className="recaptcha flex-column align-items-center justify-content-center">
      
      <form>
        <div className="mb-3" >
          
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />

       
      </form>
    </div>
  );
};

export default ReCaptach;