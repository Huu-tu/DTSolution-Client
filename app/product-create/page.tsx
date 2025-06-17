'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProductCreatePage = () => {
    const router = useRouter()
    const [file, setFile] = useState(null);
    const[data, setData] = useState({
        title: "",
        description: "",
        price: "0",
        image: "",
        tech:""
    });

    const handleChange = async (e:any) =>{
        setData({...data, [e.target.name]: e.target.value});
        if (e.target.files) {
            setFile(e.target.files[0])
        }
        console.log(data)
    }

    const submitHandler = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('tech', data.tech);
        if (file) {
            formData.append('image', file);
        }

        try {
            const res = await fetch(`${process.env.PATH_URL_BACKEND}/api/product`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                console.error('Upload failed');
            } else {
                const result = await res.json();
                router.push('/product');
            }
        } catch (err) {
            console.error('Error uploading blog:', err);
        }
    }


    return (
        <section className="pb-[120px] pt-[150px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
                        <div>
                            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                Tạo bài đăng
                            </h2>

                            <form onSubmit={submitHandler}>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div >
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Title
                                        </label>
                                        <input type="text" name="title" id="title"
                                               onChange={handleChange} value={data.title}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Nhập tiêu đề" />
                                    </div>
                                    <div >
                                        <label htmlFor="price"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="number" name="price" id="price"
                                               onChange={handleChange} value={data.price}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="$2999" />
                                    </div>
                                    <div>
                                        <label htmlFor="image"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ảnh
                                        </label>
                                        <input type="file" name="image" id="image"
                                               onChange={handleChange}
                                               accept=".png,.jpeg,.jpg"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="12" />
                                    </div>
                                    <div >
                                        <label htmlFor="tech" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Kiểu công nghệ
                                        </label>
                                        <input type="text" name="tech" id="tech"
                                               onChange={handleChange} value={data.tech}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Nhập kiểu công nghệ" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="description"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <textarea id="description" rows={"8"} name="description"
                                                  onChange={handleChange} value={data.description}
                                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                  placeholder="Your description here"></textarea>
                                    </div>
                                </div>
                                <button type="submit"
                                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ">
                                    Add product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProductCreatePage;
