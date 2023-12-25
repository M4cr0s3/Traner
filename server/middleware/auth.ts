import jwt from "jsonwebtoken";
import { useAuthorizedRoutes } from "~/utils/useAuthorizedRoutes";

export default defineEventHandler(async (event) => {
  const { JWT_SECRET } = useRuntimeConfig();

  const routes = useAuthorizedRoutes();

  routes.forEach((URL) => {
    if (event.node.req.url === URL) {
      try {
        const token = getHeader(event, "Authorization");
        if (token) {
          const user = jwt.verify(token, JWT_SECRET);
          event.context.user = user;
        } else {
          sendError(
            event,
            createError({ statusCode: 401, statusMessage: "Unauthorized." })
          );
        }
      } catch (e) {
        console.error("Ошибка:", e);
        if (e instanceof jwt.TokenExpiredError) {
          sendError(
            event,
            createError({ statusCode: 401, statusMessage: e.message })
          );
        }
      }
    }
  });
});
