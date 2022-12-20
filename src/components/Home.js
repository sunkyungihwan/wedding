import React from 'react';
import photo1 from '../assets/img/pic00.png';
import heart from '../assets/img/heart.png';
import { motion, useAnimationControls } from 'framer-motion';

function Home() {
    const variants = {
        hidden: {
            rotate: 15
        },
        visible: {
            opacity: 1,
            rotate: -15,
            transition: {
                delay: 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };
    return (
        <div className="content home">
            <div className="name">
                <div className="heart">
                    <div className="you">
                        <p>이기환</p>
                    </div>
                    <div>

                    <motion.div initial="hidden" animate="visible" variants={variants} className="small">
                        <img src={heart} />
                    </motion.div>
                    </div>
                    <div className="me">
                        <p>최선경</p>
                    </div>
                </div>
            </div>
            <div className="title">
                <img src={photo1} />
            </div>
            <div className="location">
                <p>
                    2023. 02. 25. 토요일 낮 13:30 <br />
                    빌라드 지디 수서
                </p>
            </div>
        </div>
    );
}

export default Home;
