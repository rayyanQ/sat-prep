import { Question, columns } from "@/components/QuestionTable/columns"
import { DataTable } from "@/components/QuestionTable/data-table"
import { H2 } from "@/components/ui/heading"


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
    <main className="w-full flex flex-col justify-center items-start">
      <QuestionSection />
    </main>
  );
}

const QuestionSection = () => {
  return (
    <section className="container py-6">
      <div className="flex flex-row justify-start items-center pb-2">
        <H2>Question Bank</H2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <DataTable columns={columns} data={questions} />
      </div>
    </section>
  );
}

export default Home;