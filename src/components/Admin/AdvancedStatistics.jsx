import React, {useEffect, useState} from 'react';

const AdvancedStatistics = () => {
    const [statistic] = useState([
        {
                clicks: [
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                ],
                buys: [
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                ]
            },
        {
                clicks: [
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                    {
                        date: '22.10.2023'
                    },
                ],
                buys: [
                    {
                        date: '22.10.2023'
                    },
                ]
            },
    ])
    const [clicks, setClicks] = useState(0);
    const [buys, setBuys] = useState(0);
    const [conversion, setConversion] = useState(0);

    useEffect(() => {
        statistic.forEach((parent) => {
            setClicks((state) => state += parent.clicks.length);
            setBuys((state) => state += parent.buys.length);
        })
    },[])

    useEffect(() => {
        if(clicks && buys) {
            setConversion((buys / clicks) * 100)
        }
    },[clicks, buys])

    return (
        <div>
            AdvancedStatistics
            <p>Clicks {clicks}</p>
            <p>Buys {buys}</p>
            <p>Conversion {conversion.toFixed(1)}%</p>
        </div>
    );
};

export default AdvancedStatistics;