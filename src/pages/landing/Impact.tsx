import Banner from "../../components/impact/Banner";
import Info from "../../components/impact/Info";
import Metric from "../../components/impact/Metric";
import Social from "../../components/impact/Social";
import Testimonies from "../../components/impact/Testimonies";

const Impact = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <div className="relative w-full min-h-[400px] sm:min-h-[300px]">
        <Metric />
      </div>
      <Social />
      <Info />
      <Testimonies />
    </div>
  );
};

export default Impact;
