import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: { subscription: true },
  });

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Welcome back, {user?.firstName || "User"}!
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Plan</h3>
            <p className="text-2xl font-bold">
              {dbUser?.subscription?.plan || "FREE"}
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Status</h3>
            <p className="text-2xl font-bold">
              {dbUser?.subscription?.status || "No subscription"}
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Account</h3>
            <p className="text-sm text-muted-foreground">
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
