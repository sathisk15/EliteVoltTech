import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, uploadProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import AddProductPopupScreen from './AddProductPopupScreen';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: user } = userLogin;

  const [addProductPopup, setAddProductPopup] = useState(false);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const addProduct = (e, data) => {
    e.preventDefault();
    dispatch(uploadProduct({ ...data, user: user._id }));
  };

  return (
    <>
      <h1>Latest Products</h1>
      {user?.isAdmin && (
        <ListGroup.Item className="mx-auto pb-2">
          <Button
            className="btn-block"
            type="button"
            onClick={() => setAddProductPopup(true)}
          >
            Add Product
          </Button>
        </ListGroup.Item>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Row>
          {products.map((product, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      {addProductPopup && (
        <AddProductPopupScreen
          show={addProductPopup}
          onHide={() => setAddProductPopup(false)}
          submitHandler={addProduct}
        />
      )}
    </>
  );
};

export default HomeScreen;
