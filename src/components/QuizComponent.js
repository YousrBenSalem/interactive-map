import React, { useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const QuizComponent = () => {
  const [answers, setAnswers] = useState(Array(6).fill(""));
  const [showCorrection, setShowCorrection] = useState(false);

  const questions = [
    {
      question: "إنتاج الحبوب في البلاد التونسية يتوزع على:",
      options: ["إقليم واحد", "إقليمين", "ثلاثة أقاليم"],
      correctAnswer: "ثلاثة أقاليم",
    },
    {
      question: "أهم صنف من الحبوب تنتجه البلاد التونسية هو:",
      options: ["القمح الصلب", "الشعير", "الأرز"],
      correctAnswer: "القمح الصلب",
    },
    {
      question: "يعرف إقليم الساحل وصفاقس بإنتاج:",
      options: ["إنتاج التمور", "إنتاج الكروم", "إنتاج الزياتين"],
      correctAnswer: "إنتاج الزياتين",
    },
    {
      question: "إنتاج اللحوم الحمراء في البلاد التونسية:",
      options: ["استقرار", "تزايد", "تراجع"],
      correctAnswer: "تراجع",
    },
    {
      question: "إنتاج اللحوم البيضاء في البلاد التونسية:",
      options: ["في تزايد", "تراجع", "استقرار"],
      correctAnswer: "تراجع",
    },
    {
      question: "تطورت الزراعات السقوية بالبلاد التونسية بفضل:",
      options: [
        "الإعتماد فقط على الأمطار الطبيعية",
        "تحسين تقنيات الري",
        "توسيع المساحات المزروعة",
        "استعمال نوعية بذور جيدة",
      ],
      correctAnswer: [
        "تحسين تقنيات الري",
        "توسيع المساحات المزروعة",
        "استعمال نوعية بذور جيدة",
      ],
    },
  ];

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setShowCorrection(true);
  };

  const resetQuiz = () => {
    setAnswers(Array(6).fill(""));
    setShowCorrection(false);
  };

  const isCorrect = (questionIndex, option) => {
    const correct = questions[questionIndex].correctAnswer;
    if (Array.isArray(correct)) {
      return correct.includes(option);
    }
    return option === correct;
  };

  const renderQuestion = (question, index) => {
    return (
      <Box key={index} sx={{ mb: 4, direction: "rtl" }}>
        <h4>{question.question}</h4>
        <FormControl component="fieldset">
          <RadioGroup
            value={answers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          >
            {question.options.map((option, optionIndex) => (
              <Box
                key={optionIndex}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:
                    showCorrection && isCorrect(index, option)
                      ? "#e8f5e9"
                      : "transparent",
                  borderRadius: "4px",
                  p: "4px 8px",
                }}
              >
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                  disabled={showCorrection}
                />
                {showCorrection && isCorrect(index, option) && (
                  <span
                    style={{
                      color: "#4caf50",
                      fontWeight: "bold",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                )}
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "right", direction: "rtl", p: 3 }}>
  

      {questions.map((question, index) => renderQuestion(question, index))}

      <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-end", mt: 3 }}>
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
            "&:hover": { backgroundColor: "#e6c233" },
          }}
          variant="contained"
          onClick={resetQuiz}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
            "&:hover": { backgroundColor: "#4fa352" },
          }}
          variant="contained"
          onClick={checkAnswers}
        >
          الإصلاح
        </Button>
      </Box>

      {showCorrection && (
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            borderLeft: "4px solid #60B463",
          }}
        >
          <h3>الإجابات الصحيحة:</h3>
          <ol>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong>
                <div>
                  {Array.isArray(question.correctAnswer) ? (
                    question.correctAnswer.map((ans, i) => (
                      <div key={i}>● {ans}</div>
                    ))
                  ) : (
                    <>● {question.correctAnswer}</>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Box>
      )}
    </Box>
  );
};

export default QuizComponent;
