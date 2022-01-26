
import * as React from "react";
import {Fragment, FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {Digital} from "react-activity";
import './styles.css';

interface IProps {}

const Details: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const [loading, setLoading] = useState<boolean>(false);
    
    const [marketcapState, setMarketcap] = useState<number>(0);
    const [totalbcState, setTotalbc] = useState<number>(0);
    const [hrtransactioncountState, setHrtransactioncount] = useState<number>(0);
    const [hrbtcsentState, setHrbtcsent] = useState<number>(0);
    const [hashrateState, setHashrate] = useState<number>(0);
    const [getdifficultyState, setGetDifficulty] = useState<number>(0);
    
    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                let response;
                let responsejson;
                
                response = await fetch('https://blockchain.info/q/marketcap')
                responsejson = await response.json()
                setMarketcap(responsejson);
    
                response = await fetch('https://blockchain.info/q/totalbc')
                responsejson = await response.json()
                setTotalbc(responsejson);
    
                response = await fetch('https://blockchain.info/q/24hrtransactioncount')
                responsejson = await response.json()
                setHrtransactioncount(responsejson);
    
                response = await fetch('https://blockchain.info/q/24hrbtcsent')
                responsejson = await response.json()
                setHrbtcsent(responsejson);
    
                response = await fetch('https://blockchain.info/q/hashrate')
                responsejson = await response.json()
                setHashrate(responsejson);
    
                response = await fetch('https://blockchain.info/q/getdifficulty')
                responsejson = await response.json()
                setGetDifficulty(responsejson);
                
                setLoading(false);
            }
            catch (e: unknown) {
                console.log('Fetching error', e)
            }
        })();
    }, [])
    
    return (
        <Fragment>
            <h1>
                Bitcoin Details
            </h1>
                <div>
                    <div className={'detailItem'}>
                        <h3>
							Marketcap:
                            {loading ?
                                <Digital /> :
                                <p> {marketcapState} </p>
                            }
						</h3>
                        <p>USD market cap (based on 24 hour weighted price)</p>
                    </div>
                    <div className={'detailItem'}>
                        <h3>
                            Total Bitcoins:
                            {loading ?
                                <Digital /> :
                                <p> {totalbcState} </p>
                            }
                        </h3>
                        <p>Total Bitcoins in circulation (delayed by up to 1 hour)</p>
                        
                    </div>
                    <div className={'detailItem'}>
                        <h3>
                            24 Hours Transaction Count:
                            {loading ?
                                <Digital /> :
                                <p> {hrtransactioncountState} </p>
                            }
                        </h3>
                        <p>Number of transactions in the past 24 hours</p>
                    </div>
                    <div className={'detailItem'}>
                        <h3>
                            24 Hours Bitcoins Sent:
                            {loading ?
                                <Digital /> :
                                <p> {hrbtcsentState} </p>
                            }
                        </h3>
                        <p>Number of btc sent in the last 24 hours (in satoshi)</p>
                    </div>
                    <div className={'detailItem'}>
                        <h3>
                            Hashrate:
                            {loading ?
                                <Digital /> :
                                <p> {hashrateState} </p>
                            }
                        </h3>
                        <p>Estimated network hash rate in gigahash</p>
                    </div>
                    <div className={'detailItem'}>
                        <h3>
                            Get Difficulty:
                            {loading ?
                                <Digital /> :
                                <p> {getdifficultyState} </p>
                            }
                        </h3>
                        <p>Current difficulty target as a decimal number</p>
                    </div>
                </div>
        </Fragment>
    );
}

export default Details;