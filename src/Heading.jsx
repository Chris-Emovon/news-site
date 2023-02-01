const Heading = () => {


    return ( 
        <div className="row">
            <div className="col-md-8">
              <picture>
                <source media="(min-width: 576px)" srcSet="/images/image-web-3-mobile.jpg"></source>
                <source media="(min-width: 900px)" srcSet="/images/image-web-3-desktop.jpg"></source>
                <img className="m-5" id="main" src="/images/image-web-3-desktop.jpg" alt="" />
              </picture>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="web">The Bright<br /> Future of<br /> Web 3.0?</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="description">
                            We dive into the next evolution of the web that<br />
                            claims to put the power of the platforms back<br />
                            into the hands of the people. But is it really<br />
                            fulfilling its purpose?
                        </p>
                        <button><span className="buttonText">Read More</span></button>
                    </div>
                </div>
            </div>
            <div id="Headlines" className="col-md-4 mt-5">              
                    <h1>New</h1>
                    <p className="title">Hydrogen VS Electric Cars</p>
                    <p className="text">Will hydrogen-fueled cars ever catch up<br />
                    to Ev's?</p>
                    
                    <hr />

                    <p className="title">The Downsides of AI Artistry</p>
                    <p className="text">What are the possible adverse effects of<br />
                    on-demand AI image generation?</p>
                    
                    <hr />

                    <p className="title">Is VC Funding Drying Up?</p>
                    <p className="text">private funding by VC firm is down by 50% <br />
                    YOY. We take a look at what that means. </p>
            </div>
        </div>
     );
}
 
export default Heading;