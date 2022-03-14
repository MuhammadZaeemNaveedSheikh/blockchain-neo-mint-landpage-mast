import React, { useState } from 'react';
import { ethers, Contract } from 'ethers';

import "./customFont.css";
import "./normalize.css";
import "./styles.css";
import abi from "./extra/abi.json"
import TopNavbar from "./TopNavbar";
import TopBlock from "./TopBlock";
import Mint from "./Mint";
import Roadmap from "./Roadmap";
import Whitepaper from './Whitepaper';
import Footer from './Footer';
import Team from './Team';
import Aboutus from './About';


const Address1 = "0xd232d292E8F9D444953a091A5B3a3D1f9bDC0B65"


function App() {

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  const login = async () => {
    try {
      let newProvider = new ethers.providers.Web3Provider(window.ethereum);
      if(newProvider != undefined) {
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let newSigner = await newProvider.getSigner();
        let newContract = await new ethers.Contract( Address1 , abi , newSigner )
        setProvider(newProvider);
        setAccount(newAccount);
        setSigner(newSigner);
        setContract(newContract);
        setConnected(true);

      } else {
        alert("Please Install Metamask.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  
  return (
    <>
      <div className='lg-bg'>
        <div className='top'>
          
          <TopNavbar />

          <TopBlock />

          </div>
      </div>

      <div className='bodyPart'>

        <div className='bg2'>

          <Mint login={ login } connected={ connected } cont={contract} />
          <Roadmap />
          <Aboutus />
          <Team />
          
        </div>

       
        
        <Whitepaper />
        
      </div>

      <Footer />

    </>
  );
}

export default App;
