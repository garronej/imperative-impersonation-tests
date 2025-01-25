import { OidcProvider, useOidc } from "./oidc";

export function App() {
  return (
    <OidcProvider>
      <ContextualizedApp />
    </OidcProvider>
  );
}

export function ContextualizedApp() {
  const {
    logout,
    oidcTokens,
    params: { clientId, issuerUri },
  } = useOidc();

  return (
    <>
    </>
  );
}
