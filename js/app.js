const handlers = {};

$(()=>{

    let loadingBox = $('#loadingBox');
    let dummy = $('#dummy');
    $(document).on({
        ajaxStart: function () {
            dummy.hide();
            loadingBox.show()
        },
        ajaxStop: function () {
            loadingBox.hide();
            dummy.show();
        }
    });

    const app = Sammy ('#app',function () {
        this.use('Handlebars','hbs');

        this.get('index.html', function () {
            this.redirect('#/home');
        });

        this.get('#/home',handlers.home);

        this.get('#/login',handlers.login);
        this.post('#/login',handlers.loginAction);

        this.get('#/register',handlers.register);
        this.post('#/register',handlers.registerAction);

        this.get('#/logout',handlers.logout);

        this.get('#/myAccount', handlers.myAccount);

        this.get('#/cart',handlers.cart);

        this.get('#/eventsList',handlers.eventsList);

        this.get('#/edit/:eventId',handlers.eventEdit);
        this.post('#/edit/:eventId',handlers.eventEditAction);


    });

    app.run();


});