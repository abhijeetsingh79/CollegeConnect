import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Student({value}){
    const navigate = useNavigate();

    // naviagate to login after 6 secs
    // const handleNaviagte=async()=>{
    //     await new Promise((res)=>setTimeout(res, 6000));
    //     navigate("/login")
    // }
    
    // useEffect(()=>{
    //     if(value==false){
    //         handleNaviagte();
    //     }
        
    // },[value])

    // branches 
    const branches = {
        Btech: ["CSE", "IT", "AI & ML", "Data Science", "ECE", "Mechanical", "Civil"],
        BCA: ["General", "Data Science", "AI", "Cloud Computing", "Cyber Security"],
        BBA: ["Finance", "Marketing", "HRM", "Business Analytics"],
        Bcom: ["General", "Accounting and Finance", "Banking", "Taxation"],
        BA: ["English", "Economics", "Psychology", "History"],
        "B.Sc": ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        MCA: ["General", "AI & ML", "Data Science", "Cyber Security"],
        MBA: ["Finance", "Marketing", "HRM", "Operations", "Business Analytics"]
    };

    const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Computer Science",
    "Programming",
    "Data Structures",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Statistics",
    "Economics",
    "Business Management",
    "Financial Accounting",
    "Marketing",
    "Communication Skills",
    "Environmental Studies",
    "Cyber Security",
    "Software Engineering",
    "Digital Electronics",
    "Entrepreneurship"
];


const interests = [
    "Web Development",
    "App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Competitive Programming",
    "Cyber Security",
    "Cloud Computing",
    "Gaming",
    "Robotics",
    "Entrepreneurship",
    "Business",
    "Finance",
    "Marketing",
    "Graphic Designing",
    "UI/UX Designing",
    "Photography",
    "Video Editing",
    "Content Creation",
    "Music",
    "Dancing",
    "Singing",
    "Sports",
    "Fitness",
    "Reading",
    "Public Speaking",
    "Volunteering",
    "Travelling",
    "Research",
    "Startups"
];

    const [collegeEmail, setCollegeEmail] = useState("");
    const [universityRollNo, setUniversityRollNo] = useState("")
    const [collegeName, setCollegeName] = useState("")

    const [course, setCourse] = useState("");
    const [branchh, setBranch] = useState("");
    const [semester, setSemester] = useState("")
    const [subject, setSubject] = useState([]);

    const [interest, setInterest] = useState([]);

    const handleSubjects=(e)=>{
        if(e.target.checked){
            setSubject([...subject, e.target.value])
        } else{
            setSubject(subject.filter((su)=>su!=e.target.value))
        }
    }


    const handleInterest=(e)=>{
        if(e.target.checked){
            setInterest([...interest, e.target.value])
        } else{
            setInterest(interest.filter((i)=>i!=e.target.value))
        }
    }

    return(
        <div className="student-container">
            <div className={value==false? "student-content-blue": "show-studnet-content"}>
                <div>
                    <h2>Personal Information: </h2>
                    <h4>Full Name : {value.fullname}</h4>
                    <h4>User Name: {value.username}</h4>
                    <input type="text" value={collegeEmail} placeholder="Enter Your College Email" onChange={(e)=> setCollegeEmail(e.target.value)}/>
                    <input type="text" value={universityRollNo} placeholder="Enter University RollNo" onChange={(e)=> setUniversityRollNo(e.target.value)}/>
                    <input type="text" value={collegeName} placeholder="Enter College Name" onChange={(e)=> setCollegeName(e.target.value)}/>
                    {collegeEmail}<br/> {universityRollNo}<br/> {collegeName}
                </div>

                <div>
                    <h2>Academic Information :</h2>
                    <label htmlFor="course">Select your course</label>
                    <select name="" id="" value={course} onChange={(e)=>{setCourse(e.target.value); setBranch("")}}>
                        <option value="" disabled>Select Your Course</option>
                        <option value="Btech">Btech</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="Bcom">Bcom</option>
                        <option value="BA">BA</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                    </select>

                    <select name="" id="" value={branchh} onChange={(e)=>setBranch(e.target.value)}>
                    <option value="" disabled>Select Your Branch</option>
                    {
                        course!=""?
                        branches[course].map((branch)=>(
                            <option key={branch} value={branch}>{branch}</option>
                        ))
                        :null
                    }
                    </select>

                    <select name="" id="" value={semester} onChange={(e)=>setSemester(e.target.value)}>
                        <option value="" disabled>Select Your Semester</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                        <option value="Semester 3">Semester 3</option>
                        <option value="Semester 4">Semester 4</option>
                        <option value="Semester 5">Semester 5</option>
                        <option value="Semester 6">Semester 6</option>
                        <option value="Semester 7">Semester 7</option>
                        <option value="Semester 8">Semester 8</option>
                    </select>

                    

                    {
                        subjects.map((sub)=>(
                            <label htmlFor={`academic-${sub}`} key={sub}>
                                <input type="checkbox" name="" id={`academic-${sub}`} value={sub} onChange={handleSubjects}/>{sub}
                            </label>
                        ))
                    }
                    <br /><br />
                    {subject}
                    
                </div>


                <div>
                    <h2>Your Interest: </h2>
                    {
                        interests.map((intr)=>(
                            <label htmlFor={`interest-${intr}`} key={intr}>
                            <input type="checkbox" value={intr} id={`interest-${intr}`} onChange={handleInterest} />{intr}
                        </label>
                        ))
                    } <br /><br />
                    {interest}

                </div>
            </div>

            {
                value==false? 
                <div className="student-not-logged-in">
                    <h2>Login First</h2>
                    <p>Please login to access CollegeConnect.</p>
                    <button onClick={() => navigate("/Login")}>Login</button>
                </div>
                :null
            }

        </div>
    )
}