import { Button, Form } from 'react-bootstrap';
import Popup from '../components/Popup';
import { useState } from 'react';

const AddProductPopupScreen = ({ show, onHide, submitHandler }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    brand: '',
    price: null,
    countInStock: null,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Popup show={show} onHide={onHide} title={'Add Product'}>
      <Form onSubmit={(e) => submitHandler(e, { image, ...product })}>
        <Form.Group controlId="name">
          <Form.Label>Product Name </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Product Image </Form.Label>
          <Form.Control
            name="image"
            type="file"
            value={product.image}
            onChange={handleImageChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Product Description </Form.Label>
          <Form.Control
            type="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Product Brand </Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            placeholder="Enter product brand"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Product Price </Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="stockCount">
          <Form.Label>Stock Count </Form.Label>
          <Form.Control
            type="number"
            name="countInStock"
            value={product.countInStock}
            onChange={handleChange}
            placeholder="Enter Stock Count"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Add
        </Button>
      </Form>
    </Popup>
  );
};

export default AddProductPopupScreen;
