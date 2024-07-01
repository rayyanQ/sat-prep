import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PreTest = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen">

      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Your Tests</h2>
        <Card className="shadow-md w-96">
          <CardHeader>
            <CardTitle>You Have No Upcoming Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tests appear here a few weeks before test day. <b>If you got a paper ticket from your school, <a>sign out</a> and sign in with it.</b></p>
          </CardContent>
        </Card>
      </div>

      <div className="bottom-0 flex flex-row justify-end items-center space-x-4 h-16 w-full px-4 border-dashed border-black border-t-2">
        <button>Start Test</button>
        <button>View Results</button>
      </div>

    </div>
  );
}

export default PreTest;