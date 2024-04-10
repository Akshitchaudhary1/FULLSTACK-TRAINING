import React  from "react";

const Languages = ()=> {
    let lang = ["java","javaScript","kotlin", "python","C"];
    return (
        <div>
            <h1>Best programming Languages</h1>
            <ul>
                { lang.map((item, index)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Languages