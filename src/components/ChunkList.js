import "./ChunkList.css";
import Chunk from "./Chunk.js";
import FlushedFace from "../assets/FlushedFace.png";
import Arrow from "../assets/Arrow.png";
import PastaPasteInfo from "../assets/PastaPasteInfo.jpg";
import AddScreen from "./AddScreen.js"
import React from "react";
import JSONData from "../data.json";

class ChunkList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let condition = this.props.condition;
        let emptyList = false;
        const JSONList = JSONData.chunks;
        emptyList = (JSONList.length === 0);

        const emptyListToRender = (
            <div class="chunklist-empty">
                <img class="emoji" src={FlushedFace}></img>
                <h1 class="large-message">There isn't anything here...</h1>
                <p class="small-message">Click here to add a new chunk of text!</p>
                <img class="arrow" src={ Arrow }></img>
            </div>
        )

        const listToRender = (
            <div class="chunklist">
                {JSONList.map(object => (
                    <Chunk title={object.title} text={object.text} />
                ))}
            </div>
        )

        const settingsToRender = (
            <div class="side-screen">
                <h2 class="title-header">Settings</h2>
                <div class="delete-all">
                    <p class="warning-text warning">CAREFUL</p>
                    <p class="warning-text">Here is the reset button. It wipes all your saved text. This can't be undone but 
                    you have the <strong>POWER</strong></p>
                    <button class="delete-button">OBLITERATE</button>
                </div>
                <div class="settings-buffer"></div>
            </div>
        )

        const infoToRender = (
            <div class="side-screen">
                <h2 class="title-header">Information</h2>
                <p class="info-text">Hello! This is a Chrome extension I developed to help people design documents,
                slideshows, and various UI/UX projects like websites and apps. Have fun!</p>
                <h2 class="title-header">Guide</h2>
                <p class="info-text">The home screen houses all the chunks of text you have saved/created</p>
                <img class="instructions" src={ PastaPasteInfo }></img>
                <p class="info-text">Press the red button below to add some new chunks!</p>
                <div class="info-buffer"></div>
            </div>
        )

        const addScreenToRender = (
            <AddScreen returnHomeHandler={ this.props.returnHomeHandler }/>
        )

        switch (condition) {
            case "chunklist":
                if (emptyList) {
                    return emptyListToRender;
                    break;
                } else {
                    return listToRender;
                    break;
                }
            case "add":
                return addScreenToRender;
                break;
            case "settings":
                return settingsToRender;
                break;
            case "info":
                return infoToRender;
                break;
        }
    }
}

export default ChunkList;