"use client";

import { FormProvider, useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { ILoginFormProps } from "../../interfaces/components/forms/login-form";
import Button from "../primitives/button";
import InputField from "./input-field";
import { useRouter } from "next/navigation";

const LoginForm = ({ loading, setLoading }: ILoginFormProps) => {
  const router = useRouter();
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          // delay 10 seconds to simulate loading
          //   await new Promise((resolve) => setTimeout(resolve, 10000));
          try {
            const res = await loginUser({
              bodyOrQuery: data,
            });
            if (res?.id) {
              router.refresh();
            }
            console.log("res", res?.id);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            // TODO: handle error
          }
        })}
        className="bg-white rounded-lg p-6 absolute w-64 right-0"
        style={{
          top: "calc(100% + 18px)",
          zIndex: 101,
        }}
      >
        <div className="text-2xl font-bold mb-4 text-black">Login</div>
        <InputField
          label="Username"
          name="username"
          validation={{
            required: "Username is required",
            minLength: 6,
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Username must be only letters",
            },
          }}
        />

        <InputField
          label="Password"
          name="password"
          type={"password"}
          validation={{
            required: "Password is required",
            minLength: 8,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              message:
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          }}
        />

        <div className="flex justify-end">
          <Button disabled={loading} type={"submit"} loading={loading}>
            Login
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
