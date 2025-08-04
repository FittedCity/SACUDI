import About from "../../components/home/About"
import Banner from "../../components/home/Banner"
import Flows from "../../components/home/Flows"
import Investors from "../../components/home/Investors"
import MissionAndVission from "../../components/home/MissionAndVission"
import Testimonials from "../../components/home/Testimonials"

const Home = () => {
  return (
    <div>
        <Banner />
        <About />
        <MissionAndVission />
        <Investors />
        <Flows />
        <Testimonials />
    </div>
  )
}

export default Home