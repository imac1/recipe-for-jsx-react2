import React from "react"

const Ingredients = () => {
    const ingredients = [
        {
          name: "envelopes unflavored gelatine",
          quantity: "2"
        },
        {
          name: "cup sugar",
          quantity: "1/2"
        },
        {
          name: "teaspoon salt",
          quantity: "1"
        },
        {
          name: "can (12 oz) apple juice",
          quantity: "1"
        },
        {
          name: " cup lemon juice",
          quantity: "1/2"
        },
        {
          name: "tablespoons vinegar",
          quantity: "2"
        },
        {
          name: "cup shredded carrot",
          quantity: "1"
        },
        {
          name: "cup sliced celery",
          quantity: "1"
        },
        {
          name: "cup finely shredded cabbage",
          quantity: "1"
        },
        {
          name: "cup chopped green pepper",
          quantity: "1/2"
        },
        {
          name: "can (4 oz) chopped pimiento",
          quantity: "1"
        }
      ]

    //   const listItems = ingredients.map(product =>
    //     <li key={product.id} >
    //       {product.quantity}{product.name}
    //     </li>
    //   );
    
    return  (
<div>

    <ul className="flex flex-col">
     {/* <li>{listItems}</li> */}
     {ingredients.map((ingredient, index) => (
          <li key={index} className=" ">
           <em className="font-bold">{ingredient.quantity}</em> <em>{ingredient.name}</em>
          </li>
        ))}
    </ul>
</div>

    )
}
export default Ingredients