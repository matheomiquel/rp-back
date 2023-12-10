export type RequestType<Body> = {
  body: Body
  query: {
      [key: string]: unknown
  },
  params: {
      [key: string]: unknown
  },
  token: string | undefined
}

export type ResponseType<statusCode, Obj> = Promise<
  { status: statusCode; data: statusCode extends 204 ? undefined : Obj }
>;

export type FunctionType =
    (req: RequestType<object | undefined>) => ResponseType<number, object | undefined>
