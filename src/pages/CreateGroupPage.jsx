import Header from "../components/Header";
import { useState } from "react";
import "./CreateGroupPage.css";
import InvitationModal from "../components/InvitationModal";

function CreateGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [groupRule, setGroupRule] = useState("");
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  const handleAddMember = () => {
    // 공백 제한, 중복 제한
    if (memberInput.trim() && !members.includes(memberInput.trim())) {
      setInviteEmail(memberInput.trim());
      setIsModalOpen(true); // 모달 오픈
    }
  };

  const handleInvite = () => {
    if (inviteEmail && !members.some((m) => m.email === inviteEmail)) {
      const nickname = inviteEmail.split("@")[0];
      setMembers([...members, { nickname, email: inviteEmail }]);
    }
    setIsModalOpen(false);
    setMemberInput("");
    setInviteEmail("");
  };

  // 멤버 삭제
  const handleRemoveMember = (email) => {
    setMembers(members.filter((m) => m.email !== email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 그룹 생성 연동 로직 추가 예정
  };

  return (
    <>
      <Header />
      <main className="create-group-bg">
        <div className="create-group-card">
          <h2 className="create-group-title">새 그룹 만들기</h2>
          <form className="create-group-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <label className="form-label">1. 그룹명</label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="form-name"
                placeholder="그룹명을 입력해주세요."
              />
            </div>
            <div className="form-section">
              <label className="form-label">2. 그룹 규칙</label>
              <textarea
                value={groupRule}
                onChange={(e) => setGroupRule(e.target.value)}
                rows={4}
                className="form-rule"
                placeholder="그룹 규칙을 입력해주세요."
              />
            </div>
            <div className="form-section">
              <label className="form-label">3. 멤버 추가</label>
              <div className="member-input-row">
                <input
                  type="email"
                  value={memberInput}
                  onChange={(e) => setMemberInput(e.target.value)}
                  className="form-email"
                  placeholder="이메일을 입력해주세요."
                />
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="invite-btn"
                >
                  초대
                </button>
              </div>
              <div className="member-list">
                {members.map((member) => (
                  <div className="member-chip" key={member.email}>
                    {member.nickname}
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(name)}
                      className="remove-member-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button type="submit" className="create-btn">
              생성하기
            </button>
          </form>
        </div>
      </main>
      <InvitationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setMemberInput("");
          setInviteEmail("");
        }}
        nickname={inviteEmail ? inviteEmail.split("@")[0] : ""}
        email={inviteEmail}
        onInvite={handleInvite}
      />
    </>
  );
}

export default CreateGroupPage;
