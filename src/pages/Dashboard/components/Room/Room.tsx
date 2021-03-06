import React from 'react';
import {RoomModel, EnumRoomStatus, EnumRoomPriorityIndexs} from '../../../../models/Room/roomModel';

import {RoomStatusPicker} from './components/RoomStatusPicker';

export const Room : React.FC<RoomModel> = ({
    name = '1b',
    status = EnumRoomStatus.EMPTY,
    count,
    timer = '00:00',
    priorityIndex = EnumRoomPriorityIndexs.R
} : RoomModel) => {
    return (
        <li className="room">
            <div className="room__header">
                <div className="room__group">
                    <div className="room__name center">
                        {name}
                    </div>
                    <div className="room__priority-index center">
                        {priorityIndex}
                    </div>
                </div>
                <div className="room__time-in-room center">
                    {timer}
                </div>
            </div>
            <RoomStatusPicker
                status={status}
            />
        </li>
    )
}
