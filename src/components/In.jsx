import React,{useState} from "react";

function In () {
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
            <g clip-path="url(#clip0_1_95)">
            <g clip-path="url(#clip1_1_95)">
            <path d="M13.6114 11.9631C13.6112 12.4247 13.4276 12.8674 13.101 13.1936C12.7744 13.5199 12.3316 13.703 11.87 13.7028C11.4084 13.7026 10.9657 13.519 10.6395 13.1924C10.3132 12.8658 10.1301 12.423 10.1303 11.9614C10.1305 11.4997 10.3141 11.0571 10.6407 10.7309C10.9673 10.4046 11.4101 10.2215 11.8717 10.2217C12.3334 10.2219 12.776 10.4055 13.1022 10.7321C13.4285 11.0587 13.6117 11.5015 13.6114 11.9631ZM13.6636 14.9917H10.1825V25.8875H13.6636V14.9917ZM19.1638 14.9917H15.7001V25.8875H19.129V20.1698C19.129 16.9846 23.2802 16.6887 23.2802 20.1698V25.8875H26.7178V18.9863C26.7178 13.6166 20.5737 13.8168 19.129 16.4538L19.1638 14.9917Z" fill="#E5E4E2"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_95">
            <rect width="21.66" height="21.69" fill="white" transform="translate(7.16998 7.20996)"/>
            </clipPath>
            <clipPath id="clip1_1_95">
            <rect width="21.69" height="21.69" fill="white" transform="translate(7.16998 7.20996)"/>
            </clipPath>
            </defs>
        </svg>

    )
}
export default In