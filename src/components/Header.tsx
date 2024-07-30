import { createClient } from '@/lib/supabase/server'

import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * TODO
 * - check if user is logged in or not
 *    and accordingly show the right side of the header
 */
async function Header() {

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  let loggedin = error || !data?.user ? false : true;

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
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-1" align="end">
                  <Link href="/profile"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                  <Link href="/settings"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                  <Link href="/logoff"><DropdownMenuItem>Log off</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>
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
