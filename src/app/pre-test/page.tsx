import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PreTest = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen">

      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Your Tests</h2>
        <Card className="shadow-md w-96">
          <CardContent>
          <h3 className="text-2xl font-bold">Timing</h3>
            <p>hello world</p>
          </CardContent>
        </Card>
      </div>

      <div className="bottom-0 flex flex-row justify-end items-center space-x-4 h-20 w-full px-6 border-t-2">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>

    </div>
  );
}

export default PreTest;