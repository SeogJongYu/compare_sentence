import React, { useCallback, useState } from "react";
import classNames from "classnames";

import Button from "./Button";

interface SentenceControllerProps {
  title: string;
  className?: string;
  onEnter?(value: string): void;
  buttonLabel?: string;
  placeholder?: string;
}

export default function SentenceController({
  title,
  className,
  onEnter,
  buttonLabel = "입력",
  placeholder = "비교할 문장을 입력하세요.",
}: SentenceControllerProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleEnterClick = useCallback(() => {
    onEnter && onEnter(inputValue);
  }, [inputValue, onEnter]);

  return (
    <div className={classNames(className)}>
      <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {title}
      </h1>
      <textarea
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label={buttonLabel} className="mt-2" onClick={handleEnterClick} />
    </div>
  );
}
