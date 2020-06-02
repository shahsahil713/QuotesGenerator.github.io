const quotes = [
    {
        name:'Albert Einstein',
        qoute:'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.'
    },
    {
        name:'Aristotle',
        qoute:'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'
    },
    {
        name:'Tony Robbins',
        qoute:'If you do what you’ve always done, you’ll get what you’ve always gotten.'
    },
    {
        name:'Kanye West',
        qoute:'I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.'
    },
    {
        name:'Coco Chanel',
        qoute:'Success is most often achieved by those who don’t know that failure is inevitable.'
    },
    {
        name:'Sheryl Sandberg',
        qoute:'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.'
    },
    {
        name:'Dale Carnegie',
        qoute:'Flaming enthusiasm, backed up by horse sense and persistence, is the quality that most frequently makes for success.'
    },
    {
        name:'Yogi Berra',
        qoute:'You got to be careful if you don’t know where you’re going, because you might not get there.'
    },
    {
        name:'Samuel Johnson',
        qoute:'The true measure of a man is how he treats someone who can do him absolutely no good.'
    },
    {
        name:'John Wooden',
        qoute:'Success comes from knowing that you did your best to become the best that you are capable of becoming..'
    },
]



const qbtn = document.querySelector('#qbtn');
const Authorname= document.querySelector('#quoteAuthor');
const qoute = document.querySelector("#quote");

qbtn.addEventListener("click",display);

function display(){
    let random = Math.floor(Math.random()*quotes.length);
    Authorname.innerHTML = quotes[random].name;
    quote.innerHTML= quotes[random].qoute;

}
