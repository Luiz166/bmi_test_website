var btn = document.querySelector("#form__btn");

btn.addEventListener("click", function(){
    var input_h = document.querySelector("#height");
    var height = input_h.value;
    var input_w = document.querySelector("#weight");
    var  weight = input_w.value;

    const height__formated = parseFloat(height);
    const weight__formated = parseFloat(weight);

    const bmi = weight__formated / (height__formated * height__formated);
    Math.round(bmi)
    console.log(bmi)

    if (bmi <= 18.5){
        window.alert('Under weight')
    }
    else if (bmi > 18.6 && bmi<24.9){
        window.alert('Ideal weight')
    }
    else if(bmi > 25 && bmi < 29.9){
        window.alert('slightly overweight')
    }
    else if (bmi > 30 && bmi < 34.9){
        window.alert('obesity grade one')
    }
    else if (bmi > 35.0 && bmi < 39.9){
        window.alert('obesity grade two(severe)')
    }
    else{
        window.alert('obesity grade three(morbid)')
    }
});