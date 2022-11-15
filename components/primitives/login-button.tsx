"use client";
import { useEffect, useState } from "react";
import LoginForm from "../forms/login-form";

const LoginButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);
  return (
    <div className="relative">
      <div
        onClick={() => {
          setModalOpen(true);
        }}
        className="cursor-pointer underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
      >
        Login
      </div>
      {modalOpen ? (
        <div
          onClick={() => {
            if (!loading) {
              setModalOpen(false);
            }
          }}
          style={{
            zIndex: 100,
          }}
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
        ></div>
      ) : null}

      {modalOpen ? (
        <LoginForm setLoading={setLoading} loading={loading} />
      ) : null}
    </div>
  );
};

export default LoginButton;
