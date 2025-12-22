import { Link } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@repo/ui";

type ButtonPropTypes = {
    text: string;
    href: string;
    className?: string;
    
}

const Button = ({ text = 'Download Now', href = '#', className }: ButtonPropTypes) => {
    return (
        <motion.div whileTap={{ scale: 0.85 }} className="bg-white w-fit h-fit rounded-lg">
            <Link to={href} className={cn('btn-main block  py-1 px-3 text-center font-semibold outline-none', className)}>
                {text}
            </Link>
        </motion.div>
    )
}

export default Button