import cx from "classnames";
import { forwardRef } from "react";
import type { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, fullWidth, error, placeholder, ...rest }, ref) => {
    return (
      <div
        className={cx("relative flex flex-col", {
          "w-full": fullWidth,
          "w-auto": !fullWidth,
          "text-gray-600": !error,
          "text-red-600": error,
        })}
      >
        <input
          ref={ref}
          className={cx(
            "peer h-10 border-b-2 border-black bg-transparent px-2 placeholder-transparent focus:outline-none",
            {
              "text-gray-600": !error,
              "border-red-600 text-red-600": error,
            },
          )}
          placeholder={placeholder}
          {...rest}
        />
        <label
          className={cx(
            "absolute -top-3 left-0 mx-1 cursor-text px-1 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm",
          )}
        >
          {label}
        </label>
        {error && (
          <p className="absolute -bottom-[18px] left-0 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
