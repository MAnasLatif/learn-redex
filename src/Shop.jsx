import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreaters } from './state';

export default function Shop() {
    const balance = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreaters, dispatch);
    return (
        <div>
            <h2>Deposit/Witdraw Money</h2>
            <button className='btn btn-primary mx-2' onClick={() => withdrawMoney(100)}>-</button>
            Update Balance ({balance})
            <button className='btn btn-primary mx-2' onClick={() => depositMoney(100)}>+</button>
        </div>
    )
}
