import React from 'react';
import { Home, Menu, MenuOpen, Close} from '@material-ui/icons';
import './index.css';

const Navigation = () => {
    const [open, setOpen] = React.useState(false);

    return (
       <nav>
           <header>
            <a href="#home">
               <div className="logo">
                    <Home fontSize="large" style={{ 'color': '#0a1931', 'margin': 12 }} />
                    {/* <h3>{ !open && 'M K .'}</h3> */}
                </div>
            </a>

               <ul className="web">
                   <li><a href="#home">Home</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#projects">Projects</a></li>
                   <li><a href="#contacts">Contacts</a></li>
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
                                    'margin': 12,
                                    'marginLeft': 25
                                }}
                            />
                        </div>
                        : <>
                        <Menu
                            onClick={() => setOpen(!open)}
                            fontSize="large"
                            style={{
                                'justifyContent': 'flex-end',
                                'color': '#0a1931',
                                'margin': 12,
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
