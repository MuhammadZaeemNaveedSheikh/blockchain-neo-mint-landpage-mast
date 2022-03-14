import React from "react";
import logo from './NFT Images/name.png';
export default () => {

    return(

        <div className='top-nav' style={{background:'rgba(0,0,0,0.5)'}} >
            <nav className='navbar navbar-expand-lg navbar-dark row container'>
              <a className="navbar-brand col-lg-2" href='' >Neo-Anunnaki</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse col-lg-8" id="navbarTogglerDemo02">

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#mint" style={{fontWeight:'bolder',letterSpacing:'2px'}}>Mint</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team" style={{fontWeight:'bolder',letterSpacing:'2px'}}>Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#roadmap" style={{fontWeight:'bolder',letterSpacing:'2px'}}>Roadmap</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whitepaper" style={{fontWeight:'bolder',letterSpacing:'2px'}}>WhitePaper</a>
                  </li>
                </ul>

              </div>

              <div className='col-lg-2'></div>

            </nav>
            
        </div>
        

    );

}