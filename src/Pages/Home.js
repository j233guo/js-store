import Header from '../Components/Header'
import NavigationBar from '../Components/NavigationBar'
import PromotionalSection from '../Components/PromotionalSection'
import Footer from '../Components/Footer'
import ProductCategory from '../Components/ProductCategory'
import BestSellers from '../Components/BestSellers'
import BackToTop from '../Components/BackToTop'

const Home = () => {

    return (
        <>
            <Header/>
            <NavigationBar/>
            <PromotionalSection/>
            <ProductCategory/>
            <BestSellers/>
            <BackToTop/>
            <Footer/>
        </>
    )
}

export default Home
