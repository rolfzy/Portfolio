import "react";
import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
const AnimationWrapper = ({ children, delay = 0}) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.4}}
        transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
};

export default AnimationWrapper;