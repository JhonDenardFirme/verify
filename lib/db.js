import { PrismaClient } from "@prisma/client";

let prisma;

function initPrisma() {
    if (!prisma) {
        prisma = new PrismaClient();
        if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
    }
    return prisma;
}

export const db = initPrisma();
