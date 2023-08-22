let memetemplate
var content = 'Me explaining to my boss how a cute celebratory gif can drastically impact customer journey and enhance the UX of our website, boosting engagement and screentime: '
var content1 = 'My boss: '

function preload(){
  memetemplate=createImg('Explaining.jpeg','The "Me explaining" meme template')
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  memetemplate.position(0,100)
  memetemplate.size(400,200)
  textSize(11)
  text(content,10,10,175,100)
  text(content1,275,90)
}