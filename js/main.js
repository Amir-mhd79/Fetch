let button = document.querySelector("button.get");
let fetchComments = async () => {
  let html = "";
  let data = await fetch("https://jsonplaceholder.typicode.com/comments").catch((err) =>
      {document.querySelector("div.wrapper").innerText = err}
  );
  let res = await data.json();
  res.forEach((elem) => {
    html += `<div class="comment">
                <h2 class="postId">postId: ${elem.postId}</h2>
                <h2 class="id">ID: ${elem.id}</h2>
                <h2 class="name">Name: ${elem.name}</h2>
                <p class="email">Email: ${elem.email}</p>
                <p class="body">Comment: ${elem.body}</p>
            </div>`;
  });
  document.querySelector("div.wrapper").innerHTML = html;
};
button.addEventListener("click", fetchComments);
