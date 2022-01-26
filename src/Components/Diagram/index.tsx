// Required
import * as React from "react";
import {Fragment, FunctionComponent, PropsWithChildren, useState} from "react";
import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip} from "recharts";

interface IProps {}

const Diagram: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [chartDataState, setChartData] = useState<any>({});
    
    const fallbackChartData: any = {
        "status":"ok",
        "name":"Transaction Rate",
        "unit":"Transactions Per Second",
        "period":"minute",
        "description":"The number of Bitcoin transactions added to the mempool per second.",
        "values":[
            {"x":1640132100,"y":4.0062500000000005},
            {"x":1640133900,"y":3.920833333333334},
            {"x":1640135700,"y":3.790625000000001},
            {"x":1640137500,"y":3.6760416666666673},
            {"x":1640139300,"y":3.519270833333334},
            {"x":1640141100,"y":3.3468750000000007},
            {"x":1640142900,"y":3.147395833333334},
            {"x":1640144700,"y":2.983333333333334},
            {"x":1640146500,"y":2.8515625000000004},
            {"x":1640148300,"y":2.7390625}
        ]
    };
    
    // useEffect(() => {
    //     (async (): Promise<void> => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json');
    //             const data = await response.json();
    //             console.log('DATA', data)
    //             setLoading(false);
    //         }
    //         catch (e) {
    //             console.log('Fetching error', e);
    //         }
    //     })()
    // }, [])
    
    return (
        <Fragment>
            <h1>Bitcoin Diagram</h1>
            <div>
                <LineChart width={500} height={300} data={fallbackChartData.values}>
                    <XAxis dataKey='x'/>
                    <YAxis dataKey='y'/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </div>
        </Fragment>
    );
}

export default Diagram;