import React, { forwardRef } from 'react'
import TicketTile from '../TicketTile/TicketTile'

const TicketTileList = (props, ticketsContainerRef) => {
    const { maxHeight, isOverflowingY, lists, grouping, icons, userHeaders, priorityHeaders } = props
    return (
        <div ref={ticketsContainerRef} style={{
            maxHeight: maxHeight,
            overflowY: isOverflowingY ? 'auto' : 'hidden'
        }} className='tickets-container-main'>
            {
                lists.length > 0 &&
                lists.map((item, index) => {
                    return (
                        <TicketTile
                            userAvailable={grouping !== "User" ? userHeaders[item.userId]?.available : false}
                            grouping={grouping}
                            userIcon={icons.User[userHeaders[item.userId].name]}
                            statusIcon={icons.Status[item.status]}
                            priorityIcon={icons.Priority[priorityHeaders[item.priority].name]}
                            key={index}
                            title={item.title}
                            id={item.id}
                            tag={item.tag}
                            status={item.status}
                            priority={item.priority} />
                    )
                })
            }

        </div>
    )
}

export default forwardRef(TicketTileList)