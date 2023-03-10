const Navbar = () => {


    return (  
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img className="logo m-xs-2" src="/images/logo.svg"></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">New</a>
                            <a class="nav-link" href="#">Popular</a>
                            <a class="nav-link" href="#">Trending</a>
                            <a class="nav-link" href="#">Categories</a>
                        </div>
                        </div>
                    </div>
                 </nav>
            </div>
        </div>
    );
}
 
export default Navbar;  