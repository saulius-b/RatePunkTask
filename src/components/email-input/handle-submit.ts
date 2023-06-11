import { Dispatch, SetStateAction } from "react";

interface handleSubmitProps {
  email: string;
  setValidationMessage: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsEmailValid: Dispatch<SetStateAction<boolean | null>>;
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = ({
  email,
  setValidationMessage,
  setEmail,
  setIsEmailValid,
}: handleSubmitProps) => {
  if (email.trim() === "" || !isValidEmail(email)) {
    setIsEmailValid(false);
    setValidationMessage("Error State - incorrect address entered");
    return;
  }

  const data = JSON.stringify({ email });

  fetch("https://api.jsonbin.io/v3/b/64861ddfb89b1e2299ad694c", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Access-Key":
        "$2b$10$Tg6uicdN2b6vSd4FphaSSuL.Vvj6BSSRfzDpoZNAl0hID29HzpZzO",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        setEmail("");
        setIsEmailValid(true);
      } else {
        setValidationMessage("Failed to save email. Please try again.");
      }
    })
    .catch(() => {
      setValidationMessage("An error occurred while saving email.");
    });
};

export default handleSubmit;
