"use client";

const CheckOutID = () => {
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 flex items-start gap-12">
            {/* Cột bên trái */}
            <div className="flex-1 space-y-8">
              {/* Thông tin khách hàng */}
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
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs xl:max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
              <div className="flow-root">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Hóa đơn
                </h2>
                <div className="-my-0.5 divide-y divide-gray-200 dark:divide-gray-700">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tạm tính
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white"></dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Tổng
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white"></dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="bg-primary flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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

export default CheckOutID;
