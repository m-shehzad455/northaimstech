import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "../String";
import mergeRefs from "../../Utils/Margerefs";
import { ReactIcon } from "../Reacticon/ReactIcon";
/* eslint-disable-next-line */
export interface TextInputProps {
  label?: string;
  placeholder: string;
  name: string;
  help?: string;
  error?: string;
  leadingText?: string;
  link?: {
    text: string;
    click: () => void;
  };
  onEmpty?: () => void;
  emptyError?: string;
  defaultValue?: string;
  showSearchIcon?: boolean;
  focus?: boolean;
  disabled?: boolean | string;
  clearQuery?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// eslint-disable-next-line react/display-name
export const TextInput = forwardRef(
  (
    {
      label,
      placeholder,
      name,
      help = "",
      error = "",
      leadingText = "",
      link,
      onEmpty,
      emptyError,
      showSearchIcon, // determines whether to display a search icon on input field
      clearQuery, // determines whether to provide a clear button and funcitonality to input field
      focus = false,
      disabled,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const [fieldDirty, setFieldDirty] = useState(false);
    const [fieldEmpty, setFieldEmpty] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (focus) {
        inputRef.current?.focus();
      }
      setFieldEmpty(inputRef.current?.value === "");
    }, [focus]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldDirty(true);
      props.onChange?.(e);
      setFieldEmpty(!e.target.value);
      if (!e.target.value) onEmpty?.();
    };
    const isErrorState =
      (fieldDirty &&
        inputRef?.current?.value === "" &&
        typeof onEmpty === "function") ||
      error;
    return (
      <div>
        {label && (
          <label
            htmlFor=""
            className="block text-xs font-medium text-gray-400 pb-0.45"
          >
            {label}
            {link && (
              <div
                className="text-xs text-blue-500 cursor-pointer mr-2 float-right"
                onClick={link.click}
              >
                {link.text}
              </div>
            )}
          </label>
        )}
        <div className="mt-1 relative">
          <div className="bg-gray-50 flex flex-row border border-gray-300 rounded inner-shadow">
            {leadingText && (
              <div className="flex items-center justify-center">
                <div className="px-3 py-2 text-gray-400 border-r border-gray-200">
                  /
                </div>
              </div>
            )}
            <input
              name={name}
              type="text"
              className={classNames(
                "border-0 focus:ring-blue-500 placeholder-gray-300 focus:ring-2 focus:border-blue-500 focus:outline-none block w-full sm:text-sm rounded py-2 pl-4",
                isErrorState ? "border-red-500 border-2" : ""
              )}
              placeholder={placeholder}
              aria-describedby=""
              ref={
                ref
                  ? mergeRefs(inputRef, ref as MutableRefObject<unknown>)
                  : inputRef
              }
              disabled={!!disabled}
              {...props}
              onChange={handleChange}
            />
            {showSearchIcon && fieldEmpty && (
              <ReactIcon
                icon={"IoIosSearch"}
                className="absolute right-2.5 text-search_icon_grey text-xl top-1/2"
                style={{ transform: "translateY(-50%)" }}
              />
            )}
            {isErrorState && (
              <ReactIcon
                icon={"MdErrorOutline"}
                className="absolute right-2.5 text-search_icon_grey text-xl top-1/2 text-red-500"
                style={{ transform: "translateY(-50%)" }}
              />
            )}
            {clearQuery && !fieldEmpty && (
              <ReactIcon
                icon={"IoIosCloseCircleOutline"}
                className="absolute right-2.5 text-search_icon_grey text-xl top-1/2"
                onClick={() => {
                  setFieldEmpty(true);
                  clearQuery();
                }}
                style={{ transform: "translateY(-50%)" }}
              />
            )}
          </div>
        </div>
        {help && <p className="mt-2 text-sm text-gray-500">{help}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        {isErrorState && !error && (
          <p className="mt-2 text-sm text-red-500">{emptyError}</p>
        )}
      </div>
    );
  }
);
