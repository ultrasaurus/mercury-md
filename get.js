import Mercury from '@postlight/mercury-parser';
let url = "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/"

Mercury.parse(url, { contentType: 'markdown' }).then(result => {
    let content = result.content;
    delete result['content'];

    // TODO: some kind of file i/o
    console.log("---");
    for (var key in result) {
        console.log(key + ": " + result[key]);
    }
    console.log("---");
    console.log(content)

});


