import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { z } from "zod";
import { useHashWithSalt } from "./useHash";
import { prisma } from "./Prisma";
import { loginSchema } from "~/schemas/userSchema";
import type { H3Event, EventHandlerRequest } from "h3";
import { useTokens } from "./useTokens";
import type { User } from "@prisma/client";

export const useLogin = async (
  email: string,
  password: string,
  event: H3Event<EventHandlerRequest>
) => {
  const { JWT_SECRET, APP_URL } = useRuntimeConfig();

  let successfulResponse = {};
  let errorResponse: Array<any> | string = [];

  try {
    const data = await loginSchema.safeParseAsync({
      email,
      password,
    });

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const isEquals = useHashWithSalt(password, user.salt, user.password);
      if (isEquals) {
        const tokenPayload = { id: user.id, email: user.email };
        const { accessToken, refreshToken } = useTokens(
          tokenPayload,
          JWT_SECRET,
          {
            expiresIn: "1m",
            subject: user.email,
            issuer: APP_URL + event.path,
          },
          {
            expiresIn: "14d",
            subject: user.email,
            issuer: APP_URL + event.path,
          }
        );
        successfulResponse = {
          accessToken,
          refreshToken,
        };
      } else {
        throw new PrismaClientValidationError("Неправильный пароль.", {
          clientVersion: "5.7.1",
        });
      }
    }
  } catch (e) {
    if (e instanceof z.ZodError) {
      errorResponse = e.issues;
    } else if (e instanceof PrismaClientValidationError) {
      errorResponse = e.message;
    }
  }

  return { successfulResponse, errorResponse };
};
