export const DEFAULT = {
  START:
    "1. 출석 확인\n2. 출석 수정\n3. 크루별 출석 기록 확인\n4. 제적 위험자 확인\nQ. 종료\n",
  NAME: "\n닉네임을 입력해 주세요.\n",
  TIME: "등교 시간을 입력해 주세요.\n",
};

export const FILE_URL = "./public/attendances.csv";
export const FINISH = "Q";
export const DAY_NAME_LIST = ["일", "월", "화", "수", "목", "금", "토"];
export const HOUR = {
  MIN: 0,
  MAX: 23,
};
export const MINUTE = {
  MIN: 0,
  MAX: 59,
};

export const ERROR = {
  EMPTY: "[ERROR] 값이 비었습니다. 다시 입력해주세요.",
  FILE: "[ERROR] 파일 이름을 읽을 수 없습니다.",
  HOLIDAY: "은 등교일이 아닙니다.",
  NAME: "[ERROR] 등록되지 않은 닉네임입니다.\n",
  WRONG: "[ERROR] 잘못된 형식을 입력하였습니다.",
  ATTENDANCE_DONE:
    "[ERROR] 이미 출석을 완료했습니다. 출석 시간을 변경할 경우, 수정 기능을 이용해주세요.",
};
