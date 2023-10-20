import React, { useRef } from 'react'
import TicketTileList from '../TicketTileList/TicketTileList'
import TicketsContainerHeader from '../TicketsContainerHeader/TicketsContainerHeader'
import useOverflowCheck from '../../customHooks/useOverflowCheck'
import useResponsiveMaxHeight from '../../customHooks/useResponsiveMaxHeight'
import './TicketsContainer.css'
import { useSelector } from 'react-redux'

const TicketsContainer = (props) => {

    const { lists, title, grouping, titleKey } = props
    const ticketsContainerRef = useRef();
    const icons = useSelector(state => state.images)
    const priorityHeaders = useSelector(state => state.Priority.headers)
    const userHeaders = useSelector(state => state.User.headers)
    const { isOverflowingY } = useOverflowCheck(ticketsContainerRef);
    const maxHeight = useResponsiveMaxHeight(ticketsContainerRef);

    return (
        <div style={{ width: "fit-content" }}>
            <TicketsContainerHeader
                userAvailable={grouping === "User" ? userHeaders[titleKey]?.available : false}
                grouping={grouping}
                imgSrc={icons[grouping][title]}
                title={title}
                count={lists.length}
            />
            <TicketTileList
                ref={ticketsContainerRef}
                maxHeight={maxHeight}
                isOverflowingY={isOverflowingY}
                lists={lists}
                grouping={grouping}
                icons={icons}
                userHeaders={userHeaders}
                priorityHeaders={priorityHeaders}
            />
        </div>
    )
}

export default TicketsContainer