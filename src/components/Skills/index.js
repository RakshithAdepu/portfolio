import React from 'react';
import {Link} from "react-router-dom"
import "./index.css";

const Skills=()=><div className='skillsBackgroundImage'>
     <nav className="navbar ">
          <Link to="/"><button className="btnPortfolio">Portfolio.</button></Link>
          <div className="homeNav">
           <Link to="/"> <button className="btn">Home</button></Link>
           <Link to="/About"> <button className="btn">About</button> </Link>
            <Link to="/Skills"><button className="btn">Skills</button></Link>
           <Link to="/">  <button className="btn">Portfolio</button></Link>
           <Link to="/Contact"> <button className="btn">Contact</button></Link>
          </div>
        </nav>
        <div className='skillsCont'>
          <h1 className='heading'>What do I know.</h1>
          <p className='para'>The technologies listed below are those in which I hold expertise and have worked for almost three years.
 </p>
           
           <div className='logoCont'>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685266406/html-5_rmfc79.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685359333/rmxdjutuzyb2ktp0a9jv.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685359502/java-script-logo_trnbqo.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685359699/molecule_hvos6r.png" alt="logo"/>
           <img className='nxtjs' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685359884/nextjs-icon_luqevx.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685360196/icons8-bootstrap-48_nw2wkb.png" alt="logo"/>
           


           </div>
           <div className='logoCont'>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685360543/snakes_ebjfdm.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685360630/sql_vgreln.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685360943/icons8-express-js-150_bw9h5z.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685360755/icons8-node-js-144_qhonpf.png" alt="logo"/>
           <img className='nxtjs' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1686317175/github-logo_x9gw0e.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685361418/icons8-npm-144_lorlyo.png" alt="logo"/>
           

           
           </div>
           <div className='logoCont'>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685361612/jsx_nv465o.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685361873/icons8-vs-code-144_kytwrz.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685362032/icons8-rest-api-100_npjfcn.png" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685362236/icons8-networking-manager-100_gv17qs.png" alt="logo"/>
           <img className='nxtjs' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685362477/5741154_1_xwqnzs.jpg" alt="logo"/>
           <img className='imgSize' src="https://res.cloudinary.com/dcbgett3c/image/upload/v1685362600/2794209_1_v314jw.jpg" alt="logo"/>
           

           
           </div>
           <p className='para'>Skills: HTML, CSS, Javascript, React Js, Next Js, Bootstrap,
Python, SQL, Node Js, Express Js, Git Hub, Node package Managment,
JSX,<br/> VS Code, Restful API, Route, UI UX, DataBase.
 </p>
        </div>
       
 
</div>


export default Skills