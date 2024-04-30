import GigsContainer from "../../Components/GigsContainer/GigsContainer";
import { useGig } from "../../Context/GigsContext";
import Loading from "../Loading/Loading";

function CategoriesPage() {
  const { isloading } = useGig();
  if (isloading) return <Loading></Loading>;
  return (
    <section className="container py-8">
      <GigsContainer></GigsContainer>
    </section>
  );
}

export default CategoriesPage;
