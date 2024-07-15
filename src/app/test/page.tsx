import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  EllipsisVertical,
  PencilLine,
  Bookmark,
  CircleHelp,
  Keyboard,
  PersonStanding,
  ScanLine,
  DoorOpen,
  TriangleAlert
} from "lucide-react";

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
             
              <div className="w-full h-8 flex justify-between items-center bg-neutral-200 border-b-2 border-neutral-950 border-dashed">
                <div className="flex flex-row">
                  <span className="flex justify-center items-center bg-neutral-950 text-white h-full aspect-square">
                    <b>1</b>
                  </span>
                  <Bookmark size={20} />
                </div>
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
      <div className="w-full h-20 px-10 grid grid-cols-3">

        <div className="col-span-1 flex flex-col justify-center items-start space-y-2">
          <h4 className="text-lg font-medium">Section 1: Reading and Writing</h4>
          <small className="text-sm font-medium">Direction</small>
        </div>

        <div className="col-span-1 flex flex-col justify-center items-center space-y-2">
          <h4 className="text-lg font-medium">0:00</h4>
          <small className="text-sm font-medium border border-neutral-950 rounded-full px-3">Hide</small>
        </div>

        <div className="col-span-1 flex flex-row justify-end items-center">
          <div className="flex flex-col justify-center items-center p-2">
            <PencilLine size={20} />
            <small className="text-sm font-medium">Annotate</small>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex flex-col justify-center items-center p-2">
                <EllipsisVertical size={20} />
                <small className="text-sm font-medium">More</small>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><CircleHelp className="mr-2 h-4 w-4" />Help</DropdownMenuItem>
              <DropdownMenuItem><Keyboard className="mr-2 h-4 w-4" />Shortcuts</DropdownMenuItem>
              <DropdownMenuItem><PersonStanding className="mr-2 h-4 w-4" />Assistive Technology</DropdownMenuItem>
              <DropdownMenuItem><ScanLine className="mr-2 w-4 h-4" />Line Reader</DropdownMenuItem>
              <DropdownMenuItem><DoorOpen className="mr-2 w-4 h-4" />Unscheduled Break</DropdownMenuItem>
              <DropdownMenuItem><TriangleAlert className="mr-2 w-4 h-4" />Exit the Exam</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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