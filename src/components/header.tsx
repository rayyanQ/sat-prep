import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * TODO
 * - check if user is logged in or not
 *    and accordingly show the right side of the header
 */
const Header = () => {
  return (
    <header className="flex flex-col justify-start items-center bg-neutral-100">

      <div className="container h-14 flex flex-row justify-between items-center">

        <div className="flex flex-row items-center space-x-10">
          <span className="font-bold">SAT Prep</span>
          <nav className="flex flex-row items-center space-x-4">
            <a href="#">Home</a>
            <a href="#">Tests</a>
            <a href="#">Questions</a>
          </nav>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <p>Rayyan Quraishi</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

      </div>

    </header>
  );
}

export default Header;