import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  labels: string[]
  datas: number[]
  backgroundColors: string[]
}

const SendingRuleChart = ({ labels, datas, backgroundColors }: Props) => {
  return (
    <div className="">
      <Pie
        data={{
          labels,
          datasets: [
            {
              data: datas,
              backgroundColor: backgroundColors,
              borderWidth: 0,
            },
          ],
        }}
      />
    </div>
  )
}

export default SendingRuleChart
