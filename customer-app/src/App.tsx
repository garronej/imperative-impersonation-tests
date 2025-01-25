import { OidcProvider, useOidc } from "./oidc";

export function App() {
  return (
    <OidcProvider>
      <ContextualizedApp />
    </OidcProvider>
  );
}

export function ContextualizedApp() {
  const { logout, oidcTokens } = useOidc();

  return (
    <>
      <pre>{JSON.stringify(oidcTokens.decodedIdToken, null, 2)} </pre>
      <button
        onClick={() =>
          logout({
            redirectTo: "home",
          })
        }
      >
        Logout
      </button>
    </>
  );
}
