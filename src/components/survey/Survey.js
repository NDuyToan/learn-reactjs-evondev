import { useEffect, useState } from "react";
import Question from "./Question";

const ListQuestion = [
  {
    id: 1,
    name: "question1",
    title: "Đây là câu hỏi số 1",
    type: "checkbox",
    options: [
      {
        id: "item1",
        name: "question1",
        title: "Lựa chọn số 1",
        isChecked: false,
      },
      {
        id: "item2",
        name: "question1",
        title: "Lựa chọn số 2",
        isChecked: false,
      },
      {
        id: "item3",
        name: "question1",
        title: "Lựa chọn số 3",
        isChecked: false,
      },
      {
        id: "item4",
        name: "question1",
        title: "Lựa chọn số 4",
        isChecked: false,
      },
      {
        id: "item5",
        name: "question1",
        title: "Lựa chọn số 5",
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    name: "question2",
    title: "Đây là câu hỏi số 2?",
    type: "checkbox",
    options: [
      {
        id: "item1",
        name: "question2",
        title: "Lựa chọn số 1",
        isChecked: false,
      },
      {
        id: "item2",
        name: "question2",
        title: "Lựa chọn số 2",
        isChecked: false,
      },
    ],
  },
  {
    id: 3,
    name: "question3",
    title: "Đây là câu hỏi số 3?",
    type: "checkbox",
    options: [
      {
        id: "item1",
        name: "question3",
        title: "Lựa chọn số 1",
        isChecked: false,
      },
      {
        id: "item2",
        name: "question3",
        title: "Lựa chọn số 2",
        isChecked: false,
      },
      {
        id: "item3",
        name: "question3",
        title: "Lựa chọn số 3",
        isChecked: false,
      },
    ],
  },
];

const Survey = () => {
  return (
    <>
      <Question questions={ListQuestion} />
    </>
  );
};

export default Survey;
