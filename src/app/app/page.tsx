import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeBody />
    </div>
  );
}

const HomeHeader = () => {
  return (
    <header className="flex flex-col justify-start items-center bg-blue-100">

      <div className="container h-14 flex flex-row justify-between items-center">

        <div>LOGO</div>
        <div className="flex flex-row items-center space-x-4">
          <p>Rayyan Quraishi</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

      </div>

      <div className="container h-28 py-6 flex flex-row items-end">
        <h1 className="text-4xl font-light text-blue-600">
          Welcome, Rayyan! Good luck on test day!
        </h1>
      </div>

    </header>
  );
}

const HomeBody = () => {
  return (
    <main className="w-full flex flex-row justify-center items-start">
      <section className="container py-6">

        <div className="flex flex-row justify-between items-center pb-2">
          <div>
            <h3 className="text-2xl font-bold">Your Tests</h3>
            <Tabs></Tabs>
          </div>
          <div>
            <a href="#">Don&apos;t see your test here</a>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>You Have No Upcoming Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tests appear here a few weeks before test day. <b>If you got a paper ticket from your school, <a>sign out</a> and sign in with it.</b></p>
            </CardContent>
          </Card>
        </div>

      </section>

      <section>

      </section>
    </main>
  );
}

export default Home;