/*
    ! Problem 5:  isBestFriend


    *তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।


    Sample Data:

    Input                                                           Output

    { name: "abul", friend: "babul" },                              true
    { name: "babul", friend: "abul" }


    { name: "abul", friend: "kabul" },                               false
    { name: "kabul", friend: "sabul" }


    { name: "doe", friend: "alex" },                                  true
    { name: "john", friend: "doe" }

*/

function isBestFriend(objectOne, objectTwo) {
    if (objectOne.name === objectTwo.friend && objectOne.name === objectTwo.friend) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isBestFriend({ name: "doe", friend: "alex" },{ name: "john", friend: "doere" }));

