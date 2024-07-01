import { ReactNode } from "react";

type ButtonProps = {
  type: "default" | "outline" | "deactivated" | "yellow" | "mini" | "text" | "outline-blue" | "outline-white" | "text-blue"
  
  children: ReactNode
}

const Button = ({ type, children } : ButtonProps) => {
  // Have a default height and width, but allow customization
  return (
    <button className="bg-blue-800 hover:bg-blue-950 px-8 py-3 rounded-full">
      {children}
    </button>
  );
}

export default Button;