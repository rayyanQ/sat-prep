import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * TODO
 * - check if user is logged in or not
 *    and accordingly show the right side of the header
 */
const Header = ({ loggedin=false } : { loggedin?: boolean }) => {
  return (
    <header className="flex flex-col justify-start items-center border-b">

      <div className="container h-14 flex flex-row justify-between items-center">

        <div className="flex flex-row items-center space-x-10">
          <span className="font-bold">SAT Prep</span>
          <nav className="flex flex-row items-center space-x-4">
            <Link href="/">Home</Link>
            <Link href="/tests">Tests</Link>
            <Link href="/questions">Questions</Link>
          </nav>
        </div>

        <div className="flex flex-row items-center space-x-4">
          {
            loggedin ?
            <>
              <p>Rayyan Quraishi</p>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </> :
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          }
        </div>

      </div>

    </header>
  );
}

export default Header;