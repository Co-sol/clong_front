import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import NicknameModal from '../components/MyPageModal/NicknameModal';
import CleanSensitive from '../components/MyPageModal/CleanSensitiveModal';
import GroupLeaveModal from '../components/MyPageModal/GroupLeaveModal';
import UserLeaveModal from '../components/MyPageModal/UserLeaveModal'; // 회원 탈퇴 모달 import
import './MyPage.css';

function MyPage() {
  const [badges, setBadges] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groupCreatedAt, setGroupCreatedAt] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);
  const [typeCode, setTypeCode] = useState('');
  const [typeName, setTypeName] = useState('');
  const [typeDate, setTypeDate] = useState('');
  const [typeDesc, setTypeDesc] = useState('');
  const [sensitivity, setSensitivity] = useState(0);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [isSensitiveModalOpen, setIsSensitiveModalOpen] = useState(false);
  const [isGroupLeaveModalOpen, setIsGroupLeaveModalOpen] = useState(false);
  const [isUserLeaveModalOpen, setIsUserLeaveModalOpen] = useState(false); // 회원 탈퇴 모달 상태

  useEffect(() => {
    const mockActiveBadges = ['청소 응애'];
    const allBadges = [
      { src: '/assets/badge1.png', label: '청소 응애' },
      { src: '/assets/badge2.png', label: '인간 청소기' },
      { src: '/assets/badge3.png', label: '청소 러버' },
      { src: '/assets/badge4.png', label: '청소 올데이' },
      { src: '/assets/badge5.png', label: '청소의 왕' },
    ];
    const updated = allBadges.map((badge) => ({
      ...badge,
      active: mockActiveBadges.includes(badge.label),
    }));
    setBadges(updated);

    setGroupName("Clong's home");
    setGroupCreatedAt('2025.05.22');
    setGroupMembers(['solux', 'A', 'sook']);

    setTypeCode('CRSL');
    setTypeName('정리 요정형');
    setTypeDate('2025.05.01');
    setTypeDesc('일반형 정리러, 체계적인 청소 루틴 + 팀워크 리더');

    setSensitivity(70);

    setUserName('크롱이');
    setUserId('cosol@sookmyung.ac.kr');
  }, []);

  // 그룹 탈퇴 처리 (백엔드 연동 시 수정)
  const handleGroupLeave = () => {
    alert('그룹 탈퇴가 처리되었습니다.');
    setIsGroupLeaveModalOpen(false);
  };

  // 회원 탈퇴 처리 (백엔드 연동 시 수정)
  const handleUserLeave = () => {
    alert('회원 탈퇴가 처리되었습니다.');
    setIsUserLeaveModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="mypage-scaled">
        <div className="mypage-wrapper">
          <div className="mypage-container">
            <div className="mypage-left">
              <div className="badge-wrapper">
                <div className="badge-section">
                  <div className="badge-background"></div>
                  <h2 className="section-title">뱃지</h2>
                  <div className="badge-list">
                    {badges.map((badge, index) => (
                      <div
                        className={`badge-item ${badge.active ? 'active' : ''}`}
                        key={index}
                      >
                        <img src={badge.src} alt={badge.label} />
                        <span>{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group-wrapper">
                <div className="group-section">
                  <h2 className="section-title">그룹</h2>
                  <div className="group-content">
                    <div className="group-main">
                      <div className="group-name-row">
                        <img src="/assets/homeicon.png" alt="홈 아이콘" className="home-icon" />
                        <div className="group-name">{groupName}</div>
                      </div>
                      <div className="group-meta">
                        <div className="group-meta-item">
                          <strong>그룹 최초 생성일</strong>
                          <span>{groupCreatedAt}</span>
                        </div>
                        <div className="group-meta-item">
                          <strong>멤버</strong>
                          <span>{groupMembers.join('  ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-row">
                <div className="personality-wrapper">
                  <div className="personality-section">
                    <div className="personality-header">
                      <span className="personality-date">{typeDate}</span>
                      <h2 className="section-title">청소 성격 유형</h2>
                    </div>
                    <div className="personality-content">
                      <div className="personality-type">
                        <span className="type-code">{typeCode}</span>
                        <span className="type-name">{typeName}</span>
                      </div>
                      <div className="personality-desc">{typeDesc}</div>
                    </div>
                  </div>
                </div>

                <div className="sensitivity-wrapper">
                  <div className="sensitivity-section">
                    <h2 className="section-title">청소 민감도</h2>
                    <div className="sensitivity-value">{sensitivity}%</div>
                    <div className="sensitivity-bar">
                      <div className="sensitivity-fill" style={{ width: `${sensitivity}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mypage-right">
              <div className="mypage-sidecard">
                <div className="card-section-header">
                  <h2>회원 정보</h2>
                  <button
                    className="edit-button"
                    onClick={() => setIsNicknameModalOpen(true)}
                    onMouseEnter={(e) => { e.target.style.background = '#74D3A4'; }}
                    onMouseLeave={(e) => { e.target.style.background = '#8BE2B6'; }}
                  >
                    편집
                  </button>
                </div>
                <p><strong>NAME</strong> {userName}</p>
                <p><strong>ID</strong> {userId}</p>

                <hr className="card-divider" />

                <h2 className="section-title">청소 습관 분석</h2>
                <Link to="/personality/1">청소 성격 유형 테스트 하러 가기</Link>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSensitiveModalOpen(true);
                  }}
                >
                  청소 민감도 설정하기
                </a>

                <hr className="card-divider" />

                <h2 className="section-title">기타</h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsGroupLeaveModalOpen(true);
                  }}
                >
                  그룹 탈퇴
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsUserLeaveModalOpen(true);
                  }}
                >
                  회원 탈퇴
                </a>
                <a href="#">로그아웃</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 닉네임 변경 모달 */}
      <Modal isOpen={isNicknameModalOpen} onClose={() => setIsNicknameModalOpen(false)}>
        <NicknameModal
          currentNickname={userName}
          onSave={(newName) => {
            setUserName(newName);
            setIsNicknameModalOpen(false);
          }}
        />
      </Modal>

      {/* 청소 민감도 설정 모달 */}
      <Modal isOpen={isSensitiveModalOpen} onClose={() => setIsSensitiveModalOpen(false)}>
        <CleanSensitive
          currentSensitivity={sensitivity}
          onSave={(newSensitivity) => {
            setSensitivity(newSensitivity);
            setIsSensitiveModalOpen(false);
          }}
          onClose={() => setIsSensitiveModalOpen(false)}
        />
      </Modal>

      {/* 그룹 탈퇴 모달 */}
      <Modal isOpen={isGroupLeaveModalOpen} onClose={() => setIsGroupLeaveModalOpen(false)}>
        <GroupLeaveModal
          currentGroup={groupName}
          onClose={() => setIsGroupLeaveModalOpen(false)}
          onLeave={handleGroupLeave}
        />
      </Modal>

      {/* 회원 탈퇴 모달 */}
      <Modal isOpen={isUserLeaveModalOpen} onClose={() => setIsUserLeaveModalOpen(false)}>
        <UserLeaveModal
          onClose={() => setIsUserLeaveModalOpen(false)}
          onLeave={handleUserLeave}
        />
      </Modal>
    </>
  );
}

export default MyPage;
