export const setText = (txt) => {
    //console.log(txt);
    return {
        type: 'setText',
        payload: txt
    }
}