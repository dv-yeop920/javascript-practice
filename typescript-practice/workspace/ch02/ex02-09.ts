//TODO - 일반 인터페이스와 제네릭 인터페이스 차이점 알아보기 : 일반 인터페이스 
//NOTE - 일반 인터페이스는 두개의 타입의 값을 받으려면 인터페이스를  두개 만들고 유니온 타입을 사용 해야 한다 

(()=>{
    interface CityDropdown {
        value: string,
        selected: boolean
    }

    interface ZipcodeDropdown {
        value: number,
        selected: boolean
    }

    const cityList: CityDropdown[] = [
        {
            value: '서울시',
            selected: false
        },
        {
            value: '인천시',
            selected: true
        },
        {
            value: '광주시',
            selected: false
        }
    ]


    const createDropdown = (list: CityDropdown[] | ZipcodeDropdown[]): string => 
        {
            return list.map((city) => {
                return(
                `
                <select>
                    <option ${ city.selected ? city.selected : "" }>
                        ${ city.value }
                    </option>
                </select>
                `
                )
            }).join("");
    }


    const cityTag = createDropdown(cityList);

    console.log(cityTag);


    const zipcodeList: ZipcodeDropdown[] = [
        {
            value: 12345,
            selected: false
        },
        {
            value: 34567,
            selected: false
        },
        {
            value: 56789,
            selected: true
        }
    ];

    const zipcodeTag = createDropdown(zipcodeList);

    console.log(zipcodeTag);
})();
