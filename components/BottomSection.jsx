import React from "react"

export default function BottomSection({submitted, playerName}) {
    
    const [inputRendered, setInputRendered] = React.useState(false)
    
        React.useEffect(()=>{
            if (document.querySelectorAll('input').length > 0) {
                setInputRendered(true)
            }
        }, [])
        
  	if (!submitted || document.getElementsByClassName("name-input").length === 0) {
          return (
              	<button disabled={submitted} type="submit" style={!inputRendered ? {marginTop: "50px"}: null}>
					Continue
				</button>
              
          )
      } else {
          return (
              <p>
					Congratulations, {playerName.slice(0, -17)}, your name got upgraded to
					a hero's name!
				</p>
          )
          
      }

		
			
}