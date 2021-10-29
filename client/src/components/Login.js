import { Button } from '@material-ui/core'
import React, {useEffect} from 'react'
import {useState} from 'react';
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";

export default function Login() {
    const [globalStates, setGlobalStates] = useState({
        web3: null,
        accounts: null,
        signUp: false,
        instance: null
    })
    
    

    // Avoid Circular Reference
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
      
      

      const accountSignUp = async () => {
        console.log('Calling signup')
        try {
            // Get network provider and web3 instance.
            
            const web3 = await getWeb3();
    
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();
    
            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = SimpleStorageContract.networks[networkId];
            const instance = new web3.eth.Contract(
                SimpleStorageContract.abi,
                deployedNetwork && deployedNetwork.address,
            );
    
            
            // Set web3, accounts, signup to the global state.
            setGlobalStates({web3, accounts, signUp: true, instance});
            
    
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    }

    return (
        <>
          <Button color='inherit' onClick={accountSignUp}>Sign In</Button>  
        </>
    )
}
