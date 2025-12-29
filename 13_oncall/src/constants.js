const MONTH = {
    1: 31, 
    2: 28,
    3: 31, 
    4: 30, 
    5: 31, 
    6: 30, 
    7: 31, 
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

const NATIONAL_HOLIDAY = {
    1: 1,
    3: 1,
    5: 5,
    6: 6,
    8: 15,
    10: 3,
    10: 9,
    12: 25
}

const ERROR_MESSAGE = {

    WRONG_INPUT_MONTH_DAY_OF_THE_WEEK_FORM: Object.freeze(`[ERROR] 잘못된 형식의 입력입니다. 월(숫자),요일(한글)의 형식으로 다시 입력해주세요. (ex: 5,월)`),

    WRONG_INPUT_MONTH: Object.freeze(`[ERROR] 월에는 1부터 12 사이의 숫자로 입력해야 합니다. 다시 입력해주세요.`),

    WRONG_INPUT_DAY_OF_THE_WEEK: Object.freeze(`[ERROR] 요일에는 [일, 월, 화, 수, 목, 금, 토] 중 하나가 입력되어야 합니다. 다시 입력해주세요.`),

    WRONG_INPUT_EMPLOYEE_OVERLAP: Object.freeze(`[ERROR] 같은 사원이 한 순번에 2번 이상 들어갈 수 없습니다. 평일 비상 근무 순번부터 다시 입력해주세요.`),

    WRONG_INPUT_EMPLOYEE_NICKNAME_TOO_SHORT_OR_TOO_LONG: Object.freeze(`[ERROR] 사원의 닉네임은 1자에서 5자 사이입니다. 평일 비상 근무 순번부터 다시 입력해주세요.`),

    WRONG_INPUT_EMPLOYEE_COUNT_TOO_SMALL_OR_TO_BIG: Object.freeze(`[ERROR] 근무 순번에 등록되는 사원은 최소 5명, 최대 35명이어야 합니다. 평일 비상 근무 순번부터 다시 입력해주세요.`),
}

const INPUT_MESSAGE = {

    MONTH_DAY_OF_THE_WEEK: Object.freeze(`비상 근무를 배정할 월과 시작 요일을 입력하세요> `),

    WEEKDAY_EMERGENCY_WORK_SCHEDULE: Object.freeze(`평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `),

    OFFDAY_EMERGENCY_WORK_SCHEDULE: Object.freeze(`휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `),
}

const OUTPUT_MESSAGE = {

    IS_WEEKDAY_AND_NATIONAL_HOLIDAY: Object.freeze(`(휴일)`),
}

export {
    MONTH,
    DAY_OF_WEEK,
    NATIONAL_HOLIDAY,
    ERROR_MESSAGE,
    INPUT_MESSAGE,
    OUTPUT_MESSAGE,
};
