import { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      number : "1)",
      question: "The basic unit of life is the?",
      options: [" Organ", "Tissue", "Cell", "Organism"],
      answer: "Cell"
    },
    {
      number : "2)",
      question: "Photosynthesis takes place in the?",
      options: ["Nucleus", "Chloroplast", "Cytoplasm", "Golgi apparatus"],
      answer: "Chloroplast"
    },
    {
      number : "3)",
      question: "The process of transferring genetic information from parents to offspring is called?",
      options: ["Mutation", "Variation", "Inheritance", "Adaptation"],
      answer: "Inheritance"
    },
    {
      number : "4)",
      question: "The breakdown of food molecules to release energy is called?",
      options: ["Cellular respiration", " Digestion", "Cellular respiration", " Digestion"],
      answer: "Cellular respiration"
    },
    {
      number : "5)",
      question: "The following is NOT a component of the blood?",
      options: ["Muscle cells", "Red blood cells", "White blood cells", "Platelets"],
      answer: "Muscle cells"
    },
    {
      number : "6)",
      question: "The theory of evolution by natural selection was proposed by?",
      options: ["Louis Pasteur", "Charles Darwin", "Gregor Mendel", "Charles Darwin and Alfred Russel Wallace"],
      answer: "Charles Darwin and Alfred Russel Wallace"
    },
    {
      number : "7)",
      question: "The brain is located in the?",
      options: ["Chest cavity", "Abdominal cavity", "Cranium", "Pelvic cavity"],
      answer: "Cranium"
    },
    {
      number : "8)",
      question: "Plants absorb water and minerals through their",
      options: ["Leaves", "Roots", "Flowers", "Stems"],
      answer: "Roots"
    },
    {
      number : "9)",
      question: "The process by which green plants use sunlight to produce food is called?",
      options: ["Cellular respiration", "Photosynthesis", "Transpiration", " Mitosis"],
      answer: "Photosynthesis"
    },
    {
      number : "10)",
      question: "DNA is found in the?",
      options: ["Cytoplasm", "Nucleus", "Cell membrane", "Ribosomes"],
      answer: "Nucleus"
    }
  ];

  function handleOptionClick(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="container">
      
      {showScore ? (
        <>
        <h1>Result</h1>
        <h3>Your score is {score} out of {questions.length}</h3>
        <p>Thanks for participating!</p>
        </>
      ) : (
        <>
        <h1>Quiz Application</h1>
          <h3>{questions[currentQuestion].number} {questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>

          ))}
        </>
      )}
    </div>
  );
}

export default App;