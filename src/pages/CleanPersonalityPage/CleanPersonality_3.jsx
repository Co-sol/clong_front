import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CleanPersonality_3() {
  const location = useLocation();
  const navigate = useNavigate();

  const resultCode = location.state?.resultCode || 'CRSL';
  const nickname = location.state?.nickname || '사용자';

  const resultTextMap = {
    CRSL: { title: '✨정리 요정형', description: '완벽한 정돈러, 체계적인 청소 루틴 + 팀워크 리더' },
    CRSI: { title: '🧽말없는 실천가형', description: '깔끔하고 체계적이지만 리더 역할은 선호하지 않음' },
    CRQL: { title: '🧠빠른 해결사형', description: '깔끔하지만 빠른 처리 선호, 팀 정리 방식 제안자' },
    CRQI: { title: '🧺센스 정리러형', description: '눈치 빠른 실용파. 본인만의 방식으로 청소' },
    CASL: { title: '🧹게으른 정리러형', description: '평소 안 하지만 할 땐 구조적으로 처리' },
    CASI: { title: '🪣방치적 질서러형', description: '요청이 있어야 움직이는 숨겨진 정리력 보유자' },
    CAQL: { title: '🪠순간 정리 마스터형', description: '일단 치우고 본다. 빠른 수습에 능숙' },
    CAQI: { title: '😶위장 깔끔러형', description: '보기엔 괜찮지만 정리 기준은 본인만 앎' },
    DRSL: { title: '🌀폭주형 청소 리더', description: '평소 어질러져도 몰아서 폭풍청소하는 리더형' },
    DRSI: { title: '🔄비정기적 실천가형', description: '가끔 치우지만 할 땐 확실하게 처리' },
    DRQL: { title: '⚡효율 정리꾼형', description: '미루다가도 정리할 땐 딱딱 잘함' },
    DRQI: { title: '🤔대응형 정리꾼', description: '눈치 보며 대처하는 후발 정리형' },
    DASL: { title: '💡계획형 게으름러', description: '구조는 짜놓음. 실천력이 아쉬운 타입' },
    DASI: { title: '😮방치형 관망러', description: '누가 치워주길 바라는 마음만 있음' },
    DAQL: { title: '🧊냉정한 미룸러', description: '"나중에 할게요" 마스터. 계획은 존재함' },
    DAQI: { title: '🫠카오스형', description: '내일의 나에게 맡긴다. 팀 내 가장 유연한(?) 혼돈형' },
  };

  const result = resultTextMap[resultCode] || {
    title: '알 수 없음',
    description: '결과 데이터를 불러올 수 없습니다.',
  };

  // ✅ 결과 저장: mount 시 POST 요청
  useEffect(() => {
    const saveResult = async () => {
      try {
        await fetch('/api/personality/result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname: nickname,
            resultCode: resultCode,
            resultTitle: result.title,
            resultDescription: result.description,
          }),
        });
      } catch (error) {
        console.error('결과 저장 실패:', error);
      }
    };

    saveResult();
  }, [nickname, resultCode, result.title, result.description]);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h2 style={styles.subtitle}>{nickname} 님의 청소 성격 유형은?</h2>

        <div style={styles.resultBox}>
          <div style={styles.resultCode}>{resultCode}</div>
          <div style={styles.resultTitle}>{result.title}</div>
        </div>

        <p style={styles.description}>{result.description}</p>

        <button style={styles.button} onClick={handleHomeClick}>
          홈으로
        </button>
      </div>
    </div>
  );
}

// ⚠️ 절대 수정하지 말라는 기존 CSS 유지
const styles = {
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("/assets/bg-bubble3.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    transform: 'scale(0.7)',
    transformOrigin: 'center',
  },
  subtitle: {
    fontSize: '48px',
    fontWeight: 600,
    marginBottom: '80px',
    color: '#202020',
  },
  resultBox: {
    width: '400px',
    height: '400px',
    margin: '0 auto 70px',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, rgba(105, 230, 162, 0.3), rgba(227, 244, 249, 0.3))',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultCode: {
    fontSize: '64px',
    fontWeight: 800,
    color: '#1AC27F',
    marginBottom: '50px',
  },
  resultTitle: {
    fontSize: '40px',
    fontWeight: 400,
    color: '#202020',
  },
  description: {
    fontSize: '32px',
    color: '#545454',
    marginBottom: '110px',
  },
  button: {
    width: '400px',
    height: '80px',
    fontSize: '32px',
    fontWeight: 700,
    backgroundColor: '#8BE2B6',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

// 반응형 스케일 유지
if (window.innerWidth <= 1024) {
  styles.content.transform = 'scale(0.55)';
}

export default CleanPersonality_3;
