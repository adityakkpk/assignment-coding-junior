const FaqCard = ({ data, isActive, onToggle }: any) => {
  return (
    <li className="w-full border-l-2 shadow-md rounded my-3 p-3">
      <div className="flex justify-between mb-5">
        <p>{data.question}</p>
        <button
          className={
            isActive
              ? "rounded px-2 bg-red-400 text-black hover:shadow-red-400 transition duration-200 hover:shadow-md"
              : "rounded px-2 bg-green-400 text-black hover:shadow-emerald-400 transition duration-200 hover:shadow-md"
          }
          onClick={onToggle}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <p>{isActive && data.answer}</p>
    </li>
  );
};

export default FaqCard;
