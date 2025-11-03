export class CustomResponse extends Response {
  constructor(body :BodyInit | null | undefined = null, init:ResponseInit = {}) {
    // Define default headers
    const defaultHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Merge default headers with any headers provided in init
    init.headers = { ...defaultHeaders, ...(init.headers || {}) };

    // Call the parent constructor
    super(body, init);
  }

  // Example custom method
//   jsonBody() {
//     try {
//       return JSON.parse(this.body as any);
//     } catch {
//       return null;
//     }
//   }
}