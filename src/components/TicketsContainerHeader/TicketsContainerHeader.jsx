import React from 'react'
import './TicketsContainerHeader.css'
import { BsThreeDots } from "react-icons/bs";
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';


const TicketsContainerHeader = (props) => {
    const { title, count, imgSrc, grouping, userAvailable } = props;
    return (
        <div className='ticket-container-header-container'>
            <div className='ticket-container-header'>
                {grouping !== "User" ?
                    <img loading='lazy' style={{ width: '20px', height: '20px' }} src={imgSrc} alt="title" />
                    :
                    <ProfilePhoto userAvailable={userAvailable} imgSrc={imgSrc}/>
                }
                <h1 className='ticket-container-header-title' >{title}</h1>
                <h1 className='ticket-container-header-count'>{count}</h1>
            </div>
            <div className='ticket-container-header'>
                <h1 className='ticket-container-header-plus'>+</h1>
                <BsThreeDots />
            </div>
        </div>
    )
}

export default TicketsContainerHeader