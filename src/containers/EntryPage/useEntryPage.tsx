import React, { useEffect, useState, useRef } from "react";
const useMainPage = () => {
  const [checked, setChecked] = useState(false);
  const [display, setDisplay] = useState<string>("inline");
  const [hint, setHint] = useState<string>("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    setChecked((prev) => !prev);
    const timer = setTimeout(() => {
      setDisplay("none");
    }, 4000);
    const focusTimer = setTimeout(() => {
      emailRef.current.focus();
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(focusTimer);
    };
  }, []);
  const handleChangePassword = (password: string) => {
    setHint("password should be at least 8 letters");
  };
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return {
    display,
    checked,
    handleSignIn,
    emailRef,
    passwordRef,
    hint,
    handleChangePassword,
  };
};
export default useMainPage;
