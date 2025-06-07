"use client"

import React, { useState } from 'react';
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting data:", data);

    try {
      const res = await fetch(`${process.env.PATH_URL_BACKEND}/api/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) {
        console.error("Lỗi gửi form:", result);
      } else {
        console.log("Gửi thành công:", result);
        setData({
          name: "",
          email: "",
          phone: "",
          topic: "",
          description: "",
        });
      }
    } catch (err) {
      console.error("Lỗi khi gửi form:", err);
    }
  };

  return (
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  ĐĂNG KÝ TƯ VẤN
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Nhóm hỗ trợ của chúng tôi sẽ trả lời bạn sớm nhất có thể qua email.
                </p>
                <form onSubmit={submitHandler}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">Họ Tên</label>
                        <input
                            type="text" name="name" id="name"
                            onChange={handleChange} value={data.name}
                            placeholder="Họ tên của bạn"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">Email</label>
                        <input
                            type="email" name="email" id="email"
                            onChange={handleChange} value={data.email}
                            placeholder="Email của bạn"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone</label>
                        <input
                            type="text" name="phone" id="phone"
                            onChange={handleChange} value={data.phone}
                            placeholder="Số điện thoại của bạn"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label htmlFor="topic" className="mb-3 block text-sm font-medium text-dark dark:text-white">Topic</label>
                        <input
                            type="text" name="topic" id="topic"
                            onChange={handleChange} value={data.topic}
                            placeholder="Ý tưởng của bạn"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label htmlFor="description" className="mb-3 block text-sm font-medium text-dark dark:text-white">Mô tả</label>
                        <textarea
                            name="description" id="description"
                            onChange={handleChange} value={data.description}
                            rows={5}
                            placeholder="Mô tả chi tiết về ý tưởng của bạn"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <button
                          type="submit"
                          className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
