import { logoff } from './action'

export default async function LogoffPage() {

  await logoff();
  return (
    <div className="flex flex-grow w-full">
      <main className="w-full flex flex-col justify-center items-center">
        Logging off...
      </main>
    </div>
  )
}