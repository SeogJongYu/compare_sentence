import classNames from "classnames";

interface ButtonProps {
  label: string;
  onClick(): void;
  className?: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        "inline-flex items-center px-5 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
