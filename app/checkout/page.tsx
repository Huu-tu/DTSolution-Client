"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ProductModel } from "@/types/model";
import { localStorageHelper } from "@/utils/localStorageHelper";

const CheckOut = () => {
  const [cart, setCart] = useState<ProductModel[]>([]);
  const [totalCart, setTotalCart] = useState(0);
  const [data, setData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
  });

  useEffect(() => {
    const load = localStorageHelper.loadCart();
    const total = localStorageHelper.getTotalPrice();
    setCart(load);
    setTotalCart(total);
  }, []);

  const handleChangeCart = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleToPayment = async (e: any) => {
    e.preventDefault();

    const formData = {
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      totalAmount: totalCart,
      // items: "",
      status: "pending",
    };

    try {
      const res = await fetch(`${process.env.PATH_URL_BACKEND}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.error("Upload failed");
      } else {
        const result = await res.json();
        console.log(result);
        // router.push("/blog");
      }
    } catch (err) {
      console.error("Error uploading blog:", err);
    }
  };

  const handleDeleteToCart = (_id: any) => {
    localStorageHelper.removeProduct(_id);
  };

  return (
    <>
      <Breadcrumb pageName="CheckOut Grid" description="" />

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <form
          onSubmit={handleToPayment}
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Thông tin khách hàng
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="customerName"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tên của bạn*
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={data.customerName}
                      onChange={handleChangeCart}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="customerEmail"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email của bạn*
                    </label>
                    <input
                      type="email"
                      id="customerEmail"
                      name="customerEmail"
                      value={data.customerEmail}
                      onChange={handleChangeCart}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="customerPhone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Số điện thoại của bạn*
                    </label>
                    <input
                      type="text"
                      id="customerPhone"
                      name="customerPhone"
                      value={data.customerPhone}
                      onChange={handleChangeCart}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              {cart.map((item) => (
                <div className="space-y-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-1">
                    <img
                      className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={`http://localhost:4000/img/` + `${item?.image}`}
                      alt=""
                    />
                    <div className="flex flex-col  p-4 leading-normal gap-1">
                      <h5 className=" text-2xl  tracking-tight text-gray-900 dark:text-white">
                        {item?.title}
                      </h5>
                      <p className="font-normal text-orange-400">
                        {item?.price},000₫
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleDeleteToCart(item?._id)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        Delete
                      </button>

                      {/*<div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>*/}

                      {/*<button*/}
                      {/*  type="button"*/}
                      {/*  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"*/}
                      {/*>*/}
                      {/*  Edit*/}
                      {/*</button>*/}
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <label
                  htmlFor="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bạn có mã ưu đãi?
                </label>
                <div className="flex max-w-md items-center gap-4">
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="bg-primary flex items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flow-root">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Hóa đơn
                </h2>
                <div className="-my-0.5 divide-y divide-gray-200 dark:divide-gray-700">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tạm tính
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {totalCart},000₫
                    </dd>
                  </dl>
                  {/*<dl className="flex items-center justify-between gap-4 py-3">*/}
                  {/*  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">*/}
                  {/*    Tiết kiệm*/}
                  {/*  </dt>*/}
                  {/*  <dd className="text-base font-medium text-green-500">0</dd>*/}
                  {/*</dl>*/}
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Tổng
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {totalCart},000₫
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="bg-primary flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CheckOut;
