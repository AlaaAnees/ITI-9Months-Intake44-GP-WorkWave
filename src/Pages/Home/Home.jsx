import BestPart from "../../Components/Home-page-components/BestPart";
import Categories from "../../Components/Home-page-components/Categories";
import Cover from "../../Components/Home-page-components/Cover";
import Footer from "../../Components/Home-page-components/Footer";
import Inspring from "../../Components/Home-page-components/Inspring";
import JoinWorkWave from "../../Components/Home-page-components/JoinWorkWave";
import PopularServices from "../../Components/Home-page-components/PopularServices";

// const Inspring = lazy(() =>
//   import("../../Components/Home-page-components/Inspring")
// );
function Home() {
  return (
    <>
      <Cover />
      <Categories />
      <PopularServices />
      <BestPart />
      <Inspring />
      <JoinWorkWave />
      <Footer />
    </>
  );
}

export default Home;
