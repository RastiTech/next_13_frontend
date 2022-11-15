import { IButtonProps } from "../../interfaces/components/primitives/button";
import Spinner from "./spinner";

const Button = ({
  loading,
  children,
  onClick = () => {},
  type = "button",
  disabled,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-${loading ? 900 : 800} hover:bg-purple-900 ${
        loading ? "text-purple-900" : "text-white"
      } font-bold py-2 px-4 rounded relative`}
      type={type}
      disabled={disabled}
    >
      {children}
      {loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <Spinner size={"small"} />
        </div>
      ) : null}
    </button>
  );
};

export default Button;
