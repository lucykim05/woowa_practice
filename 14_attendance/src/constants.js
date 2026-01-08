export const DEFAULT = {
  START:
    "1. 출석 확인\n2. 출석 수정\n3. 크루별 출석 기록 확인\n4. 제적 위험자 확인\nQ. 종료\n",
  NAME: "\n닉네임을 입력해 주세요.\n",
};

export const FILE_URL = "../../public/attendances.csv";
export const FINISH = "Q";
export const DAY_NAME_LIST = ["일", "월", "화", "수", "목", "금", "토"];

export const ERROR = {
  EMPTY: "[ERROR] 값이 비었습니다. 다시 입력해주세요.",
  FILE: "[ERROR] 파일 이름을 읽을 수 없습니다.",
  HOLIDAY: "은 등교일이 아닙니다.",
};
