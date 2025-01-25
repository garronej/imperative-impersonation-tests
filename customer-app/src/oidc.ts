import { createReactOidc } from "oidc-spa/react";

export const { OidcProvider, useOidc } = createReactOidc({
  issuerUri: "http://localhost:8080/realms/myrealm",
  clientId: "customer-app-client",
  BASE_URL: import.meta.env.BASE_URL,
  isAuthGloballyRequired: true,
  doEnableDebugLogs: true,
});
