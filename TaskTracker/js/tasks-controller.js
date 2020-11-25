tasksController = function () {
    var taskPage;
    var initialised = false;
    return {
        init: function (page) {
            if (!initialised) {
                taskPage = page;
                $(taskPage)
                    .find('[required="required"]')
                    .prev('label')
                    .append('<span>*</span>')
                    .children('span')
                    .addClass('required');
                $(taskPage)
                    .find('tbody tr:even')
                    .addClass('even');
                $(taskPage)
                    .find('#btnAddTask')
                    .click(function (evt) {
                        evt.preventDefault();
                        $(taskPage).find('#taskCreation').removeClass('not');
                    });
                $(taskPage).find('tbody tr').click(function (evt) {
                   console.log(evt.target);

                    $(evt.target)
                        .closest('td')
                       .siblings()
                       .andSelf()
                        .toggleClass('rowHighlight');
                });
                $(taskPage).find('#tblTasks tbody').on('click','.deleteRow', function (evt) {
                    evt.preventDefault();
                    $(evt.target).parents('tr').remove();
                });
                $(taskPage).find('#saveTask').click(function (evt) {
                    evt.preventDefault();
                    if ($(taskPage).find('form').valid()) {
                        var task = $('form').toObject();
                        $('#taskRow').tmpl(task ).appendTo($(taskPage).find( '#tblTasks tbody'));
                    }
                });
                $(taskPage).find('#print').click(function (evt) {
                    evt.preventDefault();

                    var obj = $(taskPage).find('form').toObject();
                      
                    console.log(JSON.stringify(obj));

                });

                $(taskPage).find('#load').click(function (evt) {
                    evt.preventDefault();
                    var obj = {
                        task: "demo task",
                        requiredBy: "1992-11-11",
                        category: "Work"
                    };
                    $(taskPage).find('form').fromObject(obj);
                });
                initialised = true;
            }
        }
    }
}();