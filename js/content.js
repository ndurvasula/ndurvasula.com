var CONTENT = [
    {
        img: "about.jpg",
        id: "about",
        title: "About",
        content: "Hey there, I'm Naveen. I'm currently a sophomore at Montgomery Blair HS. <br/><br/>\
                    Stuff I like:\
                    <br/><ul><li>Research</li><li>Hackathons</li><li>Tennis</li><li>Piano</li></ul>\
                    Stuff I dislike:\
                    <br/><ul><li>Game controllers with convex sticks (why?)</li><li>Apple products</li><li>Shoe laces</li></ul>\
                    Here's my <a href = 'http://github.com/ndurvasula'>GitHub</a> and <a href = 'resume.pdf'>resume</a>."
    },
    {
        img: "isef.jpg",
        id: "kidneys",
        title: "Kidneys",
        content: "<p>My <a href = 'http://github.com/ndurvasula/KPDMetric'>current ongoing research project</a> is developing a participant-specific estimate of expected organ quality in a kidney paired donation system.\
                    Essentially, if you are a patient with end-stage renal disease, and wish to enter a kidney paired donation system (a system in which\
                    patients paired with incompatible donors trade with other such pairs to receive a kidney), my work aims to tell you what the quality of the kidney you will receive is,\
                    as well as how long it will take for you to receive this kidney. </p>\
                    <p>To do this, first I Monte Carlo simulated a given patient in a kidney exchange based on published distributions describing demographic data in a steadystate US KPD system, and the codebase \
                    <a href = 'https://github.com/JohnDickerson/KidneyExchange'>here</a>. By recording the quality of the kidney received, and the waiting time, the expected values of\
                    these numbers can be computed. Simulating for a sufficient number of trajectories is far too costly, so sampling techniques are necessary to cut down on computation time.</p>\
                    <p>The sampling method described in section 3 of <a href = 'papers/sampling.pdf'>my paper</a>, with the weighted distance modification in section 6, was implemented and tested.\
                    The results were pretty bad. Due to the <a href = 'https://en.wikipedia.org/wiki/Curse_of_dimensionality'>curse of dimensionality</a>, there was still an unreasonable amount of\
                    sampling error when a whopping 10^11 samples were taken. However, trend data indicated that stronger assumptions can be made, and as of now, a Bayesian optimization approach to\
                    sampling is in the works.</p>\
                    <p>This work was done under the guidance of <a href = 'http://jpdickerson.com/'>Assistant Prof. John Dickerson</a> and <a href = 'https://www.cs.umd.edu/~srin/'>Prof. Aravind Srinivasan</a>\
                    from the University of Maryland. I got a mention <a href = 'https://www.cs.umd.edu/article/2017/03/professor-aravind-srinivasan-and-assistant-professor-john-dickerson-mentor-award'>here</a>\
                    for being an <a href = 'https://student.societyforscience.org/intel-isef'>Intel ISEF finalist</a>. This work will be submitted to the <a href = 'http://aaai.org/Conferences/AAAI/aaai18.php'>AAAI 18</a> conference\
                    and the <a href = 'http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1600-6143'>American Journal of Transplantation</a>. At ISEF, this project won the <a href = 'http://www.avasc.com/'>AVASC</a> award.</p>"
    },
    {
    	img: "bgb.jpg",
    	id: "systems",
    	title: "MBHS Systems",
    	content: "<p><a href = 'mbhs.systems'>MBHS Systems</a> is a club that I am starting, that aims to bring some entrepreneurial and group based research to Montgomery Blair HS. " +
		"As a program that claims that it is based around research, <a href = 'https://mbhs.edu/departments/magnet/'>Montgomery Blair HS Magnet</a> really only has the Senior Research Project to show for it. The objective of MBHS systems " +
		"is to demonstrate how impactful MBHS students can be. The club centers around the idea, design, development, and deployment of a product. The problem to be solved is " +
		"very technically challenging, spanning several fields in STEM, and MBHS Systems aims to solve and deploy a solution over the couse of a year.</p>" +
		"<p>This year, MBHS Systems will solve the problem of global pollen modelling using satellite imagery. From satellite imagery of a region, features such as " +
		"what trees are there, what the terrain is, and what bodies of water are there will be extracted. Using that in conjunction with how current weather systems are " +
		"behaving in the region allows for the prediction for the concentration of pollen in the area. The concentration will be converted into a readable value for the user. " +
		"Users can also select what species of trees they are allergic to, and from that, they can get a personalized value. The app will also learn from the subjective input of " +
		"the user to give the user a personalized value for the metric.</p>"
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
