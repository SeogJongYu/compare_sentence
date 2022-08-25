import { useCallback, useState } from "react";
import classNames from "classnames";

import Button from "./Button";

export interface ValueState {
  source: string;
  target: string;
}

interface TextArrayItem {
  text: string;
  exist: boolean;
}

export interface SentenceAnalyzerProps {
  valueState: ValueState;
}

export default function SentenceAnalyzer({
  valueState,
}: SentenceAnalyzerProps) {
  const [targetArray, setTargetArray] = useState<TextArrayItem[]>([]);

  const handleAnalyzerClick = useCallback(() => {
    const { source, target } = valueState;

    if (!source || !target) {
      alert("문장을 입력해주세요.");
      return;
    }

    const sourceList: TextArrayItem[] = source.split("").map((d) => ({
      text: d,
      exist: false,
    }));
    const targetList: TextArrayItem[] = target.split("").map((d) => ({
      text: d,
      exist: false,
    }));

    targetList.forEach((targetItem, targetIndex) => {
      sourceList.forEach((sourceItem, sourceIndex) => {
        if (targetItem.text === " ") {
          return;
        }
        if (targetItem.text === "\n") {
          return;
        }
        if (targetItem.exist === true || sourceItem.exist === true) {
          return;
        }
        if (sourceItem.text === targetItem.text) {
          targetList[targetIndex].exist = true;
          sourceList[sourceIndex].exist = true;
        }
      });
    });

    setTargetArray(targetList);
  }, [valueState]);

  return (
    <div className="mt-3">
      <Button label="분석하기" className="mb-3" onClick={handleAnalyzerClick} />
      <div className="mb-3">
        <h3>원문</h3>
        <div>{valueState.source}</div>
      </div>
      <div className="mb-3">
        <h3>비교문</h3>
        <div>
          {targetArray.map((textItem, index) => {
            return (
              <span
                className={classNames(
                  textItem.exist ? "text-blue-700" : "text-red-600"
                )}
                key={index}
              >
                {textItem.text}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        일치하는 글자 수: {targetArray.filter((d) => d.exist === true).length}
      </div>
    </div>
  );
}
