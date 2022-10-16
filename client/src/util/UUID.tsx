export const UUIDGenerator = () => {
    let template = "XXXX-XXXX-XXXX-XXXX-XXXX";
    const templateArray = [...template];
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    for (let i = 0; i < template.length; i++){
        if (template[i] != "-"){
            templateArray[i] = chars[Math.floor(Math.random() * 62)]
        }    
    }

    let outputString = templateArray.join('');

    return outputString;
}