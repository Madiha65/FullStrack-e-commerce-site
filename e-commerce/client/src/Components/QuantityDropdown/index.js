import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const QuantityDropdown = () => {
    const [inputVal, setInputVal] = useState(1);
    
    const plus = () => {
        setInputVal(inputVal + 1);
    }
    const minus = () => {
        if (inputVal!==1 && inputVal>0) {
            setInputVal(inputVal - 1);
        }
    }
    return (
        <>
            <div className='quantityDrop d-flex align-items-center'>
                <Button onClick={minus} className="btn btn-light"><FaMinus /></Button>
                <input type='text' value={inputVal} readOnly />

                <Button onClick={plus} className="btn btn-light"><IoIosAdd /></Button>
            </div>
        </>
    )
}
export default QuantityDropdown;