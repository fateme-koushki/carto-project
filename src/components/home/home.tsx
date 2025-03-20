import React from 'react'
import Header from './header/header'
import Categories from './categories/categories'
import SpecialOffers from './specialOffers/SpecialOffers'
import PopularProducts from './popularProducts/popularProduct'
import PromoBanner from './promoBanner/promoBanner'
import NewProdcuts from './newProducts/newProdcuts'
import BenefitsSection from './benefitsSection/benefitsSection'
import FlashSaleBanner from './flashSaleBanner/FlashsaleBanner'
import Footer from '../footer/footer'


export default function HomePage() {
  return (
    <div className=''>
        <Header />
        <Categories />
        <SpecialOffers />
        <PopularProducts />
        <PromoBanner />
        <NewProdcuts />
        <BenefitsSection />
        <FlashSaleBanner />
        <Footer />
        
        
        
        
    </div>
  )
}


