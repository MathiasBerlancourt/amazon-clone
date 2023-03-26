import Product from "../components/Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28">
      {products.map(({ id, title, price, description, category, image }) => {
        return (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        );
      })}
    </div>
  );
};
export default ProductFeed;