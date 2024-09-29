import React,{useState} from "react";
function Facebook () {
    const [fillBackground, setFillBackground] = useState("#030200");

    const handleMouseEnter = () => {
        setFillBackground("red"); 
    };

    const handleMouseLeave = () => {
        setFillBackground("#000");
    };
    return (
        <svg onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.0500488" width="36" height="36" rx="2" fill={fillBackground}/>
            <g clip-path="url(#clip0_1_81)">
            <g clip-path="url(#clip1_1_81)">
            <path d="M19.7556 19.3602H21.9312L22.8016 15.8791H19.7556V14.1386C19.7556 13.2422 19.7556 12.398 21.4962 12.398H22.8016V9.47389C22.5178 9.43647 21.4465 9.35205 20.3152 9.35205C17.9523 9.35205 16.2745 10.7941 16.2745 13.4424V15.8791H13.6636V19.3602H16.2745V26.7576H19.7556V19.3602Z" fill="#E5E4E2"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_81">
            <rect width="21.66" height="21.69" fill="white" transform="translate(7.16998 7.20996)"/>
            </clipPath>
            <clipPath id="clip1_1_81">
            <rect width="21.69" height="21.69" fill="white" transform="translate(7.16998 7.20996)"/>
            </clipPath>
            </defs>
        </svg>
    )
}
export default Facebook