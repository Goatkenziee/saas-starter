import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrisma(): PrismaClient {
  // Allow build-time page data collection to pass without DATABASE_URL
  // by returning a mock until the first real query is made.
  if (!process.env.DATABASE_URL) {
    return new Proxy({} as PrismaClient, {
      get(_, prop) {
        if (prop === "then") return undefined;
        return (...args: unknown[]) => {
          throw new Error(
            "DATABASE_URL is not set — configure it in your environment variables to use Prisma queries."
          );
        };
      },
    });
  }
  return new PrismaClient();
}

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
