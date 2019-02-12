export const SET_DATA='SET_DATA';
// 方便修改，在reduer使用地方引入这个东西，修改的话只需要在actions文件里面进行

export function set(data){
    
    return{
        type:SET_DATA,
        payload:data
    }
}
// 在这里定义并且暴露接口，在使用的地方只要 xxx.set(type,payload) 即可

export default{
    set
}


