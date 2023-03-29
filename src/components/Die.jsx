import React from "react";


export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
function face() {
    switch (props.value) {
        case 1:
            return(
                <div className="first dice" style={styles}>
                    <span className="dot"></span>
                </div>
            )
        case 2:
                return(
                    <div className="second dice" style={styles}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                )
        case 3:
            return(
                <div className="third dice" style={styles}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            )
        case 4:
                return(
                    <div className="fourt dice" style={styles}>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                            <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )
        case 5:
            return(
                <div className="fifth dice" style={styles}>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
        case 6:
                return(
                    <div className="sixth dice" style={styles}>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )
    }
}

    return(
        <div className="die-face" onClick={props.hold}>
            {face()}
        </div>
    )
}