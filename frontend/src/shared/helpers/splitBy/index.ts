// main ====================================================== //
// "split me", index = 3
//     ^
// "split me" -> ["spl", "it me"]
const splitBy = (string: string, sep_index: number) => {
    let length_string = string.length;
    
    let isBreak = length_string < sep_index || sep_index <= 0;
    if (isBreak) {
        return ["", string];
    } else {
        let result = ["", ""];
        for (let index = 0; index <= length_string - 1; index++) {
            let index_part = Number(index >= sep_index);
            result[index_part] += string[index];
        }
        return result;
    }
};

// export ==================================================== //
export default splitBy;