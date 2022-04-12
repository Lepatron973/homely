import React from 'react';
import { setPrevButton } from '../config/utilities';
import ButtonAdd from './ButtonAdd';

const List = ({content}) => {
    setPrevButton();
    return (
        <div id='list' className='container'>
            {content}
            <ButtonAdd />
        </div>
    );
};

export default List;