import { PieChart, Pie, Cell, Legend } from 'recharts';
import { useLoaderData } from "react-router-dom";
import { getItems } from "../utility/Storage";

const Statistics = () => {
  const cards = useLoaderData();

  const totalPrice = cards.reduce((total, card) => {
    if (getItems().includes(card.id)) { 
        return total + card.price;  
    }
    return total;
  }, 0);

  const data = cards.reduce((result, card) => {
    if (getItems().includes(card.id)) {
      const percentage = (card.price / totalPrice) * 100;
      result.push({ name: card.category, value: percentage });
    }
    return result;
  }, []);


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; 
  const RADIAN = Math.PI / 180;
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const a = cx + radius * Math.cos(-midAngle * RADIAN);
    const b = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={a} y={b} fill="white"  
            textAnchor={a > cx ? 'start' : 'end'}  dominantBaseline="central" >

      {`${(percent * 100).toFixed(0)}%`}
      </text>
    )};



  return (
    <div className='justify-center flex'>


      <PieChart width={400} height={400}>

        <Pie  data={data}  dataKey="value"   cx="50%" cy="50%"  labelLine={false}   label={renderLabel}  >
          {data.map((entry, index) => ( <Cell key={index} fill={COLORS[index % COLORS.length]} />  ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
