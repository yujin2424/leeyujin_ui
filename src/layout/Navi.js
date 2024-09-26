import React,{useContext} from 'react';
import { NavLink} from 'react-router-dom';
import {DataContext} from '../App';
import { FaAtlassian } from "react-icons/fa6";

const Navi = () => {
    const {data, loading}=useContext(DataContext)

    if(loading){
    return <h1 className='loading'>데이터 로드 중 입니다</h1>
    }
    const categories = [...new Set(data.map((item)=>item.RCP_PAT2))];
    const activeStyle={
        color:'#fff',
        textShadow:'2px 2px 5px #fff'
    }
    return(
        <nav className='nav'>
            <div className='inner'>
                <h1 className="logo"><FaAtlassian /></h1>
                <ul className='menu'>
                    <li><NavLink to="/" style={({isActive})=>(isActive?activeStyle:undefined )}>Home</NavLink></li>
                    {
                        categories.map((category) => (
                            <li key={category}>
                                <NavLink to={`category/${category}`}style={({isActive})=>(isActive?activeStyle:undefined )}>{category}</NavLink>
                            </li>
                        ))                       
                    }
                </ul>
            </div>
        </nav>
    );
           
    
};

export default Navi;