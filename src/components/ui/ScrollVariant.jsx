import { motion } from 'framer-motion';

const scrollVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y:-20, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" ,
      delay: 0.5 
    }
  }
};
const rightVariant = {
    hidden:{
        opacity: 0,
        x:50
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.8,
            ease:"easeOut",
            delay:0.5
        }
    }
};
const leftVariant = {
    hidden:{
        opacity: 0,
        x:-50
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.8,
            ease:"easeOut",
            delay:0.5
        }
    }
}


const ScrollReveal = ({ children, variant = "scroll" }) => {
  let selected;
  if(variant === "right"){
    selected = rightVariant;
  } else if(variant === "left"){
    selected = leftVariant;
  } else {
    selected = scrollVariants;
  }
    return (

    <motion.div
      initial="hidden"           // Estado inicial
      whileInView="visible"      // Estado cuando entra en pantalla
      viewport={{ once: true, margin: "" }} // Se ejecuta una sola vez al bajar
      variants={selected}  // Usamos tus variantes aquí
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;    