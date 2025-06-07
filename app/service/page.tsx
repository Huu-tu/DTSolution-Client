"use client";

import React,{useEffect, useState} from "react";
import useSWR from "swr";
import { fetcher } from "@/libs";
import SingleService from "@/components/Service/SingleService";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ServiceModel} from "@/types/blog";
import Contact from "@/components/Contact";

const Service = () => {
    const [services,setServices] = useState<ServiceModel[]>([]);
    const { data, error, isLoading } = useSWR<any>(`${process.env.PATH_URL_BACKEND}/api/service`, fetcher);
    useEffect(()=>{
        if(data)
        {
            setServices(data);
        }
    },[data,isLoading]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

    return (
        <>
            <Breadcrumb
                pageName="Service Grid"
                description=""
            />

            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">

                        {services.map((service) => (
                            <div
                                key={service._id}
                                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                            >
                                <SingleService service={service} />
                            </div>
                        ))}
                    </div>

                    <div
                        className="wow fadeInUp -mx-4 flex flex-wrap"
                        data-wow-delay=".15s"
                    >
                        <div className="w-full px-4">
                            <ul className="flex items-center justify-center pt-8">
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        Prev
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        12
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
};

export default Service;
