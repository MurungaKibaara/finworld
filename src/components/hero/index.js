import React from 'react';
import { Button } from '@material-ui/core';
import Hero from '../../assets/hero.svg';
import './index.css'

function Index() {
    return (
        <div className="hero">
         
            <div className="container">
                <h1>Welcome to Finance world!</h1>
                <h2>Get all your crypocurrencies and </h2> 
                <h2>stock market data in one platform!</h2>

                <p>This platform allows you to track the prices of your favourite assets, Stocks or Crypto, all in one platform.</p>
                
                <div className="hero-buttons">
                    <Button style={{
                        // background: 'blue',
                        marginRight: '8%',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        
                        }} 
                        size="medium"
                        variant="outlined"
                        color="primary">Stocks</Button>
                    <Button style={{ 
                        marginRight: '10%',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        }} 
                        size="medium"
                        variant="outlined"
                        color="primary">Crypto</Button>
                </div>
                
            </div>

            <div className="hero-image">
                <img src={Hero} width="512px" height="512px" alt="Hero.png" />
            </div>
           
        </div>
    )
}

export default Index
