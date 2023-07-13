// imports =================================================== //
import { LinkList } from "@shared/libs/linkList";
import isEqual from "@shared/helpers/isEqual";

// main ====================================================== //

// test ------------------------------------------------------ //
function Test(header, micro_tests) {
    console.log("TESTING " + "\'" + header + "\'");
    let final_message = ["Good job!", ""];
    for (let index = 0; index < micro_tests.length; index++) {
        let micro_test = micro_tests[index];
        let [isSuccess, message] = microTest(micro_test);
        if (!isSuccess) {
            final_message = message;
            break;
        }
    }
    __showMessage(...final_message);
}

// micro test ------------------------------------------------ //
function microTest(test) {
    let checks = test.checks;
    while (checks.firstNode) {
        let [params, result] = checks.firstNode;
        let current_output = test.api(...params);
        if (!isEqual(current_output, result)) {
            return [
                false,
                [
                    [
                        `the test was executed with an error!` ,
                        ` `,
                        `Function under test: ${test.api.name}`,
                        `-------------------------------------`,
                        `Parameters:          ${JSON.stringify(params)}`,
                        `-------------------------------------`,
                        `Expected output:     ${JSON.stringify(result)}`,
                        `------------------------------------`,
                        `Current output:      ${JSON.stringify(current_output)}`
                    ],
                    "\n"
                ]
            ];
        }
        checks.shift();
    }
    return [true, ["Good!", ""]];
}
function createMicroTest(api, ...data) {
    let checks = new LinkList();
    for (let index = 0; index < data.length; index++) {
        checks.push(data[index]);
    }
    return { api, checks };
}

// output values to the console ------------------------------ //
function __showMessage(sentences, sep=", ") {
    let message = "";
    for (let index = 0; index < sentences.length; index++) {
        let sentence = sentences[index];
        message += sentence + sep;
    }
    console.log(message);
}

// export ==================================================== //
export { microTest, createMicroTest, Test };
export default Test;