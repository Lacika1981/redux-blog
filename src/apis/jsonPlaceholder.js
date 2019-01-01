import axios from 'axios';


//create a baseURL here and you can call axios.get from any component
//without typing the baseURL again and again
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})