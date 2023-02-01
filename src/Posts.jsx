import { useState } from "react";
const Posts = () => {
   

    return ( 
        <div id="LastColumn" className="row my-5">
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="row">
                    <div className=" col-xs-4 col-sm-4 col-md-4" >
                        <img className="picture" src="/images/image-retro-pcs.jpg" alt="" />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8  pe-1">
                        <p className="numbers">01</p>
                        <p className="nam e">Reviving Retro PCs</p>
                        <p className="description">What happens when old PCs<br />
                           are given modern upgrades
                        </p>
                    </div>
                </div>
            </div>  
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4" >
                        <img className="picture" src="/images/image-top-laptops.jpg" alt="" />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 ">
                        <p className="numbers">02</p>
                        <p className="name">Top 10 Laptops of 2022</p>
                        <p className="description">Our best picks for various<br />
                           needs and budgets
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 " >
                        <img className="picture" src="/images/image-gaming-growth.jpg" alt="" />
                    </div>
                    <div className="col-xs-8 col-md-8 col-sm-8">
                        <p className="numbers">03</p>
                        <p className="name">The Growth of Gaming</p>
                        <p className="description">The pandemic has sparked<br />
                           fresh opportunities
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Posts;