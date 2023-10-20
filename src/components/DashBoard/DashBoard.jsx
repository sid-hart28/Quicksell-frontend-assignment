import React, { useEffect, useRef } from 'react'
import './DashBoard.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeDisplayData} from '../../slices/displaySlice'
import useOverflowCheck from '../../customHooks/useOverflowCheck'
import TicketsContainer from '../TicketsContainer/TicketsContainer'

const DashBoard = () => {

    const mainRef = useRef();

    const dispatch = useDispatch();
    const { isOverflowingX } = useOverflowCheck(mainRef);
    const grouping = useSelector(state => state.display.grouping);
    const data = useSelector(state => state[grouping].tickets);
    const headers = useSelector(state => state[grouping].headers);
    const displayData = useSelector(state => state.display.displayData);
    const displayHeaders = useSelector(state => state.display.displayHeaders);

    useEffect(() => {
        dispatch(changeDisplayData({ displayHeaders: headers, displayData: data }));
    }, [data, grouping, headers, dispatch])

    return (
        <div
            ref={mainRef}
            className='main-container'
            style={{
                overflow: isOverflowingX ? 'auto' : 'hidden'
            }}
        >
            <>
                {
                    displayData &&
                    Object.keys(displayData).map((key, index) => {
                        return <TicketsContainer
                            titleKey={key}
                            grouping={grouping}
                            key={index}
                            lists={displayData[key]}
                            title={displayHeaders[key].name}
                        />
                    })
                }
            </>
        </div>
    )
}

export default DashBoard