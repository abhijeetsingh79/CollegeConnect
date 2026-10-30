import { useEffect, useState } from "react"

export default function Register(){

    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [name, setName] = useState("");

    // error validation state
    const [errorName, setErrorName] = useState("false");
    const [errorPass, setErrorPass] = useState("false");
    const [errorUser, setErrorUser] = useState("false");

    // Register check
    const [check, setCheck] = useState("false")

    useEffect(()=>{
        // username
        let noCaptial = 0;
        let digits = 0;
        let firstNotdigit =true;
        let countUserDigits =0;

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
            countUserDigits++;
            
        }

        if(userName!=""){
            if(noCaptial > 0){
            setErrorUser("Cannot have Captial as Username")
            } else if(digits===0){
                setErrorUser("Username should have a Digit")
            } else if(!firstNotdigit){
                setErrorUser("First letter cannot be a Digit")
            } else if(countUserDigits<6){
                setErrorUser("Username cannot be less than 6 chars")
            }
             else{
                setErrorUser("false")
            }
        } else{
            setErrorUser("cannot use")
        }

        

        //passowrd
        let isCapital = false;
        let isSmall = false;
        let isDigit = false;
        let hasSpecialChar = false;
        let countPassLetter = 0;

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
            countPassLetter++;
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
            } else if(countPassLetter<8){
                setErrorPass("Password should have atleast 8 chars")
            } else{
                setErrorPass("false");
            }
        } else{
            setErrorPass("cannot use");
        }

        //name

        let isValid = true;
        let countName = 0;
        for(let i=0; i<name.length; i++){
            let asci = name.charCodeAt(i);
            if(!((asci>=65 && asci<=90) || (asci>=97 && asci<=122)|| asci==32)){
                isValid = false;
            }
            countName++;
        }
            if(name!=""){
                if(!isValid){
                    setErrorName("Invalid Name use Small and Captial letters only");
                } else if(countName<3){
                    setErrorName("Name too Short")
                } else{
                    setErrorName("false");
                }
            } else{
                setErrorName("cannot use");
            }

     
    }, [userName, Password, name])

    const checkRegister = async()=>{
        if(errorName=="false" && errorPass=="false" && errorUser =="false"){
            if(localStorage.getItem("users")==null){
                localStorage.setItem("users",JSON.stringify([]))
            }

            let userss = JSON.parse(localStorage.getItem("users"))  // array a gayi
            const obj = {
                "fullname": name,
                "username": userName,
                "password": Password
            }
            userss.push(obj);

            localStorage.setItem("users", JSON.stringify(userss));

            setCheck("Registered Sucessfully")
            await new Promise((res)=>setTimeout(res, 2000));
            setCheck("false")

        } else{
            setCheck("Register Failed")
            await new Promise((res)=>setTimeout(res, 2000));
            setCheck("false")
        }
    }

    return(
        <div className="register-contaner">
            <h2 className="register-text" >Register</h2>
            <input type="text" placeholder="Enter Your FullName" className="register-input" value={name} onChange={(e)=>setName(e.target.value)}/> 
            <input type="text" placeholder="Enter Your username" className="register-input" value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
            <input type="password" placeholder="Enter Your Password" className="register-input" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="register-button" onClick={checkRegister}>SignUp</button>

            {
                errorName!="false" && errorName!="cannot use"?<div className="register-error">{errorName}</div>:null
            }
            {
                errorUser!="false" && errorUser!="cannot use"?<div className="register-error">{errorUser}</div>:null
            }
            {
                errorPass!="false" && errorPass!="cannot use"?<div className="register-error">{errorPass}</div>:null
            }

            {
                check=="Registered Sucessfully"?<div className="register-sucessfull">{check}</div>:null
            }
            
            {
                check=="Register Failed"? <div className="register-unsucessfull">{check}</div>:null
            }
            
        </div>
    )
}