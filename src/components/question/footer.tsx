import { Button } from '@/components/ui/button';

const QuestionFooter = ({currentQuestion, questionCount}: {currentQuestion: number, questionCount: number|null}) => {
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
          <Button>Submit</Button>
        </div>
      </div>
    </footer>
  );
}

export { QuestionFooter };