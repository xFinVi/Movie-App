import { useState } from 'react';

function Input(){
    const [value, setValue] = useState('');
  console.log(value);

  const handleSearch = (e) => {

    const searchField = e.target.value.toLocaleLowerCase();
    setValue(searchField);
  };
    return (      
            <div>
                <input
                 type="search"
                 className="form-control"
                 placeholder="search"
                 onChange={handleSearch}
                 />      
            </div>
    )
}

export default Input;