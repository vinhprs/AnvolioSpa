const quoteList = [
    {
        author: "ANGELA TOURMA",
        content: "Sed vulputate augue nec tincidunt placerat. Morbi ac porttitor sem. Sed sed laoreet metus, sit amet viverra augue. Phasellus nunc ligula, vulputate non blandit eget, rhoncus a felis. Sed vitae dui ut urna sagittis accumsan. Vestibulum mauris nunc, mattis imperdiet tempor non, pulvinar vitae risus.",
        url: './img/evaluate3.jpeg'
    },
    {
        author: "LISA DOMERA",
        content: "In tincidunt lectus lectus, a faucibus diam finibus et. Duis vitae purus eget lacus mattis fringilla eu non ante. Quisque eget lacus arcu. Pellentesque eleifend hendrerit nulla eu porta. Mauris mollis, risus vitae posuere fermentum, quam diam venenatis ligula, et elementum urna arcu quis nibh.",
        url: './img/evaluate1.jpeg'
    },
    {
        author: "ZOE MANDELA",
        content: "Duis accumsan a nunc non posuere. Aenean nec purus nibh. Nullam volutpat et purus eleifend facilisis. Mauris venenatis posuere lectus, eget dignissim ex dignissim at. Nulla facilisi. Sed sollicitudin imperdiet tortor id molestie. Quisque sodales nec tellus nec consectetur. Maecenas a interdum augue.",
        url: './img/evaluate2.jpeg'
    }
]

const author = document.querySelector('.evaluate-quote__author-heading')
const content = document.querySelector('.evaluate-quote__content')
const img = document.querySelector('.evaluate-quote__author-img')

let i = 0
const loopQuoteList = () => {
    author.textContent = quoteList[i].author
    content.textContent = quoteList[i].content
    img.src = quoteList[i].url
    i++
    if(i > 2) {
        i=0
    }
};

setInterval(loopQuoteList, 3000)
// console.log(author, content, img)