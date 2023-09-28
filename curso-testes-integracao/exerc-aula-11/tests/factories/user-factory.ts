import prisma from "database";
import { UserInput } from "repository";

export async function createUser(userData: UserInput) {
    return prisma.user.create({
        data: {
            email: userData.email,
            password: userData.password
        }
    })
}