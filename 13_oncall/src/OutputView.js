import { 
    Console,
} from "@woowacourse/mission-utils";

import {
    NATIONAL_HOLIDAY
} from './constants.js'

const OutputView = {

    printSchedule(month, scheduleSet) {
        for (const schedule of scheduleSet) {
            const isHoliday = NATIONAL_HOLIDAY[month] && NATIONAL_HOLIDAY[month] === schedule.day;
            if (isHoliday && (schedule.dayOfWeek != '토' || schedule.dayOfWeek != '일')) {
                Console.print(`${month}월 ${schedule.day}일 ${schedule.dayOfWeek}(휴일) ${schedule.name}`);
            }
            else {
                Console.print(`${month}월 ${schedule.day}일 ${schedule.dayOfWeek} ${schedule.name}`);
            }
        }
    },
}

export default OutputView;