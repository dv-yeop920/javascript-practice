"use strict";
//TODO - 일반 인터페이스와 제네릭 인터페이스 차이점 알아보기 : 제네릭
//NOTE - 제네릭 인터페이스는 하나에 몰아서 할 수 있다 
(() => {
    const cityList = [
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
    ];
    const zipcodeList = [
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
    const createDropdown = (list) => {
        return list.map((city) => {
            return (`
                <select>
                    <option ${city.selected ? city.selected : ""}>
                        ${city.value}
                    </option>
                </select>
                `);
        }).join("");
    };
    const cityTag = createDropdown(cityList);
    console.log(cityTag);
    const zipcodeTag = createDropdown(zipcodeList);
    console.log(zipcodeTag);
})();
