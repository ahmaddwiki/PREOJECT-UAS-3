import React from "react";
import sepatu from "@/Assets/8.jpg";

const ProductCard = ({ user }) => {
    return (
        <div className="">
            <div class="flex bg-white rounded-lg shadow border p-2">
                <div class="relative flex-none w-24 md:w-48">
                    <img src={sepatu} alt="img" />
                </div>
                <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-xl font-semibold">
                            Classic Utility Jacket
                        </h1>
                        <div class="text-xl font-semibold text-gray-500">
                            $110.00
                        </div>
                        <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500">
                            In stock
                        </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 text-gray-700">
                        <div class="flex space-x-2">
                            <label class="text-center">
                                <input
                                    type="radio"
                                    class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg "
                                    name="size"
                                    value="xs"
                                />
                                39
                            </label>
                            <label class="text-center">
                                <input
                                    type="radio"
                                    class="flex items-center justify-center w-6 h-6"
                                    name="size"
                                    value="s"
                                />
                                40
                            </label>
                            <label class="text-center">
                                <input
                                    type="radio"
                                    class="flex items-center justify-center w-6 h-6"
                                    name="size"
                                    value="m"
                                />
                                41
                            </label>
                            <label class="text-center">
                                <input
                                    type="radio"
                                    class="flex items-center justify-center w-6 h-6"
                                    name="size"
                                    value="l"
                                />
                                42
                            </label>
                            <label class="text-center">
                                <input
                                    type="radio"
                                    class="flex items-center justify-center w-6 h-6"
                                    name="size"
                                    value="xl"
                                />
                                43
                            </label>
                        </div>
                        <a
                            href="#"
                            class="hidden ml-auto text-sm text-gray-500 underline md:block"
                        >
                            Size Guide
                        </a>
                    </div>
                    {user.role === "user" ? (
                        <div class="flex mb-4 text-sm font-medium">
                            <button
                                type="button"
                                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Buy now
                            </button>
                        </div>
                    ) : (
                        <>
                            <div class="flex mb-4 text-sm font-medium">
                                <button
                                    type="button"
                                    class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Edit
                                </button>
                            </div>
                            <div class="flex mb-4 text-sm font-medium">
                                <button
                                    type="button"
                                    class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}

                    <p class="text-sm text-gray-500">
                        Free shipping on all continental US orders.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ProductCard;
