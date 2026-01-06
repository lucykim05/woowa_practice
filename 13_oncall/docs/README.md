# README.md

## 개발자 비상근무

근무자들과 월, 요일을 입력하면 자동적으로 비상 근무표를 짜주는 자동화 프로그램

## 설계

## 프로젝트 구조

## 기능 상세 설명

### Model

### View

### Controller

## 구현 기능 목록

### Model

Month

- month
- days
- holiday
- [ ] initialize

Worker

- type
- nameList
- [ ] changeWorker

System

- Month
- holidayWorker
- weeklyWorker
- [ ] arrange
- [ ] makeResultMsg

### View

InputView

- [ ] startMonth
- [ ] weeklyWorker
- [ ] holidayWorker

OutputView

- [ ] result

### Controller

SystemController

- [ ] getStartMonth
- [ ] getWeeklyWorker
- [ ] getHolidayWorker

### constants.js

- [ ] DEFAULT_MSG
  - [ ] START_MONTH : `비상 근무를 배정할 월과 시작 요일을 입력하세요>`
  - [ ] WEEKLY_WORKERS : `평일 비상 근무 순번대로 사원 닉네임을 입력하세요>`
  - [ ] HOLIDAY_WORKERS : `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>`
- [ ] NATIONAL_HOLIDAY

  - [ ] 1 : [1]
  - [ ] 3 : [1]
  - [ ] 5 : [5]
  - [ ] 6 : [6]
  - [ ] 8 : [15]
  - [ ] 10 : [3, 9]
  - [ ] 12 : [25]

- [ ] MONTH_INFO

  - [ ] 1 : 31
  - [ ] 2 : 28
  - [ ] 3 : 31
  - [ ] 4 : 30
  - [ ] 5 : 31
  - [ ] 6 : 30
  - [ ] 7 : 31
  - [ ] 8 : 31
  - [ ] 9 : 30
  - [ ] 10 : 31
  - [ ] 11 : 30
  - [ ] 12 : 31

- [ ] DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

## Test

- [ ] 기본 테스트 통과

### 추가한 테스트

- [ ]
