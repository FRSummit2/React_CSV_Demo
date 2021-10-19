import React from 'react'
import { Boxplot, computeBoxplotStats } from 'react-boxplot'

class Plot extends React.Component {
    render() {
        const values = [
            14,
            15,
            16,
            16,
            17,
            17,
            17,
            17,
            17,
            18,
            18,
            18,
            18,
            18,
            18,
            19,
            19,
            19,
            20,
            20,
            20,
            20,
            20,
            20,
            21,
            21,
            22,
            23,
            24,
            24,
            29,
        ]

        return (
            <>
                <Boxplot
                    width={400}
                    height={25}
                    orientation="horizontal"
                    min={0}
                    max={300}
                    stats={{
                        whiskerLow: 194.3,
                        quartile1: 201,
                        quartile2: 234.5,
                        quartile3: 254.6,
                        whiskerHigh: 257.95,
                        outliers: [50, 75, 184.25, 268, 290],
                    }}
                />
            </>
        )
    }
}

export default Plot