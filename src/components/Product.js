import { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image }) => {
  /* On va mettre des étoiles au hasard pour la démo car il n'y a pas de vraies notes clients , rating va etre initialisé à un nombre random entre 1 et 5*/
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div>
      <p>{category}</p>
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
                <StarIcon className="h-5" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
