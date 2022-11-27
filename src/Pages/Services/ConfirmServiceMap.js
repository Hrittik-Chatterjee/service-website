import React from 'react';

const ConfirmServiceMap = ({ ordersList }) => {
    const { note,  serviceName,patient } = ordersList
   
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
        
          <thead>
            <tr>
              <th className=' text-green-600'>Service Name</th>
              <th className='text-green-600'>Patient</th>
              <th className='text-green-600'>Note</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold text-sky-700">{serviceName}</div>
                  </div>
                </div>
              </td>
              <td>
               {patient}
              </td>
              <td>{note}</td>
            </tr>
          </tbody>
          
        </table>
      </div>
    );
};

export default ConfirmServiceMap;

