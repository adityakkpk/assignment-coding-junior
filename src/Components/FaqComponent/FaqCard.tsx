const FaqCard = ({ data, isActive, onToggle }: any) => {
  return (
    <li className="w-full border-l-2 shadow-md rounded-xl bg-white my-3 p-3">
      <div className="flex justify-between mb-5">
        <p className="font-semibold">{data.question}</p>
        <button
          className={
            isActive
              ? "rounded px-2 text-black transition duration-200"
              : "rounded px-2 text-black transition duration-200"
          }
          onClick={onToggle}
        >
          {isActive ? <img src="src/assets/up.svg" /> : <img src="src/assets/down.svg" alt="" />}
        </button>
      </div>
      <p>{isActive && data.answer}</p>
    </li>
  );
};

export default FaqCard;
