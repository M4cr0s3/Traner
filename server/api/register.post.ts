import { defineEventHandler, readBody } from "h3";
import { useRegister } from "~/utils/useRegister";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { successfulResponse, errorResponse } = await useRegister(body);

  if (errorResponse) {
    return errorResponse
  } else {
    return successfulResponse
  }
});
