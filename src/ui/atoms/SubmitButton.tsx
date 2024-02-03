import classNames from "classnames";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  const buttonClass = classNames(
    "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200",
    `${pending ? "opacity-50 cursor-not-allowed" : ""}`
  );
  return (
    <button aria-disabled={pending} type="submit" className={buttonClass}>
      Login
    </button>
  );
}
