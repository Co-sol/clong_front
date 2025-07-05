import React, { useState, useEffect } from 'react';

function CleanSensitiveModal({ currentSensitivity = 70, onSave, onClose }) {
  const [sensitivity, setSensitivity] = useState(currentSensitivity);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    setSensitivity(currentSensitivity);
  }, [currentSensitivity]);

  const handleSave = () => {
    // 간단히 유효성 검사 예시 (필요 시 조정)
    if (sensitivity < 0 || sensitivity > 100) {
      setSubmitError('민감도는 0부터 100 사이여야 합니다.');
      return;
    }
    onSave(sensitivity);
    onClose();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>청소 민감도</h3>

      {/* 현재 민감도 (왼쪽 정렬) */}
      <div style={styles.currentSensitivity}>
        현재 청소 민감도: {sensitivity}%
      </div>

      {/* 설명 (중앙 정렬) */}
      <div style={styles.description}>
        <span>0: 둔감해요</span>
        <span>50: 적당히 깨끗해요</span>
        <span>100: 청결대마왕</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={sensitivity}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (!isNaN(newValue)) {
            setSensitivity(newValue);
            document.documentElement.style.setProperty('--value', newValue);
            setSubmitError('');
          }
        }}
        className="sensitivity-slider"
        style={{
          width: '100%',
          marginTop: '20px',
          appearance: 'none',
          height: '13px',
          borderRadius: '30px',
          outline: 'none',
          background: `linear-gradient(
            to right,
            #83EBB7 0%,
            #83EBB7 ${sensitivity}%,
            #f5f5f5 ${sensitivity}%,
            #f5f5f5 100%
          )`,
        }}
      />
      <div className="sensitivity-ticks" style={{ position: 'relative', width: '100%', height: '20px', marginTop: '5px', marginBottom: '30px' }}>
        <span style={{ position: 'absolute', fontSize: '13px', fontWeight: 500, color: '#B5B5B5', left: 0 }}>0</span>
        <span style={{ position: 'absolute', fontSize: '13px', fontWeight: 500, color: '#B5B5B5', left: '50%', transform: 'translateX(-50%)' }}>50</span>
        <span style={{ position: 'absolute', fontSize: '13px', fontWeight: 500, color: '#B5B5B5', right: 0 }}>100</span>
      </div>


      <div style={styles.buttonWrapper}>
        <button onClick={handleSave} style={styles.button}>
          저장
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '0 0px',
    position: 'relative', 
  },
  title: {
    marginBottom: '50px',
  },
  labelWrapper: {
    textAlign: 'left',
    marginBottom: '30px',
    position: 'relative',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#8BE2B6',
    color: '#fff',
    fontWeight: '700',
    border: 'none',
    borderRadius: '8px',
    width: '70px',
    height: '35px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '15px',
  },
    currentSensitivity: {
    justifyContent: 'center',
    fontSize: '16px',
    marginBottom: '40px',
    fontWeight: 500,
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '13px',
    fontWeight: 400,
    color: '#B5B5B5',
    marginBottom: '0px',
  },
};

export default CleanSensitiveModal;
