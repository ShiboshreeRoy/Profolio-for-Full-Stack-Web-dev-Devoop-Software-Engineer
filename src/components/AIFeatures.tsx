import  { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Zap } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

const AIFeatures = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const runAIDemo = async () => {
      // Load a pre-trained model
      const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
      
      // Simple prediction demo
      const inputData = tf.tensor2d([[5.1, 3.5, 1.4, 0.2]]);
      const prediction = model.predict(inputData);
      console.log('AI Model Prediction:', prediction);
    };

    runAIDemo().catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          AI-Powered Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-lg p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <Brain className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">Neural Networks</h3>
            </div>
            <canvas ref={canvasRef} className="w-full h-48 mb-4 bg-gray-800 rounded-lg" />
            <p className="text-gray-300">
              Interactive visualization of neural networks and deep learning concepts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-lg p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <Network className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">Real-time Processing</h3>
            </div>
            <div className="relative h-48 mb-4">
              <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden">
                <div className="animate-pulse bg-blue-500/20 w-full h-full" />
              </div>
            </div>
            <p className="text-gray-300">
              Live demonstration of AI-powered data processing and analysis.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Cpu size={24} />,
              title: 'Machine Learning',
              description: 'Implementation of ML algorithms'
            },
            {
              icon: <Zap size={24} />,
              title: 'Deep Learning',
              description: 'Neural network architectures'
            },
            {
              icon: <Network size={24} />,
              title: 'Natural Language',
              description: 'NLP and text processing'
            },
            {
              icon: <Brain size={24} />,
              title: 'Computer Vision',
              description: 'Image recognition systems'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;