import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Download, Github, ExternalLink } from 'lucide-react';
import FloatingModel from './3d/FloatingModel';
import ParticleField from './3d/ParticleField';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingModel />
            <ParticleField />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Building the Future with Code
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button className="group px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Github size={20} className="group-hover:animate-spin" />
              View Projects
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;