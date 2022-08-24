import { React } from "react";
import { docs } from "../assets/document.js"
import { createDTM, Stemmer } from 'frolics';

function List(props) {
    const DTM = createDTM(docs);
    const { input } = props;
    const stemmed = Stemmer(input);
    if (
        !stemmed.length
        || !(stemmed in DTM)
    ) {
        return <div/>;
    }
    let lists = [];
    for (const docId of Object.keys(DTM[stemmed])) {
        for (const obj of docs) {
            if (+obj.id === +docId) {
                lists.push(
                    <li id={docId} >
                        { ('imageUrl' in obj) && <img key={ obj.id } src={ obj.imageUrl } alt=""></img> }
                        { obj.body }
                    </li>
                );
            }
        }
    }
    return (
        <ul>
            { lists }
        </ul>
    )
}

export default List