// import React, { useEffect, useState } from "react";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
// import axios from "axios";

// export function CartItem({ id, quantity }) {
//     const { removeFromCart } = useShoppingCart();
//     const [cartItem, setCartItem] = useState([]);

  
//     useEffect(() => {
//       // Fetch the data for the specific item using the ID
//       axios
//         .get(`http://localhost:3000/products/${id}`)
//         .then((response) => {
//           setCartItem(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }, [id]); // Fetch data when the ID changes
  
//     if (!cartItem) {
//       // Handle loading or error state
//       return <div>Loading...</div>;
//     }

//     return (
//         <Stack direction="horizontal" gap={2} >
//             <img src={cartItem.image} alt="image of product" 
//             style={{
//                 width: "125px",
//                 height: "75px",
//                 objectFit: "cover",
//             }} />
//         </Stack>
//     )}