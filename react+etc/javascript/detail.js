var list = [
    {title: "Title1", content: 'content1'},
    {title: "Title2", content: 'content2'},
    {title: "Title3", content: 'content3'},
    {title: "Title4", content: 'content4'},
    {title: "Title5", content: 'content5'},
    {title: "Title6", content: 'content6'},
    {title: "Title7", content: 'content7'},
    {title: "Title8", content: 'content8'},
]

len = $('.gallery-cards').length;
for (var i=0; i < len; i++) {
    console.log('title'+(i+1));
    $('.gallery-cards:eq('+i+')').children('figure').children('img').attr("src", './img/car'+(i%3+1)+'.png');
    $('.gallery-cards:eq('+i+')').children('div').children('h6').html(list[i].title);
    $('.gallery-cards:eq('+i+')').children('div').children('p').html(list[i].content);
}

keyword = '';
keywordExist = false;
matched = []
function isKeyword(element, idx)  {
    if(element.title.includes(keyword) || element.content.includes(keyword))  {
      console.log(element);
      keywordExist = true;
      matched.push(idx);
      return true;
    }
}

$('#searchtBtn').click(function() {
    keyword = $('#searchForm').val();
    if (keyword == '' && keywordExist == true) {
        $('.gallery-cards').show()
        keywordExist = false;
    }
    else if (keyword == '') {
        alert('검색창에 검색할 키워드를 입력해주세요.');
    }
    else {
        keywordExist = false;
        matched = [];
        list.filter(isKeyword);
        if (keywordExist == false) {
            alert('찾으시는 검색 결과가 존재하지 않습니다.');
        } else {
        $('.gallery-cards').hide();
        for (var i=0; i < matched.length; i++) {
            // console.log(matched[i]);
            $('.gallery-cards:eq('+matched[i]+')').show();
        }
    }
    }
});