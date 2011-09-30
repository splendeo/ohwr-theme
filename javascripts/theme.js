document.observe("dom:loaded", function() {

  var notices = $$('.flash');
  var pageTitle = $('content').down('h2');

  notices.each(function(notice){
    pageTitle.insert({ after: notice });
    pageTitle.show();
  });

});
