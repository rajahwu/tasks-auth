declare namespace Express {
  interface Request {
      csrfToken?: () => string;
  }

  interface Response {
      cookie(name: string, value: string): Response;
      status(code: number): Response;
      json(data: any): Response;
  }
}
