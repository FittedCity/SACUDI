import Investors from "../../components/home/Investors";
import Banner from "../../components/invest/Banner";
import Faqs from "../../components/invest/Faqs";
import Newsletter from "../../components/invest/Newsletter";
import Projects from "../../components/invest/Projects";

const Invest = () => {
  return (
    <div>
      <Banner />
      <Investors />
      <Projects />
      <Faqs />
      <Newsletter />
    </div>
  );
};

export default Invest;
