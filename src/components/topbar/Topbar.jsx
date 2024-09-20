import './topbar.scss'
import { useState } from 'react';



export default function Topbar({menuisOpen,menusetOpen}) {
  const [isOpen, setOpen] = useState(false) ;
  

  return (
    <div className={'topbar ' + (menuisOpen && 'active')}>
        {/* <div className="wrapper"> */}
          {/* <div className="left"> */}
               <h3>Quanf.dev</h3>
              {/* <div className='itemContainer'>
                <Person className='icon'/>
                <span>+84 342 268 998</span>
              </div>
              <div className='itemContainer'>
              <Mail className='icon'/>
              <span>quanf.dev@gmail.com</span>
              </div> */}
          {/* </div> */}
        {/* </div> */}
    </div>
  );
}
