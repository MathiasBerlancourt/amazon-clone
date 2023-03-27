import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image }) => {
  /* On va mettre des étoiles au hasard pour la démo car il n'y a pas de vraies notes clients , rating va etre initialisé à un nombre random entre 1 et 5*/
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //On envoie le product en action au Redux store qui correspond au basket slice
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt="product"
        height={200}
        width={200}
        objectFit="contain"
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <div key={i}>
                <StarIcon className="h-5 text-yellow-500" />
              </div>
            );
          })}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12 h-12" src="/Prime-tag.png" alt="prime" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      {/* ici l classe buton est une custom class tailwind */}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
