var data = [
    {idx: 1, img: "goods/01.jpg", sale: 12000, title: "바지", price: "3,500", group: "의류"},
    {idx: 2, img: "goods/02.jpg", sale: 17500, title: "티셔츠", price: "23,000",group: "의류"}
]

data.forEach((a, i)=>{
    var 템플릿 = `<div class="card">
    <div class="imgBox">
        <img src=${data[i].img} alt="">
    </div>
    <div class="textBox">
        <h2> ${data[i].title}</h2>
        <p>할인 : ${data[i].sale}</p>
        <p>그룹 : ${data[i].group}</p>
        <button>가격 : ${data[i].price}</button>
    </div>`

    $('.product').append(템플릿)
})

$('#pirce').click(function(){
    data.sort(function(a,b){
        return a.price - b.price
    });
});