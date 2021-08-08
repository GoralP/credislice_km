// import React, { useEffect, useContext, useCallback } from "react";
// import { usePlaidLink } from "react-plaid-link";
// import Button from "plaid-threads/Button";

// import Context from "../Context";

// const Link = () => {


//   const { linkToken, dispatch } = useContext(Context);



//  const getInfo = useCallback(async () => {
//     const response = await fetch("/api/info", { method: "POST" });
//     if (!response.ok) {
//       dispatch({ type: "SET_STATE", state: { backend: false } });
//       return { paymentInitiation: false };
//     }
//     const data = await response.json();
//     const paymentInitiation: boolean = data.products.includes(
//       "payment_initiation"
//     );
//     dispatch({
//       type: "SET_STATE",
//       state: {
//         products: data.products,
//       },
//     });
//     return { paymentInitiation };
//   }, [dispatch]);

//   const generateToken = useCallback(
//     async (paymentInitiation) => {
//       const path = paymentInitiation
//         ? "/api/create_link_token_for_payment"
//         : "/api/create_link_token";
//       const response = await fetch(path, {
//         method: "POST",
//       });
//       if (!response.ok) {
//         dispatch({ type: "SET_STATE", state: { linkToken: null } });
//         return;
//       }
//       const data = await response.json();
//       if (data) {
//         if (data.error != null) {
//           dispatch({
//             type: "SET_STATE",
//             state: {
//               linkToken: null,
//               linkTokenError: data.error,
//             },
//           });
//           return;
//         }
//         dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } });
//       }
//       localStorage.setItem("link_token", data.link_token); //to use later for Oauth
//     },
//     [dispatch]
//   );

//   useEffect(() => {
//     const init = async () => {
//       const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
//       // do not generate a new token for OAuth redirect; instead
//       // setLinkToken from localStorage
//       if (window.location.href.includes("?oauth_state_id=")) {
//         dispatch({
//           type: "SET_STATE",
//           state: {
//             linkToken: localStorage.getItem("link_token"),
//           },
//         });
//         return;
//       }
//       generateToken(paymentInitiation);
//     };
//     init();
//   }, [dispatch, generateToken, getInfo]);



//   const onSuccess = React.useCallback(
//     (public_token: string) => {
//       // send public_token to server
//       const setToken = async () => {
//         const response = await fetch("/api/set_access_token", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//           },
//           body: `public_token=${public_token}`,
//         });
       
//         if (!response.ok) {
//           dispatch({
//             type: "SET_STATE",
//             state: {
//               itemId: `no item_id retrieved`,
//               accessToken: `no access_token retrieved`,
//               isItemAccess: false,
//             },
//           });
//           return;
//         }
//         const data = await response.json();
//         dispatch({
//           type: "SET_STATE",
//           state: {
//             itemId: data.item_id,
//             accessToken: data.access_token,
//             isItemAccess: true,
//           },
//         });
//       };
//       setToken();
//       dispatch({ type: "SET_STATE", state: { linkSuccess: true } });
//       window.history.pushState("", "", "/");
//     },
//     [dispatch]
     
//   );
 

//   let isOauth = false;
//   const config: Parameters<typeof usePlaidLink>[0] = {
//     token: linkToken!,
//     onSuccess,
//   };

//   if (window.location.href.includes("?oauth_state_id=")) {
//     // TODO: figure out how to delete this ts-ignore
//     // @ts-ignore
//     config.receivedRedirectUri = window.location.href;
//     isOauth = true;
//   }

//   const { open, ready } = usePlaidLink(config);

//   useEffect(() => {
//     if (isOauth && ready) {
//       open();
//     }
//   }, [ready, open, isOauth]);






 
//   return (
//     <Button type="button" large onClick={() => open()} disabled={!ready}>
//       Launch Link
//     </Button>
//   );
// };

// Link.displayName = "Link";

// export default Link;




import React from "react";
import { usePlaidLink } from "react-plaid-link";

interface Props {
  token: string;
}

const Link: React.FC<Props> = (props: Props) => {
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    console.log("public_token", public_token);
  }, []);


  

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.token,
    onSuccess,
    clientName: "hello world",
    env: "sandbox",
    product: ["auth"]
  };

  const { open, ready, error } = usePlaidLink(config);

  React.useEffect(() => {
    if (!ready) {
      return;
    }
    open();
  }, [ready, open]);

  return <></>;
};

Link.displayName = "Link";

export default Link;

