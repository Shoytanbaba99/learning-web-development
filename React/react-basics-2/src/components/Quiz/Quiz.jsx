import Question from "./Question";
import Navigation from "./Navigation";
import { quizData } from "../../data/quizData";
import { useState } from "react";
import AiResult from "./AiResult";
export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = quizData[index];
    const hasPrev = index > 0;
    const hasNext = index < quizData.length - 1;
    function handleNext() {
        if (correct === true) setScore(score + 1);
        setCorrect(false);
        setSelectedAnswer(null);
        if (index === quizData.length - 1) {
            setIsFinished(true);
        } else {
            setIndex(index + 1);
        }
    }
    function handlePrev() {
        setIndex(index - 1);
        setCorrect(false);
        setSelectedAnswer(null);
    }
    function handleAns(selectedOption) {
        setSelectedAnswer(selectedOption);
        if (selectedOption === currentQuestion.correctAnswer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }
    if (isFinished) {
        return (
            <AiResult
                score={score}
                total={quizData.length}
                onReset={() => window.location.reload()}
            />
        );
    }
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-gray-900 p-8 rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-800 w-full max-w-md">
            <Question
                {...currentQuestion}
                handleAns={handleAns}
                selectedAnswer={selectedAnswer}
            ></Question>
            <Navigation
                canNext={selectedAnswer !== null}
                hasNext={hasNext}
                hasPrev={hasPrev}
                handleNext={handleNext}
                handlePrev={handlePrev}
            ></Navigation>
        </div>
    );
}
