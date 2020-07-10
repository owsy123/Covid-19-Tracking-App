import React from 'react'
import {Cards,Chart,CountryPicker,Header} from './components'
import styles from './App.module.css'
// import Slider from './components/slider/slider'
import { FetchData } from './api'


class App extends React.Component {
    state={
        data:{},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await FetchData()

        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await FetchData(country)

        this.setState({data : fetchedData, country:country})        
    }

    render() {
        const { data,country }=this.state
        return (
            <div className={styles.container}>
                <Header/>
                {/* <Slider/> */}
                <Cards data={data}/> 
                <CountryPicker className={styles.cpicker} handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>

            </div>
        )
    }
}
export default App