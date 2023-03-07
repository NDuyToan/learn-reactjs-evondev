import React, { useState, useEffect } from "react";
import "./style.scss";

const Question = ({ questions }) => {
  const TOTAL_QUESTION = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState();

  useEffect(() => {
    let _answers = {};

    for (let question of questions) {
      _answers[question.name] = "";
    }
    setAnswers(_answers);
  }, [questions]);

  const handleGotoPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentQuestion(questions[currentQuestionIndex - 1]);
    }
  };

  const handleGotoNextQuestion = () => {
    if (currentQuestionIndex < TOTAL_QUESTION - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
    }
  };
  return (
    <div className="question-container ">
      <h2 className="question-number">질문 {currentQuestion?.id}.</h2>
      <p className="question-title">{currentQuestion?.title}</p>
      <div className="question-answers">
        <OptionItem
          question={currentQuestion}
          index={currentQuestionIndex}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      <div className="question-actions">
        {currentQuestionIndex > 0 && (
          <button
            className="btn btn-previous"
            onClick={handleGotoPreviousQuestion}
          >
            {"< "}
            이전
          </button>
        )}
        {currentQuestionIndex < TOTAL_QUESTION - 1 && (
          <button className="btn btn-next" onClick={handleGotoNextQuestion}>
            다음 {" >"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;

const OptionItem = ({ question, index, answers, setAnswers }) => {
  const { options } = question;
  const [isChecked, setIsChecked] = useState(false);
  console.log("question", question);
  console.log("answers", answers);

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [question?.name]: e?.currentTarget?.value,
    });
  };

  // const handleClick = (e) => {
  //   console.log("handleClick", e);
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className="option-container">
      {answers &&
        options &&
        options.length > 0 &&
        options.map((option) => (
          <div className="option-item" key={option.id}>
            <input
              type="radio"
              name={option?.name}
              id={option.id}
              value={option.id}
              onChange={handleInputChange}
              checked={option.id === answers[question?.name]}
            />
            <label htmlFor={option.id}>{option.title}</label>
            <span className="check-mark"></span>
          </div>
        ))}
    </div>
  );
};
