import { OidcProvider, useOidc, CLIENT_SECRET } from "./oidc";

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
      <pre>
        {`
        curl -X POST \\
          -d "client_id=${clientId}" \\
          -d "client_secret=${CLIENT_SECRET}" \\
          --data-urlencode "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \\
          -d "subject_token=${oidcTokens.accessToken}" \\
          --data-urlencode "requested_token_type=urn:ietf:params:oauth:token-type:refresh_token" \\
          -d "audience=customer-app-client" \\
          -d "requested_subject=testuser2" \\
          ${issuerUri}/protocol/openid-connect/token
        `}
      </pre>
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
