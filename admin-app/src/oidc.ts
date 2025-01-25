import { createReactOidc } from "oidc-spa/react";

export const { OidcProvider, useOidc } = createReactOidc({
  issuerUri: import.meta.env.VITE_OIDC_ISSUER_URI,
  clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
  BASE_URL: import.meta.env.VITE_BASE_URL,
  isAuthGloballyRequired: true,
  doEnableDebugLogs: true,
  __clientSecret_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: import.meta.env
    .VITE_OIDC_CLIENT_SECRET,
});
