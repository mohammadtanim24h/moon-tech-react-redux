import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
} from "../redux/actionCreators/productActions";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    return (
        <div
            className="shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900"
            key={product._id}
        >
            {pathname.includes("cart") && (
                <div className="absolute top-2 left-2 bg-indigo-600 text-white px-3 py-1 rounded-full">
                    {product.quantity}
                </div>
            )}
            <div className="h-52 w-52 mx-auto">
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className="font-bold text-center">{product.model}</h1>
            <p className="text-center font-semibold mb-3">
                Rating: {product.rating}
            </p>
            <div className=" flex-1">
                <ul className="space-y-2">
                    {product.keyFeature.map((feature, index) => {
                        return (
                            <li key={index} className="text-sm ">
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex gap-2 mt-5">
                {!pathname.includes("cart") && (
                    <button
                        className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold hover:bg-indigo-600 transition-all"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to cart
                    </button>
                )}
                {pathname.includes("cart") && (
                    <button
                        className={`bg-red-500 flex justify-center items-center rounded-full ${
                            pathname.includes("cart") && "flex-1 text-center"
                        } py-1 px-2 border text-bold text-white`}
                        onClick={() => dispatch(removeFromCart(product))}
                    >
                        <span>Remove from cart</span> <AiFillDelete size={20} />
                    </button>
                )}
                {!pathname.includes("cart") && (
                    <button
                        title="Add to wishlist"
                        className="bg-indigo-500  py-1 px-2 rounded-full"
                    >
                        <BiListPlus className="text-white" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
