import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'

class AppRoute extends Component {
     render() {
          return (
            <Fragment> 
                <div className="Desktop">
                    <NavMenuDesktop />
                    <HomeTop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />  
                    <HomeTopMobile />
                </div>

                <FeaturedProducts />
                <NewArrival />
                <Categories />
                <Collection />
                <FooterDesktop/>
            </Fragment>
          )
     }
}

export default AppRoute