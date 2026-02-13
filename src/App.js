import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Lock, CheckCircle, Flame, Zap } from 'lucide-react';
import './App.css';

const App = () => {
  const [phase, setPhase] = useState('decrypt'); 
  const [quizStep, setQuizStep] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;
    setNoButtonPos({ x, y });
  };

  const nextQuiz = () => setQuizStep(prev => prev + 1);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Truck says YES! ❤️ I'm all yours. Come get me.");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="valentine-container">
      <div className="bg-glow"></div>
      
      <AnimatePresence mode="wait">
        {phase === 'decrypt' && (
          <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="glass-card">
            <Lock className="lock-icon" size={40} />
            <h2>Private Access: Divya</h2>
            <p>Warning: Content contains high-intensity emotions.</p>
            <button className="decrypt-btn" onClick={() => setPhase('invite')}>Unlock Gokul's Heart</button>
          </motion.div>
        )}

        {phase === 'invite' && (
          <motion.div key="1" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="glass-card">
            <div className="status-badge"><Zap size={14}/> OBSESSION DETECTED</div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Heart size={60} fill="#ff4d6d" color="#ff4d6d" />
            </motion.div>
            <h1>Will you be mine?</h1>
            <p>I don't just want a Valentine. I want you. All of you. Every single inch.</p>
            <div className="btn-row">
              <button className="yes-btn" onClick={() => setPhase('questions')}>I'M YOURS ❤️</button>
              <motion.button animate={{ x: noButtonPos.x, y: noButtonPos.y }} onMouseEnter={moveNoButton} className="no-btn">Decline</motion.button>
            </div>
          </motion.div>
        )}

        {phase === 'questions' && (
          <motion.div key="2" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card">
            <div className="quiz-header">Verification Quiz {quizStep}/5</div>
            
            {quizStep === 1 && (
              <div className="quiz-item">
                <p>What happens when we finally meet in person?</p>
                <div className="quiz-grid">
                  <button onClick={nextQuiz}>We aren't leaving the bed</button>
                  <button onClick={() => alert("Liars don't get rewards, Truck.")}>We go for a walk</button>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="quiz-item">
                <p>How much of you belongs to me?</p>
                <div className="quiz-grid">
                  <button onClick={nextQuiz}>Every single drop</button>
                  <button onClick={() => alert("Wrong answer. You're mine.")}>Just my heart</button>
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="quiz-item">
                <p>What's the best way for me to keep you quiet?</p>
                <button className="wide-btn" onClick={nextQuiz}>Deep, breathless kisses</button>
                <button className="wide-btn" onClick={nextQuiz}>Hand over your mouth</button>
              </div>
            )}

            {quizStep === 4 && (
              <div className="quiz-item">
                <p>What part of you am I touching first?</p>
                <div className="quiz-grid">
                  <button onClick={nextQuiz}>Those boobs</button>
                  <button onClick={nextQuiz}>Your thighs</button>
                </div>
              </div>
            )}

            {quizStep === 5 && (
              <div className="quiz-item">
                <p>Final Warning: Once you enter, there's no way out. Ready?</p>
                <button className="yes-btn" onClick={() => setPhase('final')}>CONSUME ME ❤️</button>
              </div>
            )}
          </motion.div>
        )}

        {phase === 'final' && (
          <motion.div key="3" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="glass-card final-card">
            <CheckCircle className="success-icon" size={50} />
            <div className="spice-badge"><Flame size={16} fill="#ff4d6d"/> ABSOLUTE POSSESSION</div>
            <h1>Locked In Forever.</h1>
            <div className="letter-box">
              <p>
                Divya, distance is the only thing protecting you from me right now. I'm obsessed with the thought of you—every curve, every breath, every sound you make.
              </p>
              <p className="spicy-text">
                I can't wait to see you, kiss those lips, and finally explore every inch of those boobies and thighs. You're my addiction, Truck. And I'm never letting you go.
              </p>
            </div>
            <Gift className="gift-icon" size={60} />
            <button className="confirm-btn" onClick={handleWhatsApp}>Claim Your Man 📱</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
