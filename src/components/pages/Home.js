import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
import { getAccount,connectWallet } from '../../utils/wallet';
import './Home.css';

export default function Home() {
  const [account, setAccount] = useState("");
  
  const checkWallet  = async () => {
    await connectWallet();
    const account = await getAccount();
    
    setAccount(account);
  };

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '\petition'; 
    navigate(path);
  }

  return (
    <>
    <Navbar/>
    <div className="theme item-container">
      <img src="images/foreground.png" alt="decoration" className='decoration' />
      <div className="items">
        <p className="text-container text-white font-bold"><span className="you-text">You</span> <span className="can-text">Can</span><br /> <span className="change-text">Change</span><br />The World.</p>
        <Button className='button-css' variant="contained" 
        
        style={{
        borderRadius: 24,
        padding: "18px 36px",
        fontSize: "18px",
        color: "#000000",
        fontWeight: "bolder",}} 

        onClick = {()=> {
          if(account === ""){
            checkWallet();
          }
          else{
            routeChange();
          }
        }}
        >
      <span className="write-petiiton">Write a Petiton</span></Button>
      </div>    

    </div> 
    <div>

    </div>
    </>
  )
}