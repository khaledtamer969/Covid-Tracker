import React from 'react';
import style from'./App.module.css';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import { fetchData } from './api';
import cx from 'classnames';

class App extends React.Component {
  state={
    data:{},
    country:'',
  }
 async componentDidMount (){
const fetchedData = await fetchData();
this.setState({data: fetchedData});
  }
  handleCountryChange=async(country)=>{
    const fetchedData =await fetchData(country);
    this.setState({data: fetchedData, country:country});
  }
  render(){
    const{ data ,country } =this.state;
  return (
    
    <div  className={cx(style.App,style.container)}>
   <Cards data={data}/>
   <CountryPicker handleCountryChange={this.handleCountryChange}/>
   <Chart data={data} country={country}/>
 
    </div>
    
  );
}
}
export default App;
