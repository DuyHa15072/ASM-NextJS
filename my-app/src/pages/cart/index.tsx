import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getTotalItems, removeItem, increaseQuantity, decreaseQuantity, getTotals, getTotalPrice } from '../../features/Cart/CartSlice'
import { ProductType } from '../../types/products'
import Link from 'next/link'
const Cart = () => {
  const dispatch = useAppDispatch();
  const itemsCart = useAppSelector(state => state.cart.items);


  useEffect(() => {
    dispatch(getTotalItems());
  }, [itemsCart])


  const remove = (_id: any) => {
    confirm("bạn có muốn xóa không? ");
    dispatch(removeItem(_id))
  };
  const increase = (_id: any) => {
    dispatch(increaseQuantity(_id))
  }
  const decrease = (_id: any) => {
    dispatch(decreaseQuantity(_id))
  }
  return (
    <div>  <div className="flex flex-col m-10">
      <h4>Cart</h4>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase border-b bg-gray-50 dark:text-gray-400 ">
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STT
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ảnh
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Số lượng
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tổng Giá <span className="amount">${cart.cartTotalAmount}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {itemsCart?.map((item: ProductType, index) => {
                  return (
                    <tr key={index} className="text-gray-700 dark:text-gray-400">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">{index + 1}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={item.img} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-400">
                              ${item.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">{item.price}USA</div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          XL
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button onClick={() => {
                          increase(item._id)
                        }} data-id="${item.id}" className="btn btn-increase">+</button>
                        {item.quantity}
                        <button onClick={() => {
                          decrease(item._id)
                        }} data-id="${item.id}" className="btn btn-decrease">-</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity * item.price}USA
                      </td>
                      <td>
                      </td>
                      <td>
                        <button onClick={() => remove(item._id)} className="btn btn-remove">Xóa</button>
                      </td>

                    </tr>

                  )
                })}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tổng: <span className="amount"></span>
                </th>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
      <Link href={``} className='no-underline'>
        <button type="submit" className="mt-10  bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline ">Buy now</button>
      </Link>
    </div>
  )
}

export default Cart