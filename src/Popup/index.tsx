import React from "react";

import axios from "axios"

import Link from "../Link";


const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

// const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = "60a4bb04299d4f001010ba79";
const PLAID_SECRET = "bce8cb2e2791d21d85c5282c07277e";
// const PLAID_ENV = "sandbox";
const PLAID_COUNTRY_CODES =  "US"
const PLAID_REDIRECT_URI = "http://localhost:3000";

//  const configuration = new Configuration({
//   // basePath: PlaidEnvironments[PLAID_ENV],
//   baseOptions: {
//     headers: {
//       'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
//       'PLAID-SECRET': PLAID_SECRET,
//       'Plaid-Version': '2020-09-14',
//     },
//   },
// });




interface Props {}

const Popup: React.FC<Props> = (props: Props) => {
  const [token, setToken] = React.useState<string | null>(null);

  

 
// const client = new PlaidApi(configuration);


//   const configs = {
//     user: {
//       // This should correspond to a unique id for the current user.
//       client_user_id: 'user-id',
//     },
//     client_name: 'Kmphitech',
   
//     country_codes: PLAID_COUNTRY_CODES,
//     language: 'en',
//   };

// //   if (PLAID_REDIRECT_URI !== '') {
// //     configs.redirect_uri = PLAID_REDIRECT_URI;
// //   }

  
//   try {
//     const createTokenResponse =  client.linkTokenCreate(configs);
//     JSON.stringify(createTokenResponse);
//     // response.json(createTokenResponse.data);
//   } catch (error) {
//     JSON.stringify(error);
//     // return response.json(formatError(error.response));
//   }

  const generateToken = async () => {

    // const body = new URLSearchParams({
    
      
    // client_name: "goral",
    //   client_id:"60a4bb04299d4f001010ba79",
    //   secret: "bce8cb2e2791d21d85c5282c07277e",
    //   country_codes: `["US"]`,
    //   language: "en",
    //   user:`{client_user_id: "unique_user_id"}`,
    //   products: `["auth"]`
    // });
    // const response = await fetch("https://sandbox.plaid.com/link/token/create", {
    //   method: "POST",
    //   body
    // });
    // const data = await response.json();
    // setToken(data.link_token);


   const formData = new FormData();

    const headers=  {
         "Content-Type": "application/json",
    }
    axios.post("https://sandbox.plaid.com/link/token/create", formData ,
         {headers})
    
  };

  return (
    <>
      <button onClick={generateToken}>
      Link Bank
      </button>
      {token != null && <Link token={token} />}
    </>
  );
};

Popup.displayName = "Popup";

export default Popup;