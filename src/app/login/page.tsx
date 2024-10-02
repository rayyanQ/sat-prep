import { login } from './actions'
import Link from "next/link"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { H2 } from "@/components/ui/heading"

export default function LoginPage() {
  return (
    <div className="flex flex-grow w-full">
      <main className="w-full flex flex-col justify-center items-center">
        <Card className="p-6">
          <CardHeader className="w-full text-center">
            <H2>Log in</H2>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col justify-center items-start space-y-2">
              <span>
                <label htmlFor="email">Email:</label>
                <Input id="email" name="email" type="email" placeholder="Email" className="w-64 max-w-lg" required />
              </span>
              <span>
                <label htmlFor="password">Password:</label>
                <Input id="password" name="password" type="password" placeholder="Password" className="w-64 max-w-lg" required />
              </span>
              {/*<span>
                <label htmlFor="remember">Remember me:</label>
                <Input id="remember" name="remember" type="checkbox" />
              </span>*/}
              <span className="w-full flex flex-col justify-center items-center pt-2 space-y-2">
                <Button formAction={login}>Log in</Button>
                <p>or</p>
                <Link href="/signup">Sign up</Link>
              </span>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}