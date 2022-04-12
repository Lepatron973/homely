import React from 'react';
import { Link } from 'react-router-dom';
import { setPrevButton } from '../config/utilities';

const Home = ({content}) => {
    setPrevButton();
    const setActiveTab = (e)=>{
        let activeTab = document.querySelectorAll('.active');
        activeTab = Array.from(activeTab)
        activeTab.map(tab=>tab.classList.remove("active"))
        e.target.classList.add("active")
    }
    return (
        <div className='container'>
            <nav>
                <div className="nav nav-tabs mt-3" id="nav-tab" role="tablist">
                               
                    <button className={`nav-link active`} id="nav-general-tab" onClick={setActiveTab} data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true"><Link to="/">Général</Link></button>
                    <button className={`nav-link `} id="nav-statistic-tab" onClick={setActiveTab} data-bs-toggle="tab" data-bs-target="#nav-statistic" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><Link to="/stats">Statistique</Link></button>
                    {/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
                </div>
            </nav>
            {content}
        </div>
    );
};

export default Home;