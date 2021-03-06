// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { deleteTodo } from "../../common/dynamodb";
// import schema from "@functions/deleteTodo/schema";
import { Handler } from "aws-lambda";

export const deleteTodoH: Handler = async (event) => {
  const { id } = event.body;

  const response = deleteTodo(id);

  return formatJSONResponse({
    msg: "Data Deleted",
    body: response,
  });
};
export const main = middyfy(deleteTodoH);
