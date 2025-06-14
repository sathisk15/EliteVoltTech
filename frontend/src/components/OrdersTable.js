import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const OrdersTable = ({ orders, isAdmin, markAsDelivered, markAsPaid }) => {
  return (
    <Table striped bordered hover responsive className="table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TOTAL</th>
          <th>PAID</th>
          <th>DELIVERED</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td>{order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                order.paidAt.substring(0, 10)
              ) : (
                <i className="fas fa-times" style={{ color: 'red' }}></i>
              )}
            </td>
            <td>
              {order.isDelivered ? (
                order.deliveredAt.substring(0, 10)
              ) : (
                <i className="fas fa-times" style={{ color: 'red' }}></i>
              )}
            </td>
            <td className="d-flex flex-column justify-content-center align-items-center">
              <LinkContainer to={`/orders/${order._id}`}>
                <Button className="btn-sm mb-1" variant="light">
                  Details
                </Button>
              </LinkContainer>
              {isAdmin && (
                <Button
                  className="btn-sm mb-1"
                  variant="light"
                  onClick={() => markAsPaid(order._id)}
                  disabled={order.isPaid}
                >
                  Mark As Paid
                </Button>
              )}
              {isAdmin && (
                <Button
                  className="btn-sm"
                  variant="light"
                  onClick={() => markAsDelivered(order._id)}
                  disabled={order.isDelivered}
                >
                  Mark As Delivered
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersTable;
