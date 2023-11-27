
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addToCart, removeToCart } from './Cart';
import NavBar from '../Store/NavBar';

const CartView: React.FC = () => {
  const [product, setProduct] = useState(["mobile", "laptop", "tv", "cycle"]);
  const h = useSelector((state: any) => state.home);
  const n = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const add = (img: string, price: number, id: number, brand: string, name: string, cartitem: number, check: string) => {
    return {
      img,
      price,
      id,
      brand,
      count: 1,
      name,
      cartitem,
      check,
    };
  };

  if (h.islogin === true) {
    return (
      <>
        <div>
          <NavBar />
        </div>

        <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen p-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((pro) => 
             
                n[pro].map((item: any) => (
                  <div
                    key={item.name}
                    className="bg-gradient-to-br from-green-400 to-blue-500 p-4 shadow-md rounded-md"
                  >
                    <div className="text-md font-bold mb-2 text-white">{item.brand}</div>
                    <div>
                      <img
                        src={item.img}
                        alt="error"
                        className="w-full h-24 object-fill mb-2 rounded-md"
                      />
                    </div>
                    <div className="text-sm mb-2 text-white">
                      Price: <span className="line-through text-yellow-300">${item.price}</span>
                    </div>
                    <div className="text-white">Cart Item: {item.cartitem}</div>
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md"
                        onClick={() =>
                          dispatch(
                            addToCart(
                              add(
                                item.img,
                                item.price,
                                item.id,
                                item.brand,
                                item.name,
                                item.cartitem,
                                "plus"
                              )
                            )
                          )
                        }
                      >
                        +
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() =>
                          dispatch(
                            addToCart(
                              add(
                                item.img,
                                item.price,
                                item.id,
                                item.brand,
                                item.name,
                                item.cartitem,
                                "minus"
                              )
                            )
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))
             
            )}

          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default CartView;
