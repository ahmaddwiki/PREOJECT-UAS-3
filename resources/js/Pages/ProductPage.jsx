import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductCard from "@/Components/ProductCard";
import { Link } from "@inertiajs/react";

const ProductPage = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-4 px-10">
                {auth.user.role === "admin" ? (
                    <div className="flex justify-end mb-4">
                        <Link className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg py-2 px-3 text-white">
                            + New Product
                        </Link>
                    </div>
                ) : (
                    ""
                )}

                <div className="grid grid-cols-2 gap-4">
                    <ProductCard user={auth.user} />
                    <ProductCard user={auth.user} />
                    <ProductCard user={auth.user} />
                    <ProductCard user={auth.user} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductPage;
