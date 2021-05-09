import axios from 'axios'


export function getLocation(){
    const promise = axios.get('https://ipapi.co/json/');
    const dataPromise = promise.then((res) => res.data);

    return dataPromise
}




// export const getLocation = (loc = {}) => {
//     axios.get('https://ipapi.co/json/').then((res) => {
//         let data = res.data;
//         loc = {
//             countryName: data.country_name,
//             countryCode: data.country_code
//         }
//     }).then(() => {
//         console.log(loc);
//     }).then(() =>{
//         return loc;
//     })
// }

// const location = getLocation({});
// console.log(location);


