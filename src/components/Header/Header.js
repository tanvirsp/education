import React from 'react';


const Header = () => {
    return (
        <header>
            <div className="header-aria transparent-header pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2  d-flex align-items-center">
                            <div className="logo">
                                <a href='/home'>
                                    <h1>EDUCATION</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                            <div className="header-btn d-none d-lg-block  float-right">
                                <a href="/signin" className="btn btn_4">SIGN IN</a>
                            </div>
                            <div className="main_menu float-right">
                                <nav>
                                    <ul>
                                        <li><a href="/home">home</a></li>
                                        <li><a href="/Pricing">Pricing </a></li>
                                        <li><a href="/contact">contact</a></li>   
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;