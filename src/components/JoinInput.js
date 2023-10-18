import React from 'react';

function JoinInput(props) {
 return (
  <div className='joinmain'>
   <h2>به ما ملحق شوید.</h2>
   <p>با نوشتن ایمیل خود از اخبار ما مطلع شوید.</p>
   <div className='inputdiv'>
    <input type='text' placeholder='ایمیل' />
    <button>ارسال</button>
   </div>
  </div>
 );
}

export default JoinInput;