const cvs= document.getElementById('game')
const ctx = cvs.getContext('2d')

const drawRect = (x,y,w,h,color) => {
    ctx.fillStyle = color
    ctx.fillRect (x,y,w,h)
}

const drawCircleF = (x,y,r,color) => {
    ctx.fillStyle = color
    ctx.beginPath()
ctx.arc(x,y,r,0,2 * Math.PI,false)
ctx.closePath()
ctx.fill()
}
const drawCircleS = (x,y,r,w,color) => {
    ctx.strokeStyle = color
    ctx.lineWidth = w
    ctx.beginPath()
ctx.arc(x,y,r,0,2 * Math.PI)
ctx.closePath()
ctx.stroke()
}

const drawText = (text,x,y,color) => {
    ctx.fillStyle = color
    ctx.font = '50px sans-serif'
    ctx.fillText(text,x,y)
}

const user = {
    x: 20,
    y: cvs.height/2-50,
    w: 10,
    h: 100,
    color: '#fff',
    score: 0
}

const com = {
    x: cvs.width -30,
    y: cvs.height/2-50,
    w: 10,
    h: 100,
    color: '#fff',
    score: 0
}

const ball = {
    x: cvs.width/2,
    y: cvs.height/2,
    r: 13,
    color: '#92000a',
    speed: 5,
    velocityX: 3,
    velocityY: 4,
    stop: true
}
const movePaddle=(e)=>{
    let rect=cvs.getBoundingClientRect()
    user.y=e.clientY-rect.top-user.h/2
}

cvs.addEventListener('mousemove',movePaddle)

const update= () => {
    ball.x += ball.velocityX
    ball.x += ball.velocityY
    

    if(ball.y + ball.r > cvs.height || ball.y - ball.r < 0)
    ball.velocityY= - ball.velocityY

    let comLvl = 0.1 

    com.y +=(ball.y-(com.y+ com.h/2))*comLvl
    let player=(ball.x<cvs.width/2) ? user:com
}




const render= () =>  {
    drawRect(0,0,cvs.width,cvs.height,'#008000')
drawRect(cvs.width/2-2,0, 4,cvs.height,'#fff')
drawCircleF(cvs.width/2,cvs.height/2,8,'#fff')
drawCircleS(cvs.width/2,cvs.height/2,50,4,'#fff')
drawText(user.score,cvs.width/4,100,'#fff')
drawText(com.score,3*cvs.width/4,100,'#fff')

drawRect(user.x,user.y,user.w,user.h,user.color)
drawRect(com.x,com.y,com.w,com.h,com.color)
drawCircleF(ball.x,ball.y,ball.r,ball.color)



}

const game = () => {
    update()
    render()
}

const fps = 58
setInterval(game,1000/fps)





drawRect(0,0,600,400,'#000')
drawCircleF(50,50,10,'#fff')
drawCircleS(250,250,50,10,'#fff')
drawText('deneme',400,200,'#fff')








































//