import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({
  children,
  isGoogleButton,
  invertedButton,
  ...otherProps
}) => (
  <button
    className={`${invertedButton ? "inverted" : ""} ${
      isGoogleButton ? "Google" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
