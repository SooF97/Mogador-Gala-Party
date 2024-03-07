/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KfP9o0cl4XD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="flex flex-col items-center justify-center py-32  h-screen-min">
      <div className="container p-8 px-4 md:px-6">
        <div className="flex flex-col items-center p-8 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-950  md:text-7xl">
              Mogador Platform for Event Tickets 
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-900 md:text-xl ">
              The platform for modern design workflows. Create the best user experiences. Collaborate seamlessly. Ship
              faster.
            </p>
          </div>
          <div className="space-x-4 flex flex-col md:flex-row items-center">
            <Link
              className="inline-flex w-full md:w-auto h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/buy"
            >
              Buy Ticket
            </Link>
          </div>
          <p className="m-2 text-sm ">Powered by <Link href="https://oklever.com" target="_blank"><span className="underline italic">Oklever</span></Link> </p>
        </div>
      </div>
    </section>
  )
}

