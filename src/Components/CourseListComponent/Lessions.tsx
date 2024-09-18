import { useState } from "react";
import LessionsList from "./LessionsList";

const Lessions = ({title, lessions}: any) => {
  const [isHidden, setIsHidden] = useState<any>(true);

  return (
    <li className="">
      <div
        className=" cursor-pointer flex justify-between items-center my-7"
        onClick={() => setIsHidden(!isHidden)}
      >
        <p>{title}</p>
        <img
          src="src/assets/down.svg"
          className={`invert w-4 ${isHidden ? "" : "rotate-180"}`}
        />
      </div>
      {isHidden ? (
        ""
      ) : (
        <ul>
          {
            lessions.map((lession : any) => (
                <LessionsList key={lession.number} number={lession.number} title={lession.title} />
            ))
          }
        </ul>
      )}
    </li>
  );
};

export default Lessions;
