
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServiceConfirm = () => {
    const { _id, title, } = useLoaderData()
    console.log(title)

    const { user } = useContext(AuthContext)

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target
        // const name =`${form.firstName.value} ${form.lasttName.value}`
        const note = form.note.value
        const name = user?.displayName || 'No name'
        const email = user?.email || 'unregistered'


        const orderList = {
            service: _id,
            serviceName: title,
            email: email,
            patient: name,
            note: note


        }



        fetch('https://service-server-rnwu6n1kt-hrittik-chatterjee.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged)
                   toast('Service added',{position: "top-center",})
                form.reset()
            })
            .catch(er => console.log(er))

    }
   

    return (

        <div>
            
                <form onSubmit={handleAddService} >

                    <span className="label-text text-5xl mb-1">Are You sure You want to take <br /> <span className='text-red-800 font-extrabold'>{title}</span> service?</span>

                    <br />
                    <input type="text" name='note' placeholder="Add a note to confirm" required className="input input-bordered border-slate-900 w-full max-w-xs mt-1" />
                    <input className='btn my-2' type="submit" value='Add Your Service' />
                </form>
            <ToastContainer/>

            <p className='text-xl text-lime-700 font-semibold mt-6 mb-1'>We will send Email to <span className='text-blue-700'>{user?.email}</span> <br /> about the time and date of your appointment with the doctor</p>
        </div>
    );
};

export default AddServiceConfirm;