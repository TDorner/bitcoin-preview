
import * as React from "react";
import {ChangeEvent, FunctionComponent, PropsWithChildren, useState} from "react";
import {fiatToBitcoin, SupportedCurrencies} from "bitcoin-conversion";
import Dropdown, {Option} from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.css';

interface IProps {}

const Converter: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const [inputState, setInput] = useState<number>(0);
    const [outputState, setOutput] = useState<number>(0);
    const [currencyState, setCurrency] = useState<string>('EUR')
    
    const onChangeInput = async (_input: string): Promise<void> => {
        if(_input === '')
            setInput(0);
        else
            setInput(parseInt(_input));
        
        const output: number = await fiatToBitcoin(_input, currencyState as SupportedCurrencies)
        setOutput(output);
    }
    
    const currencies: any = [
        { value: 'EUR', label: 'EUR' },
        { value: 'USD', label: 'USD' },
        { value: 'NZD', label: 'NZD' },
        { value: 'AUD', label: 'AUD' },
        { value: 'GBP', label: 'GBP' }
    ];
    
    const changeCurrencyType = async (_currency: string): Promise<void> => {
        // console.log(_currency)
        setCurrency(_currency);
    
        const output: number = await fiatToBitcoin(inputState, _currency as SupportedCurrencies)
        setOutput(output);
    }
    
    return (
        <div className={'converterContainer'}>
            <h1>Bitcoin Converter</h1>
            <div className={'converterTopRow'}>
                <input
                    className={'converterInput'}
                    placeholder={'1 Bitcoin'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)}
                    value={inputState.toString()}/>
                <Dropdown
                    options={currencies}
                    onChange={(option: Option) => changeCurrencyType(option.value.toString())}
                    value={currencyState}
                    placeholder="Select a currency" />
            </div>
            <input
                className={'converterInput'}
                disabled
                value={outputState.toFixed(5)}/>
        </div>
    );
}

export default Converter;