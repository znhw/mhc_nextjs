import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavItems = [
    {
        title: "Mathematics",
        iconClosed: <FontAwesomeIcon icon={faCaretDown}  width={13} style={{paddingLeft:"5px"}}/>,
        iconOpened: <FontAwesomeIcon icon={faCaretUp} width={13} style={{paddingLeft:"5px"}}/>,
        subNav: [
            {
                title: "Form 1",
                path: "/mathematics/form-1"
            },
            {
                title: "Form 2",
                path: "/mathematics/form-2"
            },
            {
                title: "Form 3",
                path: "/mathematics/form-3"
            },
            {
                title: "Form 4",
                path: "/mathematics/form-4"
            },
            {
                title: "Form 5",
                path: "/mathematics/form-5"
            },
        ]
    },
    {
        title: "Additional Mathematics",
        iconClosed: <FontAwesomeIcon icon={faCaretDown} width={13} style={{paddingLeft:"5px"}} />,
        iconOpened: <FontAwesomeIcon icon={faCaretUp} width={13} style={{paddingLeft:"5px"}}/>,
        subNav: [
            {
                title: "Form 4",
                path: "/add-math/form-4"
            },
            {
                title: "Form 5",
                path: "/add-math/form-5"
            }
        ]
    }
]