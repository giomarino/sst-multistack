import * as sst from "@serverless-stack/resources";
import CoreStack from "./core";
import ApiStack from "./api";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const core_stack = new CoreStack(app, 'core-stack');
  
  new ApiStack(app, 'api-stack', {
    auth: core_stack.auth,
    table: core_stack.table,
  })
}
