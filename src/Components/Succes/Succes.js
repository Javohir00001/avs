import Button from "../../UI/Button/Button"

import "./Succes.css"

import books from "../../assets/img/books.png"
import lamp from "../../assets/img/lamp.png"
import quest from "../../assets/img/quest.png"

export default function Succes() {
    function preventDefault(event) {
        event.preventDefault();
    }
    return (
        <div className="left__header succes__header">
            
            <h1>Thank you!</h1>
            <p>Download the full version of AVS Video ReMaker 6.7.1.262</p>
            <Button type="button">Download the full version</Button>

            <div className="sources">
                
                <h3>
                    Helpful resources
                </h3>

                <div>
                    <div className="source">
                        <img src={books} alt="books icon" />
                        <div>
                            <a  onClick={preventDefault} href="#">Knowledge centre</a>
                        </div>
                    </div>

                    <div className="source">
                        <img src={lamp} alt="lamp icon" />
                        <div>
                            <a onClick={preventDefault} href="#">Tips & tricks</a>
                        </div>
                    </div>

                    <div className="source">
                        <img src={quest} alt="question mark icon" />
                        <div>
                            <p>
                                Got a question or an idea? 
                                <a onClick={preventDefault} href="#">
                                    Contact us
                                </a> 
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}