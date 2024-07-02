import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Test = () => {
  return (
    <main className="flex flex-col justify-between items-center w-full h-screen">
      <TestHeader />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
              <p className="w-full flex justify-start items-center my-6 font-serif">
                In recommending Bao Phi&apos;s collection Song I Sing, a librarian noted that pieces by the
                spoken-word poet don&apos;t lose their ________ nature when printed: the language has the same
                pleasant musical quality on the page as it does when performed by Phi.
              </p>
            </div>
          </ResizablePanel>
          <ResizableHandle className="border-2" />
          <ResizablePanel defaultSize={50}>
            <div className="min-w-48 w-full max-w-[700px] flex flex-col justify-start items-center mx-auto px-10 py-6">
             
              <div className="w-full h-8 pb-1 flex justify-between items-center bg-neutral-100 border-b-2 border-neutral-950 border-dashed">

                  <span className="flex justify-center items-center bg-neutral-950 text-white size-8">
                    <b>1</b>
                  </span>
                
                <div>ABC</div>
              </div>

              <p className="w-full flex justify-start items-center my-6 font-serif">
                Which choice completes the text with the most logical and precise word or phrase?
              </p>

              <ol className="w-full space-y-3">
                <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                  <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                    A
                  </span>
                  scholarly
                </li>
                <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                  <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                    B
                  </span>
                  melodic
                </li>
                <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                  <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                    C
                  </span>
                  jarring
                </li>
                <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950">
                  <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                    D
                  </span>
                  personal
                </li>
              </ol>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <TestFooter />
    </main>
  );
}

export default Test;

const TestHeader = () => {
  return (
    <header className="top-0 flex flex-row justify-between items-center w-full border-neutral-950 border-dashed border-b-2">
      <div className="w-full h-20 px-10 flex flex-row justify-between items-center">
        <div>Section 1: Reading and Writing<br />Direction</div>

        
      </div>
    </header>
  );
}

const TestFooter = () => {
  return (
    <footer className="bottom-0 flex flex-row justify-center items-center w-full border-neutral-950 border-dashed border-t-2">
      <div className="w-full h-20 px-10 grid grid-cols-3">
        <div className="col-span-1 flex flex-row justify-start items-center">
          <b>Rayyan Quraishi</b>
        </div>
        <div className="col-span-1 flex flex-row justify-center items-center">
          <div className="bg-neutral-950 text-white px-3 py-1 rounded">Question 1 of 8</div>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center">
          <Button>Next</Button>
        </div>
      </div>
    </footer>
  );
}