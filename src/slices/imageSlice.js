import { createSlice } from "@reduxjs/toolkit";
import Todo from '../assets/icons/todo.svg';
import InProgress from '../assets/icons/in_progress.svg';
import Done from '../assets/icons/done.svg';

import Low from '../assets/icons/low_priority.svg';
import Medium from '../assets/icons/medium_priority.svg';
import Urgent from '../assets/icons/urgent.svg';
import NoPriority from '../assets/icons/no_priority.svg';
import High from '../assets/icons/high_priority.svg';

import Img1 from '../assets/pics/img1.jpg';
import Img2 from '../assets/pics/img2.jpg';
import Img3 from '../assets/pics/img3.jpg';
import Img4 from '../assets/pics/img4.jpg';
import Img5 from '../assets/pics/img5.jpg';

const initialState = {
    "Status": {
        "Todo": Todo,
        "In progress": InProgress,
        "Backlog": Done
    },
    "User": {
        "Anoop sharma": Img1,
        "Yogesh": Img2,
        "Shankar Kumar": Img3,
        "Ramesh": Img4,
        "Suresh": Img5,
    },
    "Priority": {
        "High": High,
        "Low": Low,
        "Medium": Medium,
        "Urgent": Urgent,
        "No Priority": NoPriority
    }
}

export const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {

    }
})

export default imageSlice.reducer