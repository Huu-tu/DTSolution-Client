'use client';

import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import { useRouter } from 'next/navigation';

import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';


const BlogCreatePage = () => {
    const router = useRouter()
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const[data, setData] = useState({
        title: "",
        paragraph: "",
        content: "",
        image: "",
        type:""
    });

    // const config = {
    //     imageUpload: true,
    //     imageUploadURL: 'http://localhost:3001/upload',
    //     imageUploadParams: {
    //         id: 'my_editor'
    //     },
    //     events: {
    //         'image.uploaded': (response: any) => {
    //             console.log('Ảnh đã được upload:', response);
    //         },
    //         'image.inserted': (img: any) => {
    //             console.log('Ảnh đã được chèn vào editor:', img);
    //         },
    //         'image.replaced': (img: any) => {
    //             console.log('Ảnh đã được thay thế:', img);
    //         },
    //         'image.error': (error: any, response: any) => {
    //             console.error('Lỗi khi upload ảnh:', error, response);
    //         }
    //     }
    // };

    const handleChange = async (e:any) =>{
        setData({...data, [e.target.name]: e.target.value});
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('paragraph', data.paragraph);
        formData.append('content', data.content);
        formData.append('type', data.type);
        if (file) {
            formData.append('image', file);
        }

        try {
            const res = await fetch(`${process.env.PATH_URL_BACKEND}/api/blog`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                console.error('Upload failed');
            } else {
                const result = await res.json();
                router.push('/blog');
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
                                    <div className="sm:col-span-2">
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Title
                                        </label>
                                        <input type="text" name="title" id="title"
                                               onChange={handleChange} value={data.title}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Nhập tiêu đề" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="paragraph" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Paragraph
                                        </label>
                                        <input type="textarea" name="paragraph" id="paragraph"
                                               onChange={handleChange} value={data.paragraph}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Nhập văn bản" />
                                    </div>
                                    <div>
                                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Kiểu nội dung
                                        </label>
                                        <select id="type"
                                                name="type" value={data.type} onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option >Select your type</option>
                                            <option value={'blog'}>Blog</option>
                                            <option value={'doc'}>Tài liệu</option>
                                            <option value={'service'}>Dịch vụ</option>
                                            <option value={'solution'}>Giải pháp</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ảnh
                                        </label>
                                        <input type="file"  name="image" id="image"
                                               onChange={handleChange}
                                               accept=".png,.jpeg,.jpg"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="12" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="content"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                        <FroalaEditor
                                            tag="textarea"
                                            // model={content}
                                            onModelChange={(newContent: any) => {
                                                setContent(newContent);
                                                setData(prev => ({ ...prev, content: newContent })); // cập nhật vào data.content
                                            }}
                                            // config={config}
                                        />
                                    </div>
                                </div>
                                <button type="submit"
                                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ">
                                    Add blog
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default BlogCreatePage;
