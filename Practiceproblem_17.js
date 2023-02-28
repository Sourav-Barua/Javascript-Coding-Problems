/* 
    ! Problem 3:  oilPrice

    todo: ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

    ? প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
    ? প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
    ? প্রতি লিটার অকটেনের এর দাম – 135 টাকা

    !এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
*/

function oilPrice(dieselLi, petrolLi, octaneLi){
    const dieselPrice = dieselLi * 114 ;
    const petrolPrice = petrolLi * 130 ;
    const octanePrice = octaneLi * 135 ;

    const total = dieselPrice + petrolPrice + octanePrice;
    return total;
}
const value = oilPrice(0, 2, 3);
console.log(value);