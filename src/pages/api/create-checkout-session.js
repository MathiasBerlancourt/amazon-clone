const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email, description } = req.body;
  const transformedItems = items.map((item) => {
    return {
      quantity: 1,
      price_data: {
        currency: "EUR",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.image],
          description: item.description,
        },
      },
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1MqjNxI0mHtHMtLWTNQQjGYq",
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["FR"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(
        items.map((item) => {
          return item.image;
        })
      ),
    },
  });

  res.status(200).json({ id: session.id });
};
