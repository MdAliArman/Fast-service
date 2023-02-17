import React from 'react';

const AddProduct = () => {

    const addService=event=>{
        event.preventDefault();
        const form = event.target
        const title= form.title.value;
        const price = form.price.value;
        const img = form.photo.value;
        const des = form.massage.value;
       const service={
        title,
        price,
        img, 
         des
       }
       fetch("http://localhost:5000/allservice", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(service)
       })
       .then(res=>res.json())
       .then(data=>{

        console.log(data)
        if(data.acknowledged){
            alert('service Add SeccesFully')
            form.reset()
        }
    })
       .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 mt-4 text-center">Add Service</h1>
           <form className='w-2/4 mx-auto my-4 p-6 text-center border border-rounded' onSubmit={addService}>
           <input type="text" name='title'  placeholder="Service Name" className="input input-bordered w-full block mb-3" />
           <input type="number" name='price' placeholder="Price" className="input input-bordered w-full block mb-3" />
           <input type="text" name='photo' placeholder="Service uri" className="input input-bordered w-full block mb-3" />
           <textarea placeholder="Details" name='massage' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
           <button className="btn btn-primary px-8 my-3">Submit</button>
           </form>
        </div>
    );
};
<p>this is add Product</p>
export default AddProduct;