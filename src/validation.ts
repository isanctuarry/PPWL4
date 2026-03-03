import { Elysia, t } from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
  .use(openapi())
  .post("/request",
    ({ body }) => {
      return {
        message: "Success",
        data: body
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 3 }),
        email: t.String({ format: "email" }),
        age: t.Number({ minimum: 18 })
      })
    }
  )

app.get(
  "/ping",
  () => {
    return {
      success: true,
      message: "Server OK"
    }
  },
  {
    response: t.Object({
      success: t.Boolean(),
      message: t.String()
    })
  }
)

/*
app.get(
  "/products/:id",
  ({ params, query }) => {
    return {
      productId: params.id,
      sortBy: query.sort
    }
  },
  {
    params: t.Object({
      id: t.Number()
    }),
    query: t.Object({
      sort: t.Union([
        t.Literal("asc"),
        t.Literal("desc")
      ])
    })
  }
)

app.get(
    "/stats",
    () => {
      return {
        total: 100,
        active: 80
      }
    },
    {
      response: t.Object({
        total: t.Number(),
        active: t.Number()
      })
    }
  )

  .get(
    "/admin",
    () => {
      return {
        stats: 99
      }
    },
    {
      beforeHandle({ headers, set }) {
        if (headers.authorization !== "Bearer 123") {
          set.status = 401
          return {
            success: false,
            message: "Unauthorized"
          }
        }
      }
    }
  )

   .get("/product", () => {
    return {
      id: 1,
      name: "Laptop"
    }
  })

  .onAfterHandle(({ response }) => {
    return {
      success: true,
      Message: "data tersedia",
      data: response
    }
  })

.post(
    "/login",
    ({ body }) => {
      return {
        message: "Login success",
        user: body.email
      }
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 8 })
      })
    }
  )

  .onError(({ code, set }) => {

    if (code === "VALIDATION") {
      set.status = 400
      return {
        success: false,
        error: "Validation Error"
      }
    }
  })
    */

  .listen(3000);


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);