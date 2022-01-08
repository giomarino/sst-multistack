import * as sst from "@serverless-stack/resources";

interface ApiStackProps extends sst.StackProps  {
  readonly auth: sst.Auth;
  readonly table: sst.Table;
}

export default class ApiStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: ApiStackProps) {
    super(scope, id, props);

    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": {
          handler: "src/lambda.handler",
          environment: {
            TABLE_NAME: props?.table.tableName as string
          }
        }
      }
    });

    props?.auth.attachPermissionsForAuthUsers([api])
  }
}
