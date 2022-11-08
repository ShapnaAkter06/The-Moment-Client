import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question Answer</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL?</summary>
                        <div className="px-4 pb-4">
                            
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work??</summary>
                        <div className="px-4 pb-4">
                            
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS??</summary>
                        <div className="px-4 pb-4 space-y-2">
                            
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;