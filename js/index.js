$(document).ready(function () {
  let list = $('#fullpage .section')

  $('#fullpage').fullpage({
    afterLoad: function (anchorLink, index) {
      console.log('执行了afterLoad');
      $(list).map(ele => {
        $(list[ele]).find('.text_box').removeClass('animate__backInLeft animate__backInRight')
        $(list[ele]).find('.img').removeClass('animate__backInLeft animate__backInRight')
      });
      if (index.index === 0 || index.index === 2) {
        $(list[index.index]).find('.text_box').addClass(' animate__backInLeft')
        $(list[index.index]).find('.img').addClass(' animate__backInRight')
      } else {
        $(list[index.index]).find('.text_box').addClass(' animate__backInRight')
        $(list[index.index]).find('.img').addClass(' animate__backInLeft')
      }
    }
  })
})