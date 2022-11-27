import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ConfirmServiceMap from './ConfirmServiceMap';

const ConfirmServiceShow = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    console.log(orders.length)
    return (
        <div>
        
            {
                orders.length !== 0 ? <div>
                    <h2 className='text-center text-4xl font-bold '>Added Service List</h2>
                    {
                        orders.map(ordersList => <ConfirmServiceMap key={ordersList._id} ordersList={ordersList}></ConfirmServiceMap>)
                    }
                </div>
                    : <div></div>
            }
            
        </div>
    );
};

export default ConfirmServiceShow;