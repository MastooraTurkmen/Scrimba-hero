import React from "react"
import TopSection from "./components/TopSection"
import BottomSection from "./components/BottomSection"

export default function App() {
	const [playerName, setPlayerName] = React.useState("")
	const [submitted, setSubmitted] = React.useState(false)
    
    function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
		setPlayerName(prevName => prevName.trim() + " The Magnificent!")
	}
	
	function handleChange(event) {
		setPlayerName(event.target.value)
	}
	
	console.log(playerName)

	return (
		<form className="form" onSubmit={handleSubmit}>
            <TopSection submitted={submitted} />			
			<input 
				className="name-input"
				type="text"
				maxLength={16}
				placeholder="Enter Your Character's Name"
				required
				disabled={submitted}
				onChange={handleChange}
				value={playerName}
			/>
            <BottomSection submitted={submitted} playerName={playerName} />
		</form>
	)
}
