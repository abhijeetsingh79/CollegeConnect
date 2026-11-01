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

                <div className="student-intro">
                    <h2 className="student-header">Complete Your Student Profile</h2>
                    <span>Fill in your details to personalise your CollegeConnect experience</span>
                </div>


                <div className="student-card">
                    <h2 className="section-heading">Personal Information: </h2>
                    <span>Your basic details</span>

                    <div className="form-grid">

                        <div className="form-group">
                    <h4>Full Name : {value?.fullname}</h4>
                    </div>
                    <div className="form-group">
                    <h4>User Name: {value?.username}</h4>
                    </div>

                    <div className="form-group">
                        <label htmlFor="collegeEmailget">College Email</label>
                    <input type="email" id="collegeEmailget" value={collegeEmail} placeholder="College Email" onChange={(e)=> setCollegeEmail(e.target.value)}/>
                        
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="UniversityRollNumber">University Roll Number</label>
                    <input type="text" value={universityRollNo} id="UniversityRollNumber" placeholder="University Roll Number" onChange={(e)=> setUniversityRollNo(e.target.value)}/>
                        
                    </div>

                    <div className="form-group">
                    <label htmlFor="collegeNameget">College Name</label>
                    <input type="text" id="collegeNameget" value={collegeName} placeholder="College Name" onChange={(e)=> setCollegeName(e.target.value)}/>
                    
                    </div>
                    {/* {collegeEmail}<br/> {universityRollNo}<br/> {collegeName}   */}
                    

                    </div>

                </div>
                <div className="section-save">
                    <button className="section-save-button">Save</button>
                </div>

                <div className="student-card">
                    <h2 className="section-heading">Academic Information :</h2>
                    <span>Tell us about your current studies.</span>
                    
                    <div className="form-grid">
                    
                    <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <select name="" id="course" value={course} onChange={(e)=>{setCourse(e.target.value); setBranch("")}}>
                        <option value="" disabled={!course}>Choose your course</option>
                        <option value="Btech">Btech</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="Bcom">Bcom</option>
                        <option value="BA">BA</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                    </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="branch">Branch / Specialisation</label>
                    <select name="" id="branch" value={branchh} onChange={(e)=>setBranch(e.target.value)}>
                    <option value="" disabled={!branchh}>Choose your branch</option>
                    {
                        course!=""?
                        branches[course].map((branch)=>(
                            <option key={branch} value={branch}>{branch}</option>
                        ))
                        :null
                    }
                    </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="semester">Current Semester</label>
                    <select name="" id="semester" value={semester} onChange={(e)=>setSemester(e.target.value)}>
                        <option value="" disabled={!semester}>Choose your semester</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                        <option value="Semester 3">Semester 3</option>
                        <option value="Semester 4">Semester 4</option>
                        <option value="Semester 5">Semester 5</option>
                        <option value="Semester 6">Semester 6</option>
                        <option value="Semester 7">Semester 7</option>
                        <option value="Semester 8">Semester 8</option>
                    </select>
                    </div>

                    </div>
                    

                    <div className="checkbox-section">
                        <h3>Your Subjects</h3>
                        <span>Select the subjects you are currently studying</span>

                        <div className="checkbox-grid">
                    {
                        subjects.map((sub)=>(
                            <label htmlFor={`academic-${sub}`} key={sub} className="checkbox-item">
                                <input type="checkbox" name="" id={`academic-${sub}`} value={sub} onChange={handleSubjects} checked={subject.includes(sub)}/>{sub}
                            </label>
                        ))
                    }
                    {/* <br /><br />
                    {subject} */}

                    </div>

                    </div>
                    
                    
                </div>


                <div className="student-card">
                    <h2>Your Interests </h2>
                    <span>Select topics and activities you enjoy or want to explore</span>

                    <div className="checkbox-grid">
                    {
                        interests.map((intr)=>(
                            <label htmlFor={`interest-${intr}`} key={intr} className="checkbox-item">
                            <input type="checkbox" value={intr} id={`interest-${intr}`} onChange={handleInterest} checked={interest.includes(intr)}/>{intr}
                        </label>
                        ))
                    } 
                    {/* <br /><br />
                    {interest} */}
                    </div>

                </div>

                <div className="save-section">
                    <button className="save-button">Save Profile</button>
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