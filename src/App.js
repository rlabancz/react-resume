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
        case 'minimal':
            themeClass = 'minimal';
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
                theme === 'minimal' ?
                    <>
                        <Header theme={theme} data={data.profile}/>
                        <Contact theme={theme} data={data.profile}/>
                        <Section theme={theme} title="Work & Leadership Experience" body={<WorkExperience theme={theme} data={data.work}/>}/>
                        <Section theme={theme} title={`Education`} body={<Education theme={theme} data={data.education}/>}/>
                        <Section theme={theme} title={`Skills & Tools`} icon={`psychology`} body={<Skills theme={theme} data={data.skills}/>}/>
                        <Section theme={theme} title={`Notable Launches`} body={<Launches theme={theme} data={data.launches}/>}/>
                    </>
                    :
                    <div className={`fullPageContainer`}>
                        <div className={`leftSideContainer`}>
                            <Section body={<ProfilePicture theme={theme} data={data.profile}/>}/>
                            <Section title={`Contact`} icon={`person`} body={<Contact theme={theme} data={data.profile}/>}/>
                            <Section title={`Education`} icon={`school`} body={<Education theme={theme} data={data.education}/>}/>
                            <Section title={`Skills & Tools`} icon={`psychology`} body={<Skills theme={theme} showBar={false} data={data.skills}/>}/>
                            <Section title={`Notable Launches`} icon={`rocket_launch`} body={<Launches theme={theme} data={data.launches}/>}/>
                            <Section title={`Interests`} icon={`palette`} body={<Interests theme={theme} data={data.interests}/>}/>
                        </div>
                        <div className={`rightSideContainer`}>
                            <Header theme={theme} data={data.profile}/>
                            <div className={`rightSideContent`}>
                                {data.objective && data.objective !== '' ?
                                    <Section title="Objective" icon={`crisis_alert`} body={data.objective}/>
                                    : null}
                                <Section title="Work & Leadership Experience" icon={`work`} body={<WorkExperience theme={theme} data={data.work}/>}/>
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
