import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import './App.css';
import Section from "./components/Section";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Launches from "./components/Launches";
import ProfilePicture from "./components/ProfilePicture";
import Skills from './components/Skills';
import WorkExperience from "./components/WorkExperience";

function App() {

    const queryParameters = new URLSearchParams(window.location.search);
    const theme = queryParameters.get("theme");

    let themeClass = '';
    switch (theme) {
        case 'basic':
            themeClass = 'simple';
            break;

        case 'print':
        case 'printer':
            themeClass = 'print-mode';
            break;
    }
    
    const [data, setData] = useState(null);

    const getData=()=> {
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
        <div className={`${themeClass}`}>
            <div className={`${theme === 'printer' ? 'print-border-x' : ''}`}></div>
            <div className={`${theme === 'printer' ? 'print-border-y' : ''}`}></div>
            {data ?
                <div className={`fullPageContainer`}>
                    <div className={`leftSideContainer`}>
                        <Section body={<ProfilePicture data={data.profile}/>}/>
                        <Section title={`Contact`} icon={`person`} body={<Contact data={data.profile}/>}/>
                        <Section title={`Education`} icon={`school`} body={<Education data={data.education}/>}/>
                        <Section title={`Skills & Tools`} icon={`psychology`} body={<Skills showBar={false} data={data.skills}/>}/>
                        <Section title={`Notable Launches`} icon={`rocket_launch`} body={<Launches data={data.launches}/>}/>
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
