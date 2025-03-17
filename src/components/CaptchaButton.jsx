import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaButton = ({ setCaptchaVerified, setCaptchaResponse }) => {
  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaResponse(value); // Save the CAPTCHA response token
      setCaptchaVerified(true);
    }
  };

  return (
    <div className="captcha-container">
      <ReCAPTCHA
        sitekey="6Lcki-IqAAAAAKC2BYRO7x8DBjyqQOCUFuJqb1o7"
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default CaptchaButton;
