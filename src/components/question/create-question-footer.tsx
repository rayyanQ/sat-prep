import { Button } from "@/components/ui/button";

const CreateQuestionFooter = ({handleSubmit}: {handleSubmit: () => void}) => {
  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-t">
      <div className="container h-14 px-10 grid grid-cols-2">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <b>Rayyan Quraishi</b>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center space-x-4">
          <Button variant="outline">Preview</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      </div>
    </footer>
  );
}

export default CreateQuestionFooter;