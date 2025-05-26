import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// 既存のインスタンスがあれば再利用、なければ新規作成
export const prisma = globalForPrisma.prisma || new PrismaClient();

// 開発環境ではグローバルにインスタンスを保持
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
