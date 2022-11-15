import React, { InputHTMLAttributes } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import lodash from "lodash";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  placeholder?: string;
  textarea?: boolean;
  handleChange?: any;
  validation?: RegisterOptions;
  value?: any;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  validation,
  size: _,
  textarea,
  placeholder,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = lodash.get(errors, name);

  return (
    <div className="mb-4">
      <label
        className={`block text-gray-700 text-sm font-bold mb-2 ${
          !!error ? "border-red-100" : ""
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          {...register(name, validation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          placeholder={placeholder ? placeholder : label}
        />
      ) : (
        <input
          {...register(name, validation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type ? type : "text"}
          id={name}
          placeholder={placeholder ? placeholder : label}
        />
      )}
      {error ? (
        <div className="text-red-500 text-xs italic mt-2">
          {error.message as string}
        </div>
      ) : null}
    </div>
    // <FormControl isInvalid={!!error} >
    //   <>
    //     <FormLabel htmlFor={name}>{label}</FormLabel>
    //     <InputOrTextarea
    //       {...register(name, { ...validation })}
    //       {...props}
    //       id={name}
    //     />
    //   </>

    //   {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
    // </FormControl>
  );
};

export default InputField;
