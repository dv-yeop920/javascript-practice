"use strict";
// indexable 타입
(function () {
    var kim = {
        name: '김철수',
        email: 'kim@gmail.com',
        phones: {
            home: {
                num: '031...'
            },
            mobile: {
                num: '010...'
            }
        }
    };
    var lee = {
        name: '이영희',
        email: 'lee@gmail.com',
        phones: {
            office: {
                num: '02...'
            },
            mobile: {
                // number: '010...', // 이 주석을 제거하면 컴파일 에러가 발생해야 함
                num: '010...'
            }
        }
    };
    console.log(kim, lee);
})();
