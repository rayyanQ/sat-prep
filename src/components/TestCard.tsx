import { ReactNode } from "react";

const TestCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="aspect-square flex flex-col justify-center items-center border rounded-lg shadow-md w-52 px-5">
      {children}
    </div>
  );
}

export default TestCard;