import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Update = () => {
    useTitle('Update')
    const data = useLoaderData()
    // console.log(data._id);

    const handleUpdate = ( event) => {
        event.preventDefault();
        const edt = event.target.update.value
            fetch(`https://assignment-11-server-gray.vercel.app/update/${data?._id}`,{
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ edt }),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error))
    }
    return (
        <div className='text-center my-16'>
            <h2 className='font-semibold text-2xl'>Review Update Here</h2>
            <form action="" onSubmit={handleUpdate}>
            <input type="text" name='update' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs m-4" defaultValue={data.message}/>
            <br />
            <button className="btn btn-secondary">submit</button>
            </form>
        </div>
    );
};

export default Update;