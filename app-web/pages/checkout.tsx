import { NextPage } from 'next';
import axios from 'axios';

const Checkout = () => {
  const handleClick = async (event) => {
    try {
      const url = `/api/checkout/usersCheckout`;
      const { data } = await axios.get(url, {
        headers: {
          'content-type': 'application/js',
        },
      });
      console.log('data', data);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Checkout;
