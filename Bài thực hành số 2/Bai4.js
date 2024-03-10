const weightInput = document.getElementById('#weight');
const heightInput = document.getElementById('#height');
const ageInput = document.getElementById('#age');
const bmiElement = document.getElementById('bmi');
const ClassificationElement = document.getElementById('classification');
const RecommendationElement = document.getElementById('recommendation');

form.addEventListener('#submit', (e) => {
    e.preventDefault();

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height * height);

    bmiValueElement.textContent = bmi.toFixed(2);

    let category;
    let recommendation;

    if (bmi < 18.5) {
        category = 'Dưới chuẩn';
        recommendation = 'Bạn nên ăn uống đầy đủ và tập thể dục thường xuyên để tăng cân.';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Bình thường';
        recommendation = 'Bạn nên duy trì chế độ ăn uống cân bằng và tập thể dục thường xuyên để giữ gìn sức khỏe.';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Thừa cân';
        recommendation = 'Bạn nên giảm lượng calo nạp vào và tập thể dục thường xuyên để giảm cân.';
    } else if (bmi >= 30) 
        category = 'Béo phì';
    // Xác định loại béo phì dựa trên độ tuổi
    const age = ageInput.value;
    if (age === 'trung-nien') {
        type = '1';
        recommendation = 'Bạn nên đi khám bác sĩ để được tư vấn về chế độ ăn uống và tập luyện phù hợp.';
    } else if (age === 'gia-lon-tuoi') {
        type = '2';
        recommendation = 'Bạn nên hạn chế ăn mỡ động vật, tập thể dục thường xuyên và đi khám bác sĩ định kỳ.';
    } else {
        type = '3';
        recommendation = 'Bạn nên hạn chế ăn mỡ động vật, tập thể dục nhẹ nhàng và đi khám bác sĩ định kỳ.';
    }
{
bmiCategoryElement.textContent = category;
bmiRecommendationElement.textContent = recommendation;
typeElement.textContent = type;
}
}});