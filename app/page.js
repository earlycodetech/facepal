import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-around bg">
        <Image src="/imgs/bg-mobile.jpg" width={60} height={60} className="h-screen w-full sm:hidden" alt="cover image" />
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-8 sm:px-10 lg:px-24">
          <div className="w-full sm:min-h-[480px] bg-indigo-300/20 py-6 sm:py-10 px-[40px] rounded-lg">
            <h1 className="text-indigo-800 text-4xl sm:text-6xl font-mono font-bold">facepal</h1>
            <h2 className="text-2xl sm:text-3xl mt-4">The Coolest way to connect with friends and hold money</h2>
          </div>
          <div className="w-full sm:min-h-[480px] flex flex-col gap-5">
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
              />
              <input
                type="password"
                placeholder="Password"
                className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
              />
              <button className="max-w-[160px] h-12 bg-indigo-800 rounded-lg text-white font-bold">Log in to facepal</button>
            </form>

            <div className="w-full grid grid-cols-2 gap-3">
              <button className="w-full h-12 bg-green-600 rounded-lg text-white font-bold">Google</button>
              <button className="w-full h-12 bg-sky-600 rounded-lg text-white font-bold">Twitter</button>
            </div>

            <p className="text-2xl text-white">New to facepal? <Link href="#" className="underline">create account</Link></p>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </>
      )
}
