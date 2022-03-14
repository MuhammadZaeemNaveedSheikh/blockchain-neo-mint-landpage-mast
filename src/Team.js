import React from "react";

import nft1 from "./NFT Images/6.png";
import nft2 from "./NFT Images/7.png";
import nft3 from "./NFT Images/8.png";
import nft4 from "./NFT Images/9.png";
import nft5 from "./NFT Images/10.png";
import nft6 from "./NFT Images/11.png";
import nft7 from "./NFT Images/12.gif";
import nft8 from "./NFT Images/13.gif";

export default () => {

    return(

        <>
        
            <div className="team-block" id="team">

                <h2>Team</h2>

                <div className="row container clearfix">
                    
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft1} alt="" title="" />
                            <div className="lower-box">
                                <h3>MrBlueChips</h3>
                                <p>Founder, Creator, Project Leader, Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft2} alt="" title="" />
                            <div className="lower-box">
                                <h3>Enoch Scribe Of The Metatron</h3>
                                <p>Project Manager, Community manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft3} alt="" title="" />
                            <div className="lower-box">
                                <h3>Blkwolfgang </h3>
                                <p>Marketing/Project Strategist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft4} alt="" title="" />
                            <div className="lower-box">
                                <h3>Krakonn </h3>
                                <p>Pixel Artist</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft5} alt="" title="" />
                            <div className="lower-box">
                                <h3>Max Parata </h3>
                                <p>VX/3D artist, Game Dev</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft6} alt="" title="" />
                            <div className="lower-box">
                                <h3>Rosharn Howell</h3>
                                <p>3D Artist, Game Dev</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft7} alt="" title="" />
                            <div className="lower-box">
                                <h3>Bilquees</h3>
                                <p>Sodivdity Dev</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft8} alt="" title="" />
                            <div className="lower-box">
                                <h3>Crypto Fail</h3>
                                <p>Community Manager</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        
        </>

    );

}