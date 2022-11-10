import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handleServiceSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.details.value;
        const name = form.ServiceName.value;
        const price = form.price.value;
        const image = form.photo.value;
        const serviceInfo = {
            description,
            name,
            price,
            image,
        };

        fetch("https://assignment-11-server-gray.vercel.app/myservice", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Add Service Success");
                form.reset();
            })
            .catch((error) => console.log(error));

    };
    return (
        <form onSubmit={handleServiceSubmit}>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="ServiceName"
                    className="inline-block mb-1 font-medium"
                >
                    Service Name
                </label>
                <input
                    placeholder="Service Name"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="ServiceName"
                    name="ServiceName"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="details"
                    className="inline-block mb-1 font-medium"
                >
                    Service Details
                </label>
                <input
                    placeholder="Service Details"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="details"
                    name="details"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="price"
                    className="inline-block mb-1 font-medium"
                >
                    Service Price
                </label>
                <input
                    placeholder="Price"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="price"
                    name="price"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="photo"
                    className="inline-block mb-1 font-medium"
                >
                    Service Photo
                </label>
                <input
                    placeholder="Photo URL"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="photo"
                    name="photo"
                />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md btn-primary focus:outline-none"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddService;