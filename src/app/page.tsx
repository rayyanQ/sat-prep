import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import TestIcon from "../../public/test-icon.svg"
import Image from "next/image"


// Temp Data
const TEST_DATA = [
  {
    name: "Mini-test 1",
  },
  {
    name: "Mini-test 2",
  },
  {
    name: "Full-test 1",
  },
];


// Main Home page component
const Home = () => {
  return (
    <>
      <Header loggedin={false} />
      <main className="w-full flex flex-col justify-center items-start">
        <TestSection data={TEST_DATA} />
        <QuestionSection />
      </main>
    </>
  );
}

const TestSection = ({data}: {}) => {
  return (
    <section className="container py-6">
        <div className="flex flex-row justify-between items-center pb-2">
          <div>
            <h3 className="text-2xl font-bold">Recommended Tests</h3>
          </div>
          <div>
            <a href="#">See all tests</a>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center space-x-10">
          <TestCard>
            <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
            <h2>Mini-test 1</h2>
          </TestCard>
          <TestCard>
            <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
            <h2>test</h2>
            <p>fslfksjl</p>
          </TestCard>
          <TestCard>
            <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
            <h2>test</h2>
            <p>fslfksjl</p>
          </TestCard>
        </div>
      </section>
  );
}

const QuestionSection = () => {
  return (
    <section className="container py-6">
      <div className="flex flex-row justify-between items-center pb-2">
        <div>
          <h3 className="text-2xl font-bold">Questions</h3>
          <Tabs></Tabs>
        </div>
        <div>
          <a href="#">See all tests</a>
        </div>
      </div>
    </section>
  );
}

export default Home;