import React from "react";
import style from "../styles/projects.module.css";

import { motion, Variants } from "framer-motion";
const ImageAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        viewport: { once: false, amount: 1 },
        transition: { duration: 2 },
    },

};
const Project = ({
    title,
    subTitle,
    img1,
    img2,
    desc,
    techUsed,
    features,
    resp,
    git,
    preview,
    ind,
}) => {
    return (
        <div className={`project-card ${style.project}`}>
            <div className={`${style.content}`}>
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: false, amount: 1 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className={`${style.contentLeft}`}
                >
                    {/* <div className={`${style.contentLeft}`}> */}
                    <div>
                        <h1 className={`project-title`}>
                            {" "}
                            <span>{ind + 1}.</span> {title}{" "}
                        </h1>
                        <h3 className={`${style.subTitle}`}>{subTitle}</h3>
                    </div>
                    <div className={style.btnDiv}>
                        <a href={git} target="blank">
                            <button className={`project-github-link ${style.button}`}>
                                <span className={style.buttonContent}>Github </span>
                            </button>
                        </a>
                        <a href={preview} target="blank">
                            <button className={`project-deployed-link ${style.button}`}>
                                <span className={style.buttonContent}>Preview </span>
                            </button>
                        </a>
                    </div>
                    {/* </div> */}
                </motion.div>

                <motion.div
                    className={`${style.contentRight}`}
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: false, amount: 1 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {/* <div className={`${style.contentRight}`}> */}
                    <div className={`${style.inner1}`}>
                        <div className={` project-description ${style.description1}`}>
                            <p>{desc}</p>
                            {
                                features.length > 0 ? (<p>Features :</p>) : ("")
                            }

                            {features.map((ele, ind) => (
                                <li key={ind}> {ele} </li>
                            ))}

                            <p>Area of Responsibility : {resp}</p>
                        </div>
                    </div>
                    <div>
                        <h4>Tech Stack Used</h4>
                        <div className={` project-tech-stack ${style.techDiv}`}>
                            {techUsed.map((ele, ind) => (
                                <p key={ind}> {ele} </p>
                            ))}
                        </div>
                    </div>
                    {/* </div> */}
                </motion.div>
            </div>
            <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={ImageAnimate}
            >
                <div className={`${style.imgDiv}`}>
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        // viewport={{ once: false, amount: 1 }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={`${style.deskImgDiv}`}
                    >
                        {/* <div className={`${style.deskImgDiv}`}> */}
                        <img src={img1} alt="" />
                        {/* </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        // viewport={{ once: false, amount: 1 }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={`${style.phoneImgDiv}`}
                    >
                        {/* <div className={`${style.phoneImgDiv}`}> */}
                        <img src={img2} alt="" />
                        {/* </div> */}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
