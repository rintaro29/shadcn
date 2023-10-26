import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;

//	開発時は最初に一度だけ初期化して以降は`global`から再利用
//それ以外は常に初期化
