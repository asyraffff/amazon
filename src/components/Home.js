import React from 'react'
import '../styles/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="banner"
            />

            {/* Product => id, title, price, rating, image  (PROPS!!!) */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="Apple iPad Pro (11-inch, Wi-Fi + Cellular, 128GB) - Silver (2nd Generation)"
                    price={944.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81tJ+tdylfL._AC_UY218_.jpg"
                />
                <Product
                    id="678910"
                    title="Apple 16 MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 32GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019"
                    price={2949.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61jR7GTw0JL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="13579"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={15.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
                <Product
                    id="24680"
                    title="Echo Dot (3rd Gen) Heather Gray with Echo Auto"
                    price={78.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61jDqpIm3bL._AC_UY218_.jpg"
                />
                <Product
                    id="51345"
                    title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band "
                    price={359.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71mbZF8PT1L._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="713534"
                    title="LG 38GL950G-B 38 inch Ultragear Nano IPS 1ms Curved Gaming Monitor with 144HZ Refresh Rate and NVIDIA G-SYNC, Black"
                    price={1, 676.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81URP-h6aPL._AC_UY218_.jpg"
                />
            </div>
            {/*  */}
        </div>
    );
}

// other banner image 
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg

export default Home
