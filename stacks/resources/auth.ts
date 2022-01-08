import * as sst from '@serverless-stack/resources';

export class AdminsAuth extends sst.Auth {
    constructor(stack: sst.Stack, app: sst.App) {
        const definition: sst.AuthProps = {
            cognito: true
        };
        super(stack, 'admins-auth', definition);
    }
}