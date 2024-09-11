import { motion } from "framer-motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
