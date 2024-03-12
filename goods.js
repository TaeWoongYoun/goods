var data = [
    {idx: 1, img: "goods/01.jpg", sale: 12000, title: "바지", price: "3,500", group: "의류"},
    {idx: 2, img: "goods/02.jpg", sale: 17500, title: "티셔츠", price: "23,000",group: "의류"},
    {idx: 3, img: "goods/03.jpg", sale: 1500, title: "키링", price: "13,500", group: "악세사리"},
    {idx: 4, img: "goods/04.jpg", sale: 17511, title: "응원풍선", price: "12,500", group: "응원도구"},
    {idx: 5, img: "goods/05.jpg", sale: 12456, title: "글러브", price: "7,500", group: "야구용품"},
    {idx: 6, img: "goods/06.jpg", sale: 17454, title: "헬멧", price: "143,500", group: "야구용품"},
    {idx: 7, img: "goods/07.jpg", sale: 27000, title: "베트", price: "32,500", group: "야구용품"},
    {idx: 8, img: "goods/08.jpg", sale: 1484, title: "모자", price: "7,500", group: "의류"},
    {idx: 9, img: "goods/09.jpg", sale: 54267, title: "세트", price: "115,500", group: "야구용품"},
    {idx: 10, img: "goods/10.jpg", sale: 7267, title: "체육복바지", price: "10,000", group: "의류"}
]

data.sort(function(a,b){
        return b.sale - a.sale;
});

data.forEach((a, i)=>{
    var 템플릿 = `<div class="card">
    <div class="imgBox">
        <img src=${data[i].img} alt="">
    </div>
    <div class="textBox">
        <h2> ${data[i].title}</h2>
        <p>판매량 : ${data[i].sale}</p>
        <p>그룹 : ${data[i].group}</p>
        <button>가격 : ${data[i].price}</button>
    </div>`

    $('.product').append(템플릿)
})

$('#price').click(function(){
    data.sort(function(a,b){
        return parseInt(a.price.replace(',', ''), 10) - parseInt(b.price.replace(',', ''), 10);
    });

    $('.product').html('');

    data.forEach((a, i)=>{
        var 템플릿 = `<div class="card">
        <div class="imgBox">
            <img src=${data[i].img} alt="">
        </div>
        <div class="textBox">
            <h2> ${data[i].title}</h2>
            <p>판매량 : ${data[i].sale}</p>
            <p>그룹 : ${data[i].group}</p>
            <button>가격 : ${data[i].price}</button>
        </div>`
    
        $('.product').append(템플릿)
    })
});

$('#sale').click(function(){
    data.sort(function(a,b){
        return a.sale - b.sale;
    });

    $('.product').html('');

    data.forEach((a, i)=>{
        var 템플릿 = `<div class="card">
        <div class="imgBox">
            <img src=${data[i].img} alt="">
        </div>
        <div class="textBox">
            <h2> ${data[i].title}</h2>
            <p>판매량 : ${data[i].sale}</p>
            <p>그룹 : ${data[i].group}</p>
            <button>가격 : ${data[i].price}</button>
        </div>`
    
        $('.product').append(템플릿)
    })
});

$('#sale2').click(function(){
    data.sort(function(a,b){
        return b.sale - a.sale;
    });

    $('.product').html('');

    data.forEach((a, i)=>{
        var 템플릿 = `<div class="card">
        <div class="imgBox">
            <img src=${data[i].img} alt="">
        </div>
        <div class="textBox">
            <h2> ${data[i].title}</h2>
            <p>판매량 : ${data[i].sale}</p>
            <p>그룹 : ${data[i].group}</p>
            <button>가격 : ${data[i].price}</button>
        </div>`
    
        $('.product').append(템플릿)
    })
});

var groupsSet = new Set(data.map(item => item.group));
var groupsArray = Array.from(groupsSet);

// 요소 가져오기
var groupListButton = document.getElementById("groupListButton");
var groupSelect = document.getElementById("groupSelect");

// 셀렉트 박스에 옵션 추가
groupsArray.forEach(group => {
    var option = document.createElement("option");
    option.value = group;
    option.text = group;
    groupSelect.add(option);
});

// 버튼 클릭 이벤트 리스너
groupListButton.addEventListener("click", function() {
    var selectedGroup = groupSelect.value;
    console.log("선택된 그룹: " + selectedGroup);
});

