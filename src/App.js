import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import './App.css';
import Section from "./components/Section";

import Contact from "./components/Contact";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import styles from './styles.css';

function App() {

    const [data, setData] = useState(null);

    const getData=()=>{
        fetch('data/rlabancz.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function(response){
                return response.json();
            })
            .then(function(response) {
                setData(response);
            });
    };

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="Page">
            {data ?
                <div className={`fullPageContainer`}>
                    <div className={`leftSide`}>
                        <Section title={`Contact`} icon={`person`} body={<Contact data={data.profile}/>}/>
                        <Section title={`Skills`} icon={`psychology`}/>
                        <Section title={`Education`} icon={`school`} body={<Education data={data.education}/>}/>
                        <Section title={`Awards`} icon={`award_star`}/>
                    </div>
                    <div className={`rightSide`}>
                        <Header data={data.profile}/>
                        <Section title="Experience" icon={`work`} body={<WorkExperience data={data.work}/>}/>
                    </div>
                </div>
                :
                <div>loading</div>
            }
        </div>
    );
}

export default App;
