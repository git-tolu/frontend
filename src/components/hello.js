import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>this is jsx</h1>
    //     </div>
    // )
    return React.createElement('div', { id: 'hwll', className: 'dajdjsa' }, React.createElement('h1', null, 'This is jsx'))
}

export default Hello