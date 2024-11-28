import React, { useRef, useState } from 'react';
import Button from './Button';

const Otp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, Setdisabled] = useState(true)

  return (
    <div className="flex justify-center space-x-2">
      <SubOtpBox refrence={ref1} onDone = {()=>{
        ref2.current.focus();
      }} />
      <SubOtpBox refrence={ref2} onDone = {()=>{
        ref3.current.focus();
      }}  />
      <SubOtpBox refrence={ref3} onDone = {()=>{
        ref4.current.focus();
      }}  />
      <SubOtpBox refrence={ref4} onDone = {()=>{
        ref5.current.focus();
      }}  />
      <SubOtpBox refrence={ref5} onDone = {()=>{
        ref6.current.focus();
      }}  />
      <SubOtpBox refrence={ref6} onDone = {()=>{
        Setdisabled(false)
      }}  />

      <br />

      <Button disabled={disabled}>Sign up</Button>
    </div>
  );
};

function SubOtpBox({
    refrence, onDone
}) {

    const [inputBoxVal, setInputBoxVal] = useState("")
    
  return (
    <div >
      <input value={inputBoxVal} ref={refrence} onChange={(e)=> {
        const val = e.target.value;
        onDone();
      }}
        type="text"
        
        className="m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none text-center text-white"
      />
    </div>
  );
}

export default Otp;
