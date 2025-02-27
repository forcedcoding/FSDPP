const getData = (e) => {
    const profile = e.target.value;
    const pr = fetch(`https://api.github.com/users/${profile}`);
    console.log(pr) ;
    pr.then((a) => {
        const pr2 = a.json();
        pr2.then((data) => {
            showUI(data);
        });
    }).catch((b) => {
        console.log(b);
    });
};

getData();

function showUI(data){
    console.log("Data : " + data);
    const ul = document.createElement("ul");
    data.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element.title;
        ul.appendChild(li);
    });
}