
import '../App.css';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../components/HomeComponents/Banner';
import { Services } from "../components/HomeComponents/Services";
import { Projects } from "../components/Old/Projects";
import { Contact } from "../components/HomeComponents/Contact";
import { Footer } from "../components/Footer";
import { PriceList, PriceList2, PriceList3 } from '../components/HomeComponents/PriceList';
import FloatingCatalogMenuBar from '../components/HomeComponents/floatingCatalogBar';
const HomePage = () => {
    return (
        <>
      <Banner />
      <Services />
      <PriceList />
      <PriceList2/>
      <PriceList3 />
      <Projects />
      <Contact />
      {/* <FloatingCatalogMenuBar/> */}
        </>
    )
}

export default  HomePage;