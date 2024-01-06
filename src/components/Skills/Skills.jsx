import React from 'react'
import "./Skills.css";
import Github from './Github';

const skills = [
    {
        name: "React Js",
        image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    },
    {
        name: "Redux",
        image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    },
    {
        name: "Next Js",
        image:
            "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp",
    },
    {
        name: "JavaScript",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
        name: "AWS",
        image:
            "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Emblem.png",
    },

    {
        name: "TypeScript",
        image:
            "https://www.datocms-assets.com/48401/1627663113-learn-typescript.png?fit=max&w=900",
    },
    {
        name: "Java",
        image:
            "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    },
    {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    },
    {
        name: "CSS",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    },
    {
        name: "MongoDB",
        image:
            "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=webp&w=256",
    },
    {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
    },
    {
        name: "Express Js",
        image:
            "data:image/png;base64,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",
    },
    {
        name: "Web Sockets",
        image:
            "https://repository-images.githubusercontent.com/159722346/cd6aea00-9079-11ea-8f48-771cb5a8dffc",
    },
    {
        name: "Socket.io",
        image:
            "data:image/png;base64,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",
    },
    {
        name: "NGINX",
        image:
            "https://stuggi.files.wordpress.com/2019/08/nginx-icon-outline-hex-rgb-266x302.png",
    },
];

const otherSkills = [
    {
        name: "Git",
        image:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
        name: "Chakra Ui",
        image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEVHcExTysVTycZsy9Byy9FwytFyzNGE1tVoys2n4eDZ8/Jgysv8/v5YychQycVSycZHyMI8yL44x7wwx7o0x7vTVANiAAAAFXRSTlMAF0uUzOr////////////C//+U/9EDm5HIAAABMElEQVR4AW3NCQKEIAgFUNAJy631/mcdoMK21wZ8U2jQ+V9H1P28Q3hDzyEFvanz+Irp4b4Ef/TyQzCOPjn7v1d0XH0I0vCN5/46N0NMR3Wc4vurFPKQzsbvB3CfLB9ybI0e4lOf5FYl5Eyp8QDYJWX5UFLTIbhUEt9Fc8o5B+13pTjwhaUiauB8qKVJxcNoXaXMyt0ILQ/5IpwbQa2liokeed1BPYSYTaSp1seCqSeVZF3f8grjJOq0mwP/Xy6DERauqw1KzPHsqlwLuOli1fzKAfK+srfmQ45czW20IcAiI74Z5WGV0ibTAgAokfZr5HyyVh4EtswHye8WELhps4ZXviEonNd1XufAb7n10kJz4bizW+yFA4PbaiQSur/BZX1YLLcl2zN+Qrev2RZ3if8Lnii4MfVtFwAAAABJRU5ErkJggg==",
    },
    {
        name: "Bootstrap",
        image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    },
    {
        name: "Material UI",
        image:
            "data:image/png;base64,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",
    },
    {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
        name: "GitHub",
        image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
        name: "Netlify",
        image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
    },
    {
        name: "Vercel",
        image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
    },
    {
        name: "VS Code",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
    {
        name: "SSL certification",
        image: "https://p7.hiclipart.com/preview/74/480/930/transport-layer-security-public-key-certificate-https-extended-validation-certificate-computer-icons-world-wide-web.jpg"
    },
]
const ImageAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        viewport: { once: false, amount: 1 },
        transition: { duration: 1 },
    },

};
export default function Skills() {

    return (
        <div id='skills'

        >
            <h1 style={{ fontWeight: 500 }}>Skills</h1>
            <div id='skill_section'>
                <h2>Web development</h2>
                <div className='skills-card'

                >
                    {
                        skills.map((e) => {
                            return (<div className='skill_box' key={e.name}>
                                <img src={`${e.image}`} alt="" className="skills-card-img" />
                                <span className="skills-card-name">{e.name}</span>
                            </div>)
                        })

                    }
                </div>
                <h2>Other Skills</h2>
                <div className='skills-card'

                >
                    {
                        otherSkills.map((e) => {
                            return (<div className='skill_box' key={e.name}>
                                <img src={`${e.image}`} alt="" className="skills-card-img" />
                                <span className="skills-card-name">{e.name}</span>
                            </div>)
                        })
                    }
                </div>
            </div>
            <h1 style={{ fontWeight: 500 }}>My Github Activity</h1>
            <div className="githubConatiner">
                <div>
                    <div>
                        <a href="https://git.io/streak-stats"><img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=1ashutoshverma&theme=buefy-dark&hide_border=true&background=191924&border=854CE6&ring=854CE6&currStreakNum=854CE6&sideLabels=854CE6&currStreakLabel=854CE6&stroke=854CE6" alt="GitHub Streak" /></a>
                    </div>
                    <div className='react-activity-calendar'>
                        <Github />
                    </div>
                </div>
                <div>
                    <a href="https://git.io/streak-stats"><img id="github-streak-stats" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=1ashutoshverma&theme=shades_of_purple" alt="GitHub Streak" /></a>
                </div>

                <div style={{ height: "0px" }} >
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=1ashutoshverma&layout=compact&theme=dark" alt="" id="github-top-langs" style={{ height: "0px" }} />
                </div>
                <div style={{ height: "0px" }}
                >
                    <img src="https://github-readme-stats.vercel.app/api?username=1ashutoshverma&show_icons=true&theme=transparent" id="github-stats-card" alt="" style={{ height: "0px" }} />
                </div>
            </div>
        </div >
    )
}
