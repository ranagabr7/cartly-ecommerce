import React from 'react';
import { useAllOrder } from '../useAllOrder';
import Spinner from '../../../ui/Spinner/Spinner';
import { formateCurrency } from '../../../utils/healpers';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import { useNavigate } from 'react-router';
export default function AllOrders() {
  const navigate = useNavigate();
  const { isPending, allOrders } = useAllOrder();
  if (isPending) return <Spinner />;
  // console.log(allOrders);

  return (
    <div className="flex flex-col-reverse">
      {allOrders.map((order) => (
        <div
          className="mb-8 flex gap-4 border border-gray-200 bg-white shadow-sm"
          key={order.id}
        >
          {/* order summary */}
          <div className="w-[40%] border border-gray-200">
            <div className="bg-white p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                Order Details:
                <span className="text-blue-600"> # {order.id}</span>
              </h3>
              <p className="mb-3 font-bold text-gray-600">
                Total price :
                <span className="text-blue-600">
                  {formateCurrency(order.totalOrderPrice)}
                </span>
              </p>
              <p className="mb-3 font-bold text-gray-600">
                Tax price :
                <span className="text-blue-600">
                  {formateCurrency(order.taxPrice)}
                </span>
              </p>
              <p className="mb-3 font-bold text-gray-600">
                Payment method :
                <span className="text-blue-600">{order.paymentMethodType}</span>
              </p>
              <p className="mb-3 font-bold text-gray-600">
                Is Paid:
                <span className="text-blue-600">
                  {order.isPaid ? ' Yes' : ' No'}
                </span>
              </p>
              <p className="mb-3 font-bold text-gray-600">
                Is Delivered :
                <span className="text-blue-600">
                  {order.isDelivered ? ' Yes' : ' No'}
                </span>
              </p>
              <div className="">
                <ButtonType
                  type="bg-primary"
                  onClick={() => navigate('/products')}
                >
                  Back to Shop
                </ButtonType>
              </div>
            </div>
          </div>
          {/* cart item */}
          <div className="w-[60%]">
            <div className="mt-2 flex flex-col gap-2">
              {order.cartItems?.map((cartItem) => (
                <div key={cartItem._id} className=" ">
                  <div className="flex items-center gap-2">
                    <img
                      src={cartItem.product.imageCover}
                      className="w-[45px]"
                      alt={cartItem.product.title}
                    />
                    <div>
                      <p className="text-sm font-semibold text-blue-600">
                        {cartItem.product.title
                          .split(' ')
                          .slice(0, 2)
                          .join(' ')}
                      </p>
                      <p className="pt-1 text-sm text-gray-400">
                        <span className='text-gray-500'> Brand :</span> {cartItem.product.brand.name}
                      </p>
                      <div className="flex gap-2">
                        <p className="pt-1 text-sm text-gray-400">
                          x{cartItem.count}
                        </p>
                        <p className="pt-1 text-sm text-gray-400">
                          {formateCurrency(cartItem.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
