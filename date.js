
    let today = new Date();
    let day = "";
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
     day = today.toLocaleDateString("en-US", options);

module.exports = day;