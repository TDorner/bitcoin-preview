
import * as React from "react";
import {ChangeEvent, Fragment, FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {bitcoinToFiat} from "bitcoin-conversion";
import 'react-dropdown/style.css';
import './styles.css';

interface IProps {}

const Profile: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const [inputState, setInput] = useState<number>(0);
    const [outputState, setOutput] = useState<number>(0);
    
    const onChangeInput = async (_input: string): Promise<void> => {
        if(_input === '')
            setInput(0);
        else
            setInput(parseInt(_input));
        
        localStorage.bitcoin = _input;
        
        const output: number = await bitcoinToFiat(inputState, 'EUR')
        setOutput(output);
    }
    
    useEffect(() => {
        let localBitcoin: string = '';
        if (localStorage.bitcoin)
            localBitcoin = localStorage.bitcoin;
        
        onChangeInput(localBitcoin);
    })
    
    return (
        <div className={'profileContainer'}>
            <h1>My Bitcoins</h1>
            <input
                className={'profileInput'}
                placeholder={'1 Bitcoin'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)}
                value={inputState.toString()}/>
            <input
                className={'profileInput'}
                disabled
                value={outputState.toFixed(2)}/>
        </div>
    );
}

export default Profile;