import type {IPerson} from './User'
import * as F from './faker'
import * as U from './util'

export const createRandomPerson = (): IPerson => {
    const name = F.randomName()
    return {
        id: F.randomId(),
        image: F.randomImage(),
        modifiedDate: new Date(),
        name,

        basic_data: {
            height : U.random(100, 200), //키
            weight : U.random(3, 150), //몸무게
            birth: F.randomDate() //생년월일
        },

        //건강 상태
        health_data:{
            pulse : U.random(10, 100), //맥박
            blood_sugar : U.random(10, 100), //혈당
            workout : F.randomBoolean(), //운동 여부
            num_exercies : U.random(0, 7), //주 운동 횟수
            blood_pressure : U.random(10, 100) //혈압
        },

    //앓고있는 질환여부(처방이 끝나면 설문으로 넘어가도 좋을듯)
        disease:{
            Cataract : F.randomBoolean(), //백내장
            hemorrhoids : F.randomBoolean(), //치질
            Pneumonia : F.randomBoolean(), //폐렴
            joint : F.randomBoolean(), //관절 질환
            dementia : F.randomBoolean(), //치매
            diabetes : F.randomBoolean(), //당뇨
            absent : F.randomBoolean(), //결석
            gastroenteritis : F.randomBoolean(), //위장염
            allergy : F.randomBoolean(), //알레르기
            high_blood_pressure : F.randomBoolean() //고혈압
    },

    //증상
    symptom:{
        dizziness : F.randomBoolean(),//어지럼증
        angina_pectoris :F.randomBoolean(), //협심증
        abdominal_pain :F.randomBoolean(), //복부 통증
        sleep_disorder : F.randomBoolean() //수면장애
    },
}
}