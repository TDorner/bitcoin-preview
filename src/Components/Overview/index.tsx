
import * as React from "react";
import {Fragment, FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {CurrencyType} from "../../Common/CommonTypes";
import { Digital } from "react-activity";
import "react-activity/dist/Digital.css";
import './styles.css';

interface IProps {}

const Overview: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [dataPriceState, setDataPriceState] = useState<CurrencyType[]>([]);
    
    useEffect(() => {
        setLoading(true);
        fetch('https://blockchain.info/ticker')
            .then((data: Response) => data.json())
            .then((json) => {
                setDataPriceState(json);
                setLoading(false);
            })
    }, [])
    
    return (
        <Fragment>
            <h1>
                Price Overview
            </h1>
            {loading ?
                <Digital /> :
                <div>
                    {Object.values(dataPriceState).map((currency: CurrencyType, id: number) => {
                        return <div className={'overviewItem'} key={id}>
                            <p className={'overviewItemSymbol'}>{currency.symbol}</p>
                            <p>Buy: {currency.buy}</p>
                            <p>Sell: {currency.sell}</p>
                        </div>
                    })}
                </div>
            }
        </Fragment>
    );
}

export default Overview;