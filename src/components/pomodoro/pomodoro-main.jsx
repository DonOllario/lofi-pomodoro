
import {useState} from "react";

import Timer from "./timer";
import Settings from "./settings";
import SettingsContext from "./settings-context";

import './pomodoro-main.css'

function PomodoroMain() {
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);


    return(
        <div className="pomodoro-main">
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes,
            }}>
                {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
         </div>
    );
}

export default PomodoroMain;