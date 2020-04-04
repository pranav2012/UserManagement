import React, { Component } from 'react';
import 'tachyons';
import Head from '../Components/Head';
import CardList from '../Components/CardList';
import Search from '../Components/Search';
import Scroll from '../Components/Scroll';
import ErrorBox from '../Containers/ErrorBox';

class App extends Component{
   constructor() {
        super()
        this.state={
            data: [],
            searched: '',
        }
    }

    componentDidMount(){
        fetch("https://my-json-server.typicode.com/pranav2012/UserManagement/users")
        .then(Response => Response.json())
        .then(json => {
            if(true){
                this.setState({data:json})
            }
        })
    }

    tsfunc = (event) => this.setState({searched:event.target.value})

    render(){
        const filterdata = this.state.data.filter(data=>{
           return data.name.toLowerCase().includes(this.state.searched.toLowerCase());
        })
        if(!this.state.data){
            return <h1>Loading....</h1>
        }
        else{
            return(
                <div className='tc'>
                    <Head/>
                    <Search sfunc={this.tsfunc}/>
                    <Scroll>
                        <ErrorBox>
                            <CardList dat={filterdata}/>
                        </ErrorBox>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
