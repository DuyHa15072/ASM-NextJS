import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hook";
import { ProductType } from "../../types/products";
import { useAppDispatch } from './../../app/hook';
import { getCartProducts, getTotalPrice, removeFromCart, addToCart } from './../../features/Cart/CartSlice';

interface cartProps { }

const Cart: React.FC = () => {
  const cartProducts = useAppSelector(getCartProducts);
  console.log(cartProducts);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispath = useAppDispatch()
  const handleRemoveFromCart = (productId: any) => dispath(removeFromCart(productId))
  const addToCartHandler = (product: ProductType) => dispath(addToCart(product))

  return (<div>  <div className="flex flex-col m-10">
    <h4>Cart</h4>
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 ">
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STT
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Giá
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số lượng
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y ">
              {cartProducts?.map((product, i) =>
                <tr className="" key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{i + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.price}.000 VND</div>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button onClick={() => addToCartHandler(product)} className="btn btn-increase">+</button>
                    {product.amount}
                    <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-decrease">-</button>
                  </td>

                  <td>
                  </td>
                  <td>
                    <button className="btn btn-remove">Xóa</button>
                  </td>
                </tr>
              )}
            </tbody>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tổng Giá:
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {totalPrice}.000 VND
            </td>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>)
}

export default Cart