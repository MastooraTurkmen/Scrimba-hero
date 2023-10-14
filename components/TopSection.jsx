import React from "react"

export default function TopSection({submitted}) {
    const classCondition = document.getElementsByClassName("name-input").length === 0
    return (
        <div className="top-section">
        <h1 className={submitted && !classCondition ? "second-fade-in" : null}>
			{!submitted || classCondition
			    ? "The Legend of Scrimba"
					: "A hero has risen! The hero's name is: "}
			</h1>
                    <div className="image-container">
            			<img 
                            className={!submitted || classCondition ? null : "fade-out-and-in" }
                            src={!submitted || classCondition ? "./images/character1.png" : "./images/character2.png"} />
                    </div>

            </div>
    )
    
}