import { Navbar, Main, Product, Footer } from "../components";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  )
}

export default Home