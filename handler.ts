export async function hello(event: any, context: any, callback: any) {
  // async/await also works out of the box
  await new Promise((resolve, reject) => setTimeout(resolve, 500));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless! Your function executed successfully!",
      input: event,
    }),
  };

  callback(null, response);
}
