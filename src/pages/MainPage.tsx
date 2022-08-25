import { useState } from "react";

import SentenceAnalyzer from "../components/SentenceAnalyzer";
import TextArea from "../components/TextArea";

export default function MainPage() {
  const [sourceValue, setSourceValue] = useState("");
  const [targetValue, setTargetValue] = useState("");

  return (
    <div className="h-screen p-2">
      <div className="bg-yellow-200 mb-3 px-2 py-3 rounded text-xs">
        주의 !! 마침표, 쉼표, 특수문자 등 모든 문자가 카운팅 됩니다.
      </div>
      <div>
        <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          원문
        </h1>
        <TextArea
          placeholder="원문을 입력하세요."
          value={sourceValue}
          onChange={(value) => setSourceValue(value)}
        />
      </div>
      <div className="mt-3">
        <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          비교문
        </h1>
        <TextArea
          placeholder="비교문을 입력하세요."
          value={targetValue}
          onChange={(value) => setTargetValue(value)}
        />
      </div>
      <SentenceAnalyzer
        valueState={{
          source: sourceValue,
          target: targetValue,
        }}
      />
    </div>
  );
}
