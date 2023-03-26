import Head from "next/head";
import Header from "../components/Header";
import { Banner } from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import axios from "axios";

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  let products;

  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    products = data;
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      products,
    },
  };
};
