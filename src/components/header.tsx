import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Header = () => {
  return (
    <header className="flex flex-col justify-start items-center bg-blue-100">

      <div className="container h-14 flex flex-row justify-between items-center">

        <div>SAT Prep</div>
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