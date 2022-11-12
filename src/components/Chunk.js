import "./Chunk.css";
import CopyIcon from "../assets/CopyIcon.png";
import DeleteButton from "../assets/DeleteButton.png"
import React from "react";

const textThreshold = 20; // Max letters to display before cutting off with ...
const titleThreshold = 12; // Max ltters to display for the title

class Chunk extends React.Component {
    constructor(props) {
        super(props);
        this.handleShrink = this.handleShrink.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.state = {expanded: false}
    }

    handleShrink() {
        this.setState({expanded: false})
    }

    handleExpand() {
        this.setState({expanded: true})
    }

    render() {
        let title = this.props.title;
        let text = this.props.text;

        const characters = text.length;
        const words = text.split(" ").length;

        let expanded = this.state.expanded;

        const chunkToRender = (
            <div class="chunk">
                <div class="text-grouping">
                    <h1 class="title" onClick={this.handleExpand}>{(title.length >= titleThreshold ? title.substring(0, titleThreshold) + "..." : title)}</h1>
                    <p class="text">{(text.length >= textThreshold ? text.substring(0, textThreshold) + "..." : text)}</p>
                </div>
                <img class="copy-icon" src={CopyIcon}></img>
                <p class="text-stats"><b>{words}</b> words <b>{characters}</b> characters</p>
            </div>
        )

        const expandedChunkToRender = (
            <div class="chunk expanded">
                <div class="text-grouping">
                <h1 class="title" onClick={this.handleShrink}>{title}</h1>
                    <p class="text">{text}...</p>
                </div>
                <div class="chunk-buttons">
                    <img class="copy-icon" src={CopyIcon}></img>
                    <img class="delete-icon" src={DeleteButton}></img>
                </div>
                <p class="text-stats" style={{"margin-bottom": "6px"}}><b>{words}</b> words <b>{characters}</b> characters</p>
            </div>
        )

        return expanded ? expandedChunkToRender : chunkToRender;
    }
}

export default Chunk;