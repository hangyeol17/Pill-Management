export type IPerson={ //사용자 정보, 건강 정보
    id: string
    image: string
    name: string
    modifiedDate : Date
    
    basic_data: {
    height : number //키
    weight : number //몸무게
    birth : Date //생년월일
    }

    //건강 상태
    health_data:{
        pulse : number //맥박
        blood_sugar : number //혈당
        workout : boolean //운동 여부
        num_exercies : number //주 운동 횟수
        blood_pressure : number //혈압
    }

    //앓고있는 질환여부(처방이 끝나면 설문으로 넘어가도 좋을듯)
    disease:{
        Cataract : boolean //백내장
        hemorrhoids : boolean //치질
        Pneumonia : boolean //폐렴
        joint : boolean //관절 질환
        dementia : boolean //치매
        diabetes : boolean //당뇨
        absent : boolean //결석
        gastroenteritis : boolean //위장염
        allergy : boolean //알레르기
        high_blood_pressure : boolean //고혈압
    }

    //증상
    symptom:{
        dizziness : boolean //어지럼증
        angina_pectoris :boolean //협심증
        abdominal_pain :boolean //복부 통증
        sleep_disorder : boolean //수면장애
    }
}