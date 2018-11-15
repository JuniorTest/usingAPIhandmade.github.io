$(function () {
    $.ajax({
        url: "https://api-tips.herokuapp.com/api/tip",
        success: function (result) {
            let tip = "";
            for (let i = 0; i < 3; i++) {
                tip += `<div class="col">
                            <img src="${result[i].image}" alt="ảnh 1">
                            <a href="#" class="tip">${result[i].tip}</a>
                            <a href="#" class="link_doc">${result[i].description}
                        </div>`;
            }
            $('#tip').html(tip);

            let tip2 = "";
            for (let j = 3; j < 6; j++) {
                tip2 += `<div class="col">
                            <img src="${result[j].image}" alt="ảnh 1">
                            <a href="#" class="tip">${result[j].tip}</a>
                            <a href="#" class="link_doc">${result[j].description}
                        </div>`;
            }
            $('#tip2').html(tip2);
        }
    });
});