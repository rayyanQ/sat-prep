import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LoaderCircle, CircleCheck, CircleX } from "lucide-react";


const QuestionFooter = (
  {userAnswer, userResult, currentQuestion, questionCount, handleSubmit}:
  {userAnswer: string, userResult: null|string, currentQuestion: number, questionCount: number|null, handleSubmit: () => void}
) => {

  let resultMessage = <></>;
  if (userResult===null) {
    resultMessage = <span className="flex flex-row space-x-2"><LoaderCircle className="animate-spin" /><p>Submitting your answer...</p></span>;
  } else {
    resultMessage = userResult==="Correct" ?
      <span className="flex flex-row space-x-2"><CircleCheck className="text-green-600" /><p>{userResult}</p></span> :
      <span className="flex flex-row space-x-2"><CircleX className="text-destructive" /><p>{userResult}</p></span>
  }

  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-t">
      <div className="container h-14 px-10 grid grid-cols-3">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <p>Attempt #</p>
        </div>
        <div className="col-span-1 flex flex-row justify-center items-center">
          <div className="bg-neutral-950 text-white px-3 py-1 rounded">Question {currentQuestion} of {questionCount}</div>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center space-x-4">
          <Button variant="outline">Previous</Button>
          <Popover>
            <PopoverTrigger disabled={userAnswer==="-" || (userAnswer==="-" && userResult===null)}>
              <Button disabled={userAnswer==="-" || (userAnswer==="-" && userResult===null)} onClick={handleSubmit}>Submit</Button>
            </PopoverTrigger>
            <PopoverContent align='end'>
              { resultMessage }
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </footer>
  );
}

export { QuestionFooter };