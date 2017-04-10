var CONTENT = [
    {
        img: "test.jpg",
        id: "test1",
        title: "Test Post",
        content: "Woot, it works"
    },
    {
        img: "test.jpg",
        id: "test",
        title: "Test Post",
        content: "Woot, it works"
    },
    {
        img: "test.jpg",
        id: "test2",
        title: "Test Post",
        content: "Woot, it works"
    },
    {
        img: "test.jpg",
        id: "test3",
        title: "Test Post",
        content: "Woot, it works"
    }

]
function addContent(img, title, content, id) {
    var post = document.createElement("section");
    post.id = id;
    
    var cont = document.createElement("div");
    cont.className = "container";
    
    var row = document.createElement("div");
    row.className = "row";
    row.dataset.bg = img;

    var t1 = document.createElement("div");
    t1.className = "col-lg-12";

    var t2 = document.createElement("div");
    t2.className = "section-title";

    var h = document.createElement("h1");
    h.innerHTML = title;

    var p = document.createElement("div");
    p.className = "cbody";
    p.innerHTML = content;

    t2.appendChild(h);
    t1.appendChild(t2);
    row.appendChild(t1);
    row.appendChild(p);
    cont.appendChild(row);
    post.appendChild(cont);
    document.getElementById('page-top').appendChild(post);

}
for (var i = 0; i < CONTENT.length; i++) {
    //update navbar
    var ln = document.createElement("li");

    var an = document.createElement("a");
    an.href = "#" + CONTENT[i].id;
    an.className = "page-scroll";
    an.innerHTML = CONTENT[i].title;

    ln.appendChild(an);
    document.getElementById('link').appendChild(ln);

    //add content
    addContent(CONTENT[i].img, CONTENT[i].title, CONTENT[i].content, CONTENT[i].id);
}