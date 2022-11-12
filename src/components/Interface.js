import "./Interface.css";
import WhiteLogo from "../assets/WhiteLogo.png";
import ChunkList from "./ChunkList.js"
import CogWheel from "../assets/CogWheel.png";
import InfoIcon from "../assets/InfoIcon.png";
import React from "react";
import BackArrow from "../assets/BackArrow.png";
import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import { flushSync } from "react-dom";


    // function to render specific components -> use those functions based off of a piece of state
    // context api
    // react router

    // if state == w/e, render (work on this to view/judge the state)

    // We need to render five screens:
    
    // 1. Nothing here screen (all visual)
    // 2. Screen with text chunks
    // 3. Settings screen
    // 4. Info screen
    // 5. Add screen

class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.handleRenderInfo = this.handleRenderInfo.bind(this);
        this.handleRenderSettings = this.handleRenderSettings.bind(this);
        this.handleAddChunk = this.handleAddChunk.bind(this);
        this.handleReturnToHome = this.handleReturnToHome.bind(this);
        this.state = {middleState: "chunklist"}
    }

    // Temporary testing method: Remove later
    handleReturnToHome() {
        this.setState({middleState: "chunklist"})
    }

    handleRenderInfo() {
        this.setState({middleState: "info"});
    }

    handleRenderSettings() {
        this.setState({middleState: "settings"});
    }

    handleAddChunk() {
        this.setState({middleState: "add"});
    }
    
    render() {
        let middleState = this.state.middleState;
        const topbar = (
            // Remove the onClick for returnToHome later
            <div class="top-bar">
                <img src={ BackArrow } class="back-arrow" onClick={this.handleReturnToHome}
                style={{
                    display: (middleState === "settings" || middleState === "info" || middleState === "add") ? "inline" : "none"
                }} />
                <img src={ WhiteLogo } class="top-logo" onClick={this.handleReturnToHome} />
            </div>
        )
        const buttonMenu = (
            <div class="button-menu">
                <img src={ CogWheel } class="icon" onClick={this.handleRenderSettings}></img>
                <button class="add-button" onClick={this.handleAddChunk}>+</button>
                <img src={ InfoIcon } class="icon" onClick={this.handleRenderInfo}></img>
            </div>
        )

        let chunkList = <ChunkList condition={ middleState } returnHomeHandler={ this.handleReturnToHome }/>

        return (
            <div class="interface">
            { topbar }
            { chunkList }
            { buttonMenu }
            </div>
        )
    }
}

export default Interface;