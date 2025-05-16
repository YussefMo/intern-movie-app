import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Bouncy } from 'ldrs/react';
import 'ldrs/react/Bouncy.css';

function Loader() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Bouncy size="45" speed="1.75" color="white" />
      </motion.div>
    </Box>
  );
}

export default Loader;
