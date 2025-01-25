import { createReactOidc } from "oidc-spa/react";

export const CLIENT_SECRET = "iWpOM9EqOcuALXqlGC47f4qGmsnTP3AX";

export const { OidcProvider, useOidc } = createReactOidc({
  issuerUri: "http://localhost:8080/realms/myrealm",
  clientId: "admin-app-client",
  __clientSecret_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: CLIENT_SECRET,
  BASE_URL: import.meta.env.VITE_BASE_URL,
  isAuthGloballyRequired: true,
  doEnableDebugLogs: true,
});
