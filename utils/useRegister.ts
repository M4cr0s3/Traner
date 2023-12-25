import {
    createUserInput,
    createUserSchema, registerResponseSchema,
    type User,
} from "~/schemas/userSchema";
import {prisma} from "./Prisma";
import {useHash} from "./useHash";
import {z} from "zod";
import type {ZodIssue} from "zod";

type ErrorResponse = {
    message: string;
};


export const useRegister = async (body: User) => {
    let errorResponse: ErrorResponse | ZodIssue[] | undefined | z.SafeParseError<any>;
    let successfulResponse = {};

    try {
        const userInput = await createUserInput.safeParseAsync(body);
        const user = await prisma.user.findUnique({where: {email: body.email}});
        if (user) {
            errorResponse = {
                message: "Пользователь с таким email уже существует.",
            };
        } else {
            if (userInput.success) {
                const {password, ...rest} = body;
                const {salt, hash} = useHash(password);
                const data = await createUserSchema.safeParseAsync({
                    ...rest,
                    password: hash,
                    salt,
                });
                const userData = {
                    ...rest,
                    password: hash,
                    salt,
                };
                const user = await prisma.user.create({
                    data: userData,
                });
                successfulResponse = await registerResponseSchema.safeParseAsync(user)
            } else {
                errorResponse = userInput;
            }
        }
    } catch (e) {
        if (e instanceof z.ZodError) {
            errorResponse = e.issues;
        }
    }

    return {errorResponse, successfulResponse};
}


