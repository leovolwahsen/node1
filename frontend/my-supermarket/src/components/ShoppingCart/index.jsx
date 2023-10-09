// import { Offcanvas, Stack } from "react-bootstrap";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
// import { formatCurrency } from "../../utilities/formatCurrency";
// // import { CartItem } from "../CartItem"

// export function ShoppingCart({ isOpen }) {
//   const { closeCart, cartItems } = useShoppingCart();

//   return (
//     <Offcanvas show={isOpen} onHide={closeCart} placement="end">
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title>Cart</Offcanvas.Title>
//       </Offcanvas.Header>
//       <Offcanvas.Body>
//         <Stack gap={3}>
//           {/* {cartItems.map((cartItem) => (
//             <CartItem key={cartItem.id} {...cartItem} /> */}
//           {/* ))} */}
//           <div className="ms-auto fw-bold fs-5">
//             Total{" "}
//             {formatCurrency(
//               cartItems.reduce((total, cartItem) => {
//                 return total + (cartItem?.price || 0) * cartItem.quantity;
//               }, 0)
//             )}
//           </div>
//         </Stack>
//       </Offcanvas.Body>
//     </Offcanvas>
//   );
// }
