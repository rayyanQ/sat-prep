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
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import TestIcon from "../../public/test-icon.svg"
import Image from "next/image"


const Home = () => {
  return (
    <>
      <Header loggedin={false} />
      <HomeBody />
    </>
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
            <a href="#">See all tests</a>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center space-x-10">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>You Have No Active Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You have completed all available tests.</p>
            </CardContent>
          </Card>
          <Card className="aspect-square block shadow-md">
            <CardHeader></CardHeader>
            <CardContent className="w-full flex flex-col justify-center items-center">
              <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
              <p>Full Test #1</p>
            </CardContent>
          </Card>
          <TestCard>
            <h2>test</h2>
            <p>fslfksjl</p>
          </TestCard>
        </div>

      </section>

      <section>

      </section>
    </main>
  );
}

export default Home;