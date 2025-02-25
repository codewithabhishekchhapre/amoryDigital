import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaButton = ({ setCaptchaVerified }) => {
  const handleCaptchaChange = (value) => {
    if (value) {
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
