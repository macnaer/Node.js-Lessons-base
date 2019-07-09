exports.HomePage = ("/", (req, res, next) => {
    res.render("home", {
        title: "Node Pug",
        h1: "Home page."
    });
});