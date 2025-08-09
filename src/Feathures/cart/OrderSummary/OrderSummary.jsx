import React, { useContext } from 'react';
import { cartContext } from '../../../Context/CartContextProvider';
import { Link, useNavigate } from 'react-router';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import { formateCurrency } from '../../../utils/healpers';

function OrderSummary() {
  const navigate = useNavigate();
  const { numOfItems, totalPrice, cartId } = useContext(cartContext);
  return (
    <div>
      <div className="border border-gray-100 bg-white p-6">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
          Order Summary:
        </h3>
        <p className="mb-3 font-bold text-gray-600">
          Total price:
          <span className="text-blue-600"> {formateCurrency(totalPrice)}</span>
        </p>
        <p className="mb-3 font-bold text-gray-600">
          Num of cart item: <span>{numOfItems}</span>
        </p>
        <div className="flex flex-col items-center">
          <ButtonType type="bg-primary" onClick={() => navigate('/products')}>
            Back to Shop
          </ButtonType>
          <ButtonType
            type="secondary"
            onClick={() => navigate(`/payment/${cartId}`)}
          >
            Continue
          </ButtonType>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
