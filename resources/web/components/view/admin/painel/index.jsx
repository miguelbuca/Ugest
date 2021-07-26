import React from 'react'

import Chart from '../../../layout/report'

export default function index() {
    return (
        <div className="painelContainer">
            <div className="cardTimeContainer">
                <div>
                    <Chart 
                        options={{
                            chart: {
                              id: 'apexchart-example'
                            },
                            xaxis: {
                              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                            }
                          }} 
                        series={{
                            name: 'series-1',
                            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                          }} 
                        type="bar" 
                        width={500} 
                        height={300} />
                </div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="cardTimeContainer">
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    )
}
