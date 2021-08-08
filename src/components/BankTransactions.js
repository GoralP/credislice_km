import React, { Component } from "react";
import PlaidLink from "react-plaid-link";

class BankDetails extends Component {
  handleOnSuccess(token, metadata) {
    console.log("onSuccess", token, metadata);
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }
  render() {
    return (
      <PlaidLink
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        // publicKey="link-sandbox-038fa7a0-9535-4a44-832b-a73064aa764a"
        token="link-sandbox-038fa7a0-9535-4a44-832b-a73064aa764a"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}
      >
        Open Link and connect your bank!
      </PlaidLink>
    );
  }
}
export default BankDetails;

// import React, { useEffect, useState,  } from 'react';
// import { usePlaidLink } from 'react-plaid-link';
// const BankDetails = () => {
//   const [linkToken, setLinkToken] = useState(null);
//   const generateToken = async () => {
//     const response = await fetch('/api/create_link_token', {
//       method: 'POST',
//     });
//     const data = await response.json();
//     setLinkToken(data.link_token);
//   };
//   useEffect(() => {
//     generateToken();
//   }, []);
//   return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
// };
// // LINK COMPONENT
// // Use Plaid Link and pass link token and onSuccess function
// // in configuration to initialize Plaid Link
// interface LinkProps {
//   linkToken: string | null;
// }
// const Link: React.FC<LinkProps> = (props: LinkProps) => {
//   const onSuccess = React.useCallback((public_token, metadata) => {
//     // send public_token to server
//     const response = fetch('/api/set_access_token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ public_token }),
//     });
//     // Handle response ...
//   }, []);
//   const config: Parameters<typeof usePlaidLink>[0] = {
//     token: props.linkToken!,
//     onSuccess,
//   };
//   const { open, ready } = usePlaidLink(config);
//   return (
//     <button onClick={() => open()} disabled={!ready}>
//       Link account
//     </button>
//   );
// };
// export default BankDetails;
