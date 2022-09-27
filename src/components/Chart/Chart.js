import ChartBar from "./ChartBar";
import './Chart.css'

const Chart =(props)=>{
    // to represent max value 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div>
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar
                key= {dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label = {dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;
