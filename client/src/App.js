import React, { useEffect } from "react";
import {useState} from 'react';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Navbar from './components/Navbar';
import AppContext from './components/AppContext';

import "./App.css";


const App = () => {

    const [globalStates, setGlobalStates] = useState(
        {
            web3: null,
            account: null,
            signUp: false,
            instance: null
        }
    );
    console.log(globalStates);

    // useEffect(() => {
    //     const data = localStorage.getItem('states');
    //     if(data) {
    //         setGlobalStates(JSON.parse(data));
    //     }
    // }, []);

    // useEffect(() => {
    //     const data = JSON.stringify(globalStates);
    //     localStorage.setItem('states', data);
    // });

    const accountSignUp = async () => {
        console.log('calling signup')
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
       <AppContext.Provider value={globalStates}>
            <div className="App">
                <Navbar signUp={accountSignUp} />
            </div>
        </AppContext.Provider>
    );
}

export default App;
