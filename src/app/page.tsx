import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import { Question, columns } from "@/components/TestTable/columns"
import { DataTable } from "@/components/TestTable/data-table"
import { H2 } from "@/components/ui/heading"
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
 
const questions: Question[] = [
  {
    uid: "al56d",
    id: 1,
    title: "Algebra word problem",
    section: "Math",
    domain: "Algebra",
    topic: "Linear equation in 1 variable",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al9sx",
    id: 2,
    title: "Algebra word problem 2",
    section: "Math",
    domain: "Algebra",
    topic: "Linear functions",
    difficulty: "Easy",
    status: "Complete",
  },
  {
    uid: "al56d",
    id: 3,
    title: "Purpose of underlined text",
    section: "English",
    domain: "Craft and Structure",
    topic: "-",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al56d",
    id: 4,
    title: "Algebra word problem",
    section: "Math",
    domain: "Algebra",
    topic: "Linear equation in 1 variable",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al9sx",
    id: 5,
    title: "Algebra word problem 2",
    section: "Math",
    domain: "Algebra",
    topic: "Linear functions",
    difficulty: "Easy",
    status: "Complete",
  },
  {
    uid: "al56d",
    id: 6,
    title: "Purpose of underlined text",
    section: "English",
    domain: "Craft and Structure",
    topic: "-",
    difficulty: "Easy",
    status: "Incomplete",
  },
]

// Main Home page component
const Home = () => {
  return (
    <>
      <Header loggedin={false} />
      <main className="w-full flex flex-col justify-center items-start">
        <TestSection />
        <QuestionSection />
      </main>
    </>
  );
}

const TestSection = () => {
  return (
    <section className="container py-6">
        <div className="flex flex-row justify-between items-center pb-2">
          <div>
            <H2>Recommended Tests</H2>
          </div>
          <div>
            <a href="#">See all tests</a>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center space-x-10">
          {
            TEST_DATA.map((test, index) => 
              <TestCard key={test.name + index}>
                <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
                <h2>{test.name}</h2>
              </TestCard>
            )
          }
        </div>
      </section>
  );
}

const QuestionSection = () => {
  return (
    <section className="container py-6">
      <div className="flex flex-row justify-between items-center pb-2">
        <div>
          <H2>Questions</H2>
          <Tabs></Tabs>
        </div>
        <div>
          <a href="#" className="border-b border-neutral-950">See all questions</a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <DataTable columns={columns} data={questions} />
      </div>
    </section>
  );
}

export default Home;