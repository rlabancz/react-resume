import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import './App.css';
import Section from "./components/Section";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ProfilePicture from "./components/ProfilePicture";
import WorkExperience from "./components/WorkExperience";
import Skills from './components/Skills';
import Interests from "./components/Interests";

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
        <div className={`print-mode print-border-`}>
            <div className={`print-border-`}></div>
            <div className={`print-border-`}></div>
            {data ?
                <div className={`fullPageContainer`}>
                    <div className={`leftSideContainer`}>
                        <Section body={<ProfilePicture data={data.profile}/>}/>
                        <Section title={`Contact`} icon={`person`} body={<Contact data={data.profile}/>}/>
                        <Section title={`Skills`} icon={`psychology`} body={<Skills data={data.skills}/>}/>
                        <Section title={`Education`} icon={`school`} body={<Education data={data.education}/>}/>
                        <Section title={`Languages`} icon={`translate`} body={<Skills data={data.languages}/>}/>
                        <Section title={`Interests`} icon={`palette`} body={<Interests data={data.interests}/>}/>
                    </div>
                    <div className={`rightSideContainer`}>
                        <Header data={data.profile}/>
                        <div className={`rightSideContent`}>
                            {data.objective && data.objective !== '' ?
                                <Section title="Objective" icon={`crisis_alert`} body={data.objective}/>
                                : null}
                            <Section title="Experience" icon={`work`} body={<WorkExperience data={data.work}/>}/>
                        </div>
                    </div>
                </div>
                :
                <div>loading</div>
            }
        </div>
    );
}

export default App;
