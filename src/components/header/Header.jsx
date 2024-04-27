import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from "date-fns";
import './header.css'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import './header.css'

const Header = () => {
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 0
    })
    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"

    }])
    //eslint-disable-next-line
    const [destination, setDestination] = useState("")

    const [openOptions, setOpenOptions] = useState(false)
    const handleOption = (name, operation) => {
        setOptions((prev)=> {
            return {
                ...prev,
                [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });

    }
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Attractions</span>
                    </div>
                </div>


                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search low prices on hotels, homes and much more...</p>
                <button className="headerBtn">Sign in / Register </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type='text' placeholder='Where are you going ?' className='headerSearchInput' onChange={(e) => setDestination(e.target.value)} />

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span className="headerSearchText" onClick={() => setOpenDate(!openDate)} >
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className="headerSearchtextt" onClick={()=> setOpenOptions(!openOptions)}> {`${options.adult} adult . ${options.children} children . ${options.room} room`} </span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=> handleOption("adult", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("adult", "d")} disabled={options.adult <=1}>-</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=> handleOption("children", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("children", "d")} disabled={options.children <=0}>-</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton"onClick={()=> handleOption("room", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("room", "d")} disabled = {options.room<=1} >-</button>
                                </div>
                            </div>

                           

                        </div>}

                    </div>
                    <button className="searchButton" >Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header
