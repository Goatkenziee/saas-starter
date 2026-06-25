import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold tracking-tight">SaaS Starter</h1>
        <div className="flex gap-4">
          <Link
            href="/sign-in"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-md border border-input px-4 py-2 text-sm font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Build your SaaS faster.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
          Authentication, payments, database, and a polished dashboard —
          everything you need to launch your next product.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
