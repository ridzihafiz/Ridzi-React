import React, { Component } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent: true
    }
    
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState ({
        //         showComponent: false
        //     })
        // }, 15000);
    }

    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="Tutorial JS" 
                    desc="Belajar javascript dari 0"/>
                <YouTubeComp 
                    time="5.37" 
                    title="What is Dev Ops" 
                    desc="Memahami bekerja sebagai dev ops seperti apa"/>
                <YouTubeComp 
                    time="4.18" 
                    title="Upah Minimum React" 
                    desc="Mengintip gaji programmer react"/>
                <YouTubeComp 
                    time="9.10" 
                    title="Bootcamp is needed?"
                    desc="Belajar bootcamp lebih efektif"/>
                <YouTubeComp/> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                } */}
                <p>Ridzi Blog</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;