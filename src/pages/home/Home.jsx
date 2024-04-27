import MailList from '../../components/MailList/MailList'
import Feautured from '../../components/feautured/Feautured'
import FeauturedProp from '../../components/feauturedProp/FeauturedProp'
import Footer from '../../components/footer/Footer'

import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feautured />
        <h1 className="homeTitle">Browse By properties</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeauturedProp />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
