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
        blood_pressure : number //혈압
        temperature : number //체온
    }
}