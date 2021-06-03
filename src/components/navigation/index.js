import React from 'react';
import { Menu, Close, Money} from '@material-ui/icons';
import './index.css';

const Navigation = () => {
    const [open, setOpen] = React.useState(false);

    return (
       <nav>
           <header>
            <a href="#home">
               <div className="logo">
                    <Money style={{ 'color': '#0a1931', 'margin': 15, fontSize: 25 }} />
                    <h3>{ !open && 'FinWorld .'}</h3>
                </div>
            </a>

               <ul className="web">
                   <li><a href="#home">Home</a></li>
                   <li><a href="#about">Stock Market</a></li>
                   <li><a href="#projects">Crypto Currencies</a></li>
                   {/* <li><a href="#contacts">Contacts</a></li> */}
               </ul>

               <div className="mobile">
                { open && 
                        <ul>
                            <li onClick={() => setOpen(!open)}><a href="#home">Home</a></li>
                            <li onClick={() => setOpen(!open)}><a href="#home">About</a></li>
                            <li onClick={() => setOpen(!open)}><a href="#home">Projects</a></li>
                            <li onClick={() => setOpen(!open)}><a href="#home">Contacts</a></li>
                        </ul>
                    }
                
                   { open ?
                        <div className="#">
                            <Close
                                onClick={() => setOpen(!open)}
                                fontSize="large"
                                style={{
                                    'justifyContent': 'flex-end',
                                    'color': '#0a1931',
                                    'margin': 15,
                                    'marginTop': 22,
                                    'fontSize': 25,
                                    'marginLeft': 25
                                }}
                            />
                        </div>
                        : <>
                        <Menu
                            onClick={() => setOpen(!open)}
                            style={{
                                'justifyContent': 'flex-end',
                                'color': '#0a1931',
                                'margin': 15,
                                'marginTop': 22,
                                'fontSize': 25,
                                'marginLeft': 25
                            }}
                        /> 
                    </>
                   }
               </div>
           </header>
       </nav>
    )
}

export default Navigation
