/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hibxyZ0eivM
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function vercelComponent() {
  return (
    (<header className="flex items-center h-16 px-4 md:px-6 w-full">
      <Link className="flex items-center gap-2" href="#">
        <PackageIcon className="h-6 w-6" />
        <span className="font-semibold">Acme Inc</span>
      </Link>
      <nav className="flex-1 justify-center hidden md:flex">
        <Link className="mx-2 font-medium" href="#">
          Features
        </Link>
        <Link className="mx-2 font-medium" href="#">
          Enterprise
        </Link>
        <Link className="mx-2 font-medium" href="#">
          Support
        </Link>
        <Link className="mx-2 font-medium" href="#">
          Pricing
        </Link>
      </nav>
      <div className="flex items-center gap-4 ml-auto">
        <Link className="inline-flex items-center gap-2 text-sm font-medium" href="#">
          <SearchIcon className="w-4 h-4 opacity-50" />
          Search
        </Link>
        <Button size="sm">Sign in</Button>
      </div>
    </header>)
  );
}


function PackageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}