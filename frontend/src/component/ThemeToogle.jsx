import { useState,useEffect } from "react";

export default function ThemeToggle(){

    if(localStorage.getItem('theme')==null){
        localStorage.setItem('theme', 'light');
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const switchTheme = ()=>{
        if(theme=='light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    },[theme])

    return(
        <div>
            <button onClick={switchTheme} className="theme-toggle">{theme=='dark'?"🔆":"🌙"}</button>
        </div>
    )
}