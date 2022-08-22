import React, { FC } from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
<div>
    <p className = "number">
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />      //setting innerHTML dangerously from API call
    <div>
        {answers.map(answer => (
            <button disabled={userAnswer} onClick = {callback}>
                <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
        ))}
    </div>
</div>

);

export default QuestionCard;
