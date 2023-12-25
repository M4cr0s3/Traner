import { useLogin } from "~/utils/useLogin";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  const { successfulResponse, errorResponse } = await useLogin(email, password, event);

  if (errorResponse.length > 0) {
    return errorResponse;
  } else {
    return successfulResponse;
  }
});
