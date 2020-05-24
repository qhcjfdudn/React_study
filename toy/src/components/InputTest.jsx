import React, { useState } from 'react';

export default function InputTest() {
  const [input, setInput] = useState();
  const [isEdit, setIsEdit] = useState(false);
  
  const ClosetInputEdit = () => {
    const [closetInput, setClosetInput] = useState('내 옷장');
    
    const inputHandle = (e) => {
      console.log(e.target.value);
      setClosetInput(e.target.value);
    }

    const submitHandle = (e) => {
      setInput(closeInput);
    }
    
    return (
      <div>
        <input type="text" value={closetInput} onChange={inputHandle} />
        <button onClick={submitHandle}/>
      </div>
    );
  };

  return (
    <ClosetInputEdit />
  )
};