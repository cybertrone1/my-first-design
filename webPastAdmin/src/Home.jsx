import { useState } from "react";

const Home = () => {

    const [courseCode, setCourseCode] = useState("");
    const [level, setLevel] = useState("");
    const [program, setProgram] = useState("");
    const [section, setSection] = useState("");
    const [file, setFile] = useState([]);

    /* file handler */
    const fileHandler = (e) => {
        setFile(e.target.files);
    }

    /* submit handler */
    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("courseCode", courseCode);
        formData.append("level", level);
        formData.append("program", program);
        formData.append("section", section);

        for (let i = 0; i < file.length; i++) {
            formData.append("documents", file[i]);
        }

        try{
            const response = await fetch('http://localhost:5000/upload-document', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                alert('file successfully uploaded');
            }
            else{
                alert('error uploading file');
                console.log('error uploading file', data.message);
            }
        }catch (error){
            console.log("an error occured", error);
        }
    }

    return ( 
        <div className="content">
           <form onSubmit={submitHandler}>
            <label>course code:</label>
            <input
            className="label-type" 
            type="text"
            placeholder="COM115"
            required
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
             />

             <label>section:</label>
             <select className="section"
             value={section}
             onChange={(e) => setSection(e.target.value)}
             >
                <option value="none">none</option>
                <option value="2021/2022">2021/2022</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option> 
             </select> <br />

             <label>level:</label>
             <select className="level"
             value={level}
             onChange={(e) => setLevel(e.target.value)}
             >
                <option value="none">none</option>
                <option value="ND1">ND1</option>
                <option value="ND2">ND2</option>
                <option value="HND1">HND1</option>
                <option value="HND2">HND2</option>              
             </select>

             <label>program:</label>
             <select className="program"
             value={program}
             onChange={(e) => setProgram(e.target.value)}
             >
                <option value="none">none</option>
                <option value="FT/DPP">FT/DPP</option>
                <option value="PT">PT</option>
             </select><br></br>

             <label>input the image:</label>
             <input type="file" 
             onChange={fileHandler}
             required /> <br />

             <button type="submit">upload</button>
           </form>
        </div>
     );
}
 
export default Home;