import React from "react";
import FaqCard from "./FaqCard";
import questions from "./questions.json";

const FaqComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButton = (id) => {
    setIsActive((prev) => (prev === id ? false : id));
  };
  return (
    <ul className="w-full p-8">
      {questions.map((faq, i) => (
        <FaqCard
          key={faq.id}
          data={faq}
          isActive={isActive === faq.id}
          onToggle={() => handleButton(faq.id)}
        />
      ))}
    </ul>
  );
};

export default FaqComponent;
