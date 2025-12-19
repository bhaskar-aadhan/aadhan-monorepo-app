import { GoHomeFill } from "react-icons/go";
import { RiNewspaperFill, RiContactsFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi2";
import { MdWork } from "react-icons/md";

export const tabsData = [
    {
        id: 1,
        label: 'News',
        route: '/news',
        icon: GoHomeFill,
        isSelection: false,
        options: []
    },
    {
        id: 2,
        label: 'Creator hub',
        route: '/creator-hub',
        icon: RiNewspaperFill,
        isSelection: false,
        options: []
    },
    {
        id: 3,
        label: 'Learn',
        route: '/learning',
        icon: HiDocumentText,
        isSelection: false,
        options: []
    },
    {
        id: 5,
        label: 'Company',
        route: '/company ',
        icon: MdWork,
        isSelection: true,
        options: [
            {
                label: "About Us",
                value: "/company/about"
            },
            {
                label: "Careers",
                value: "/company/careers"
            },
            {
                label: "Team",
                value: "/company/team"
            }
        ]
    },
    {
        id: 4,
        label: 'Contact us',
        route: '/contact-us',
        icon: RiContactsFill,
        isSelection: false,
        options: []
    }
]