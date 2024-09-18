const LessionsList = ({number, title} : any) => {
  return (
    <li className="flex my-4">
      <div className="flex gap-3 items-center justify-center">
        <p className="border-2 p-1 rounded-full h-6 w-6 flex items-center justify-center">
          {number}
        </p>
        <p>{title}</p>
      </div>
    </li>
  );
};

export default LessionsList;
