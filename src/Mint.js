import React from "react";
import { ethers } from 'ethers';
import nfts from "./NFT Images/2.gif";
import wallets from "./extra/wallets.json";
const password = "123456";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ login, connected, cont }) => {

    const name = async () => { 
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(newAccount);
        try { 
            console.log(wallets);
            const whiteListed = wallets.filter(checkAdult);
            function checkAdult(wallets) {
              return wallets.toLowerCase() === newAccount[0].toLowerCase();
            }

            if(whiteListed.length > 0){
                const options = {value: ethers.utils.parseEther("0.01")}
                const tx = await cont.WHITELIST_MINT(1, password, options)
                .then(res => { 
                    // use the returned value here
                    setTimeout(() => {
                        alert("Minted successfully")
                        console.log(res); 

                    }, 15000);
                }) 
            } else {
                alert("Caller is not whitelisted");
            }

        }
        catch (error) { 
            alert("Having some error")
            console.log(error);
         } 
    }
    

    
    return(
        <>
            <div className="mint-block" id="mint">
                <h2>Mint</h2>
                <div className="nft-box container">
                    <div className="nft-image">
                        <div className="img-nft">
                            <img src={nfts} />

                            {/* <div className="nft-number">
                                <p>Alpha-Genesis #0</p>
                            </div> */}
                        </div>
                        <div className="nft-buy">
                            <div className="nft-cost">
                                {/* <p>Price</p>
                                <p>Presale 0.1</p>
                                <p>Public Sale 0.15</p> s*/}
                            </div>
                            {connected ? (
                                <button className="btn btn-mint" onClick={() => name()}>Mint NFT</button>
                            ) : (
                                <button className="btn btn-mint" onClick={() => login()}>Connect Wallet</button>
                            )}
                        </div>
                    </div>

                    <div className="nft-info">
                        {connected ? (
                            <button className="btn btn-primary btn-connect">Connected</button>
                        ) : (
                            <button className="btn btn-primary btn-connect" onClick={() => login()}>Connect Wallet</button>
                        )}                      
                        <div className="nft-info-text">
                            <h3>Alpha-Genesis</h3>
           
                        </div>
                    </div>

                    
                </div>

            </div>
        
        </>

    );

}