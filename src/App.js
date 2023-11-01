import React from 'react';
import './style.css';



const NavBar = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__logo">
          <span className="navbar-logo__icon">logo</span>
         </div>
         <div className="navbar__centro">
           <div>
          <span className="navbar__aboutservise">about servise</span>
           </div>
           <div>
          <span className="navbar__features">features</span>
           </div>
           <div>
            <span className="navbar__faq">FAQ</span>
           </div>
           <div>
            <span className="navbar__carreer">carreer</span>
           </div>
           <div>
            <span className="navbar__contac">contac</span>
           </div>
        </div>
        <div className="navbar__button">
          <button className="navbar-button__button" > sign in</button>
        </div>
      </div>
    </>
  );
};

const BodyPage =()=>{
return (<> 
<div className="body__page">
  <div className="body__title">
    <h1>safe movile finance app</h1>
  </div>
  <div className="body__parrafo">
    <p> este es un parrafo que sale en la pagina de presentacion que nos envio el profesor</p>
  </div>
  <div className="body__boton">
    <button className="body-boton__boton"> start  </button>
  </div>

</div>
</>
);
};

const FooterPage =()=>{
return (<>
   <div className="body__footer">
    <div className="body-footer__icon1">
      <p> icono uno</p>
      </div>
      <div className="body-footer__icon2">
      <p> icono dos </p>
      </div>
      
    

   </div>



</>)
}


export default function App() {
  return (
    <div className="app__container">
      <NavBar/>
      <BodyPage/>
      <FooterPage/>      
    </div>
  );
}
