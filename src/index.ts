const a = 1;

// 1. 타입스크립트는 기본적으로 전역 모듈(global module)로 인식
// 2. 개별 export import가 없으면 전역 모듈로 인식
// 3. moduleDetection 옵션을 사용하면 모듈로 인식하게 할 수 있음

// 해결방법1
// export {};
// // export{} : 독립된 격리된 모듈
// 해결방법2
// "moduleDetection": "force"
