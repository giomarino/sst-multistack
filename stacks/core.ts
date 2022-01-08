import * as sst from "@serverless-stack/resources";

export default class CoreStack extends sst.Stack {
  readonly auth: sst.Auth;
  readonly table: sst.Table;

  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    this.table = new sst.Table(this, 'table', {
      fields: {
        PK: sst.TableFieldType.STRING,
        SK: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: 'PK', sortKey: 'SK' },
    })

    this.auth = new sst.Auth(this, 'auth', {
      cognito: true
    });
  }
}
