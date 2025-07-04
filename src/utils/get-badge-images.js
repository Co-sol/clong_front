import badge1 from "./../assets/badge1.PNG";
import badge2 from "./../assets/badge2.PNG";
import badge3 from "./../assets/badge3.PNG";
import badge4 from "./../assets/badge4.PNG";
import badge5 from "./../assets/badge5.PNG";

// 뱃지 이미지 가져오는 함수
export function getBadgeImage(badgeId) {
    switch (badgeId) {
        case 1:
            return badge1;
        case 2:
            return badge2;
        case 3:
            return badge3;
        case 4:
            return badge4;
        case 5:
            return badge5;
    }
}
