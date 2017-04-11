var CONTENT = [
    {
        img: "i1.jpg",
        id: "p1",
        title: "Test Post 1",
        content: "Woot, it instantiates"
    },
    {
        img: "i2.jpg",
        id: "test",
        title: "Test Post 2",
        content: "And the image change"
    }

]
function addContent(img, title, content, id, start) {
    var post = document.createElement("section");
    post.id = id;
    
    var cont = document.createElement("div");
    cont.className = "container post";
    cont.dataset.bg = img;
    
    var im = document.createElement("img");
    im.id = img;
    im.src = "img/"+img;
    if (start)
        im.className = "opaque";

    document.getElementById("con").appendChild(im);

    var row = document.createElement("div");
    row.className = "row";
    

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
    start = i == 0;

    //update navbar
    var ln = document.createElement("li");

    var an = document.createElement("a");
    an.href = "#" + CONTENT[i].id;
    an.className = "page-scroll";
    an.innerHTML = CONTENT[i].title;

    ln.appendChild(an);
    document.getElementById('link').appendChild(ln);

    //add content
    addContent(CONTENT[i].img, CONTENT[i].title, CONTENT[i].content, CONTENT[i].id, start);
}