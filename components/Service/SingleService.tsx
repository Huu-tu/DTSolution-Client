import { ServiceModel } from "@/types/model";
import Image from "next/image";
import Link from "next/link";

const SingleService = ({ service }: { service: ServiceModel }) => {
    const { title, image, description,tech, _id, type } = service;
    return (
        <>
            <div
                className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
                data-wow-delay=".1s"
            >
                <Link
                    href={`/service-detail/${_id}`}
                    className="relative block aspect-[37/22] w-full"
                >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {type}
          </span>
                    <Image src={`${process.env.PATH_URL_BACKEND}/img/` + `${image}`} alt="image" fill />
                </Link>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                        <Link
                            href={`/service-detail/${_id}`}
                            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                        >
                            {title}
                        </Link>
                    </h3>
                    <p className="mb-6  border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleService;
