import React, { useState, useEffect } from 'react';

function NicknameModal({ currentNickname = 'solux', onSave, onClose }) {
  const [newNickname, setNewNickname] = useState('');

  useEffect(() => {
    setNewNickname('');
  }, [currentNickname]);

  const handleSave = () => {
    if (newNickname.trim() === '') {
      alert('닉네임을 입력해주세요.');
      return;
    }
    onSave(newNickname);
    onClose();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>회원 정보 수정</h3>

      <div style={styles.labelWrapper}>
        <label>현재 닉네임: {currentNickname}</label>
      </div>

      <div style={styles.inputWrapper}>
        <label>변경할 닉네임:</label>
        <input
          type="text"
          placeholder="변경하실 닉네임을 입력하세요"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          style={styles.input}
        />
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
  },
  title: {
    marginBottom: '50px',
  },
  labelWrapper: {
    textAlign: 'left',
    marginBottom: '30px',
  },
  inputWrapper: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    height: "40px",
    padding: '10px',
    borderRadius: '15px',
    border: 'none',
    fontSize: '14px',
    fontFamily: 'NotoSansKR-Regular',
    marginTop : "20px",
    color:"#787878",
    backgroundColor: "#F5F5F5",
    boxSizing: 'border-box',
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
    width : "70px",
    height: "35px",
    cursor: 'pointer',
    fontSize: '16px',
    marginTop:"20px",
  },
};

export default NicknameModal;
