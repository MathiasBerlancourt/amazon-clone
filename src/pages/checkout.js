import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Image from "next/dist/client/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* section de gauche */}
        <div className="flex-grow m-6 shadow-sm">
          <Image
            src="/AmazonHero6.jpeg"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p)5 space-y-10 bg-white">
            <h1 className="text-2xl p-4 border-b-2 pb-4">
              {items.length === 0 ? "Your Cart is empty" : "Shopping Cart"}
            </h1>
            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* droite */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                <span className="font-normal">Subtotal</span> ({items.length}{" "}
                items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed`
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
