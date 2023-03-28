import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
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
    //ici on envoie l'item a redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="flex">
      <div className="grid grid-col-5 w-4/5 ">
        <Image src={image} height={200} width={200} objectFit="contain" />
        <div className="col-span-3 mx-5 ">
          <p>{title}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <StarIcon key={i} className="h-5 text-yellow-500" />;
              })}
          </div>
          <p className="text-xs my-2  line-clamp-5">{description}</p>
          <Currency quantity={price} currency="EUR" />
          {hasPrime && (
            <div className=" flex items-center space-x-2">
              <img className="w-12 h-12" src="/Prime-tag.png" alt="prime" />
              <p className="text-xs">FREE Next-day Delivery</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToBasket}>
          Add to Cart
        </button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
