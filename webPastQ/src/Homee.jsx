import { useState } from 'react';

const Home = () => {

    const [courseCode, setCourseCode] = useState("");
    const [level, setLevel] = useState("");
    const [program, setProgram] = useState("");
    const [section, setSection] = useState("");
    const [document, setDocument] = useState("");


    //submitHandler
    const SubmitHandler = async (e) => {
        e.preventDefault();
        const reqInfo = {courseCode, level, program, section}

        try{
            const response = await fetch('http://localhost:5000/get-document', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({reqInfo})
            });

            const data = await response.json();
            if(data.success){
                setDocument(data.document);
                console.log(document);
            }else{
                console.log('error fetching document:', data.message);
                setDocument('')
            }
        } catch (error) {
            console.log('an error occurred:', error);
            setDocument('')
        }
    };


    //child component 1
    const ReqDetails = () => {
        return(
            <div className="ReqForm">
                <form onSubmit={SubmitHandler}>
                    <label>course code</label>
                    <input type="text" 
                    placeholder="COM115" 
                    required
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    autoFocus
                    >
                    </input><br/>
                    <label>level</label>
                    <select className="level" 
                        required
                        value={level}
                        onChange={ (e) => setLevel(e.target.value) }
                    >
                        <option value="none">none</option>
                        <option value="ND1">ND1</option>
                        <option value="ND2">ND2</option>
                        <option value="HND1">HND1</option>
                        <option value="HND2">HND2</option>
                    </select><br/>
                    <label>program</label>
                    <select className="program" 
                        required
                        value={program}
                        onChange={ (e) => setProgram(e.target.value) }
                    >
                        <option value="none">none</option>
                        <option value="FT/DPP">FT/DPP</option>
                        <option value="PT">PT</option>
                    </select><br/>
                    <label>section</label>
                    <select className="section"
                    required
                    value={section}
                    onChange={ (e) => setSection(e.target.value) }
                    >
                        <option value="none">none</option>
                        <option value="2023/2024">2023/2024</option>
                        <option value="2022/2023">2022/2023</option>
                        <option value="2021/2022">2021/2022</option>
                    </select><br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    };

    //child component 2
    const DisplayDocument = () => {
        return(
            <div className="disDoc">
                 {document ? (
                    <div>
                        <img src={`http://localhost:5000/db_source/${document}`} alt={courseCode} />
                        <br />
                        <a href={`http://localhost:5000/db_source/${document}`} download={document}>
                            <button className='download'>Download</button>
                        </a>
                    </div>
                ) : (
                    <p>No document available</p>
                )}
            </div>
        )
    };
    return ( 
        <div className="home">
            <div className="DisRequest"> <ReqDetails/> </div>
            <div className="disDocument"> <DisplayDocument /> </div>
        </div>
     );
}
 
export default Home;