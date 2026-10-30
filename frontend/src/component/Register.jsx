import { useEffect, useState } from "react"

export default function Register(){

    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [name, setName] = useState("");

    // error validation state
    const [errorName, setErrorName] = useState("false");
    const [errorPass, setErrorPass] = useState("false");
    const [errorUser, setErrorUser] = useState("false");

    useEffect(()=>{
        // username
        let noCaptial = 0;
        let digits = 0;
        let firstNotdigit =true;

        for(let i=0; i<userName.length; i++){
            let ch = userName[i];
            if(ch.toLowerCase()!==ch  && !(ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='10'||ch=='0')){
                noCaptial++;
            }
            if(ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='10'||ch=='0'){
                digits++;
                if(i==0){
                    firstNotdigit = false;
                }
            }
            
        }

        if(userName!=""){
            if(noCaptial > 0){
            setErrorUser("Cannot have Captial as Username")
            } else if(digits==0){
                setErrorUser("Username should have a Digit")
            } else if(!firstNotdigit){
                setErrorUser("First letter cannot be a Digit")
            }
             else{
                setErrorUser("false")
            }
        } else{
            setErrorUser("false")
        }

        

        //passowrd
        let isCapital = false;
        let isSmall = false;
        let isDigit = false;
        let hasSpecialChar = false;

        for(let i=0; i<Password.length; i++){
            let ch = Password[i]
            if(ch.toLowerCase()!=ch  && !(ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='10'||ch=='0')){
                isCapital = true;
            } 
            if(ch.toLowerCase()==ch && !(ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='10'||ch=='0')){
                isSmall = true;
            }
            if(ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='10'||ch=='0'){
                isDigit = true;
            }

            let asccii = Password.charCodeAt(i);
            if((asccii>=32 && asccii<=47)||(asccii>=58 && asccii<=64)){
                hasSpecialChar = true;
            }
        }

        if(Password!=""){
            if(!isCapital){
            setErrorPass("Password should have a capital Letter");
            } else if(!isSmall){
                setErrorPass("Password should have a small Letter")
            } else if(!isDigit){
                setErrorPass("Password should have a Digit")
            } else if(!hasSpecialChar){
                setErrorPass("Password should have a Special Letter")
            } else{
                setErrorPass("false");
            }
        } else{
            setErrorPass("false");
        }

        //name

        let isValid = true;
        for(let i=0; i<name.length; i++){
            let asci = name.charCodeAt(i);
            if(!((asci>=65 && asci<=90) || (asci>=97 && asci<=122)|| asci==32)){
                isValid = false;
            }
        }
            if(name!=""){
                if(!isValid){
                    setErrorName("Invalid Name use Small and Captial letters only");
                } else{
                    setErrorName("false");
                }
            } else{
                setErrorName("false");
            }

     
    }, [userName, Password, name])

    return(
        <div className="register-contaner">
            <h2 className="register-text" >Register</h2>
            <input type="text" placeholder="Enter Your FullName" className="register-input" value={name} onChange={(e)=>setName(e.target.value)}/> 
            <input type="text" placeholder="Enter Your username" className="register-input" value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
            <input type="password" placeholder="Enter Your Password" className="register-input" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="register-button">SignUp</button>

            {
                errorName!="false"?<div className="register-error">{errorName}</div>:null
            }
            {
                errorUser!="false"?<div className="register-error">{errorUser}</div>:null
            }
            {
                errorPass!="false"?<div className="register-error">{errorPass}</div>:null
            }
            
            
        </div>
    )
}