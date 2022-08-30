import React from 'react';
import TopBar from './TopBar';
import ProductDetailFetch from './ProductDetailFetch';
import Product from './Product';
// import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Product />
                    {/* <UserComp /> */}
                    {/* <ProductRankingFetch /> */}
                    {/* <Product /> */}
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;