import React from 'react';
import {useState, useEffect, useRef} from 'react'
import "./Accordeon.css";
import chevron from "./chevron.svg"

export default function Accordeon() {

    const [toggle, setToggle] = useState(false);

    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    })

    const toggleState = () => {
        setToggle(!toggle);
    }

    return (
        <div className="accord">
            <div onClick={toggleState} className="accord-visible">
                <h2>Ceci est un accordéon</h2>
                <img src={chevron} alt="chevronDown" />
            </div>

            <div ref={refHeight} className={toggle ? "accord-toggle animated" : "accord-toggle"} style={{height: toggle ? `${heightEl}` : "0px"}}>
                <p aria-hidden={toggle ? "true" : "flase"} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint maxime quos earum impedit, velit hic explicabo, alias vitae veritatis corporis nobis libero molestias natus nemo. Eveniet placeat quo accusantium suscipit.</p>
            </div>
        </div>
    )
}
