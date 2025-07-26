import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";


function Cart(){

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, prod) => prod.price * prod.quantity + acc, 0)

  return(
    <>
    <h1>Welcome To Cart</h1>
    <Button className="my-2" variant="primary" onClick={() => {
      dispatch(clear())
    }}>Clear Cart</Button>
    <h5>Total Price: {totalPrice} $</h5>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Img</th>
          <th>description</th>
          <th>Price</th>
          <th>quantity</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
      {cart.map((product, i) => 
        <tr key={product.id}>
          <td style={{width: "20%"}}>{product.title}</td>
          <td style={{width: "10%"}}><img src={product.image} style={{width: "70px", height: "70px"}}></img></td>
          <td style={{width: "50%"}}>{product.description}</td>
          <td>{product.price} $</td>
          <td style={{width: "5%"}}>{product.quantity}</td>
          <td><Button variant="danger" onClick={() => {
            dispatch(deleteFromCart(product.id))
          }}>Delete</Button></td>
        </tr>
      )}

      </tbody>
    </Table>
    </>
  )
}

export default Cart;