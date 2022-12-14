let res,resInd,kai,bg;
let te=true;
let gif;
let url = decodeURI(window.location.href);
let argsIndex = url.split("?param=");
let arg = argsIndex[1];
let fade1 = 0;
let fade2 = 0;
let fade3 = 0;
let button;
  
function preload() {
  kai = loadFont('kai.ttf');
    gif = createImg("https://media.tenor.com/a_bwSoIpYBUAAAAi/bird.gif");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  bg = loadImage('bg.jpg');

  CalConv();
  result1 = createElement('h1', res[0]);
  result1.position(320,100);
  result1.style('font-size','100px');
  result1.style('background-image','url(zi.png)');
  result1.style('background-size','contain');
  result1.style('background-repeat','no-repeat');
  result1.style('background-position-y','20px');

  result2 = createElement('h1', res[1]);
  result2.position(320,230);
  result2.style('font-size','100px');
  result2.style('background-image','url(zi.png)');
  result2.style('background-size','contain');
  result2.style('background-repeat','no-repeat');
  result2.style('background-position-y','20px');

  button = createElement('h1','Back');
  button.mousePressed(back);
  button.position(windowWidth-150,50);
  button.style('background-color','rgba(255,0)')
  button.style('background-image','url(back.png)')
  button.style('background-size','contain')
  button.style('background-position-y','5px')
  button.style('background-position-x','-15px')
  button.style('background-repeat',"no-repeat")
  button.style('font-size','30px');
  button.style('font-family','cursive')
  button.style('height','60px');
  button.style('width','100px');

}

function draw() {
  strokeWeight(1);
  background(bg);
  gif.position(850,map(mouseY,0,windowHeight,400,550));
// gif.size(400, 200);
  stroke(0);
  fill(0);
  output(resInd);
}

function CalConv()
    {
    FIRSTYEAR = 1998;
    LASTYEAR = 2031;
     
    today = new Date();
    SolarYear = today.getFullYear();
    SolarMonth = today.getMonth() + 1;
    SolarDate = today.getDate();
    Weekday = today.getDay();
    LunarCal = [
    new tagLunarCal( 27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1 ),
    new tagLunarCal( 46, 0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ),
    new tagLunarCal( 35, 0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ),
    new tagLunarCal( 23, 4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 42, 0, 1, 4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 31, 0, 2, 9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ),
    new tagLunarCal( 21, 2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 39, 0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 28, 7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ),
    new tagLunarCal( 48, 0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ),
    new tagLunarCal( 37, 0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ),
    new tagLunarCal( 25, 5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
    new tagLunarCal( 44, 0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
    new tagLunarCal( 33, 0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 22, 4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ),
    new tagLunarCal( 40, 0, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ),
    new tagLunarCal( 30, 9, 2, 7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 49, 0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 38, 0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ),
    new tagLunarCal( 27, 6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ),
    new tagLunarCal( 46, 0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ),
    new tagLunarCal( 35, 0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ),
    new tagLunarCal( 24, 4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 42, 0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 31, 0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ),
    new tagLunarCal( 21, 2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
    new tagLunarCal( 40, 0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ),
    new tagLunarCal( 28, 6, 2, 5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ),
    new tagLunarCal( 47, 0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1 ),
    new tagLunarCal( 36, 0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ),
    new tagLunarCal( 25, 5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ),
    new tagLunarCal( 43, 0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ),
    new tagLunarCal( 32, 0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0 ),
    new tagLunarCal( 22, 3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ) ];
     
    SolarCal = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
     
    SolarDays = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397 ];
     
    if ( SolarYear <= FIRSTYEAR || SolarYear > LASTYEAR ) return 1;
    sm = SolarMonth - 1;
    if ( sm < 0 || sm > 11 ) return 2;
    leap = GetLeap( SolarYear );
    if ( sm == 1 )
    d = leap + 28;
    else
    d = SolarCal[sm];
    if ( SolarDate < 1 || SolarDate > d ) return 3;
    y = SolarYear - FIRSTYEAR;
    acc = SolarDays[ leap*14 + sm ] + SolarDate;
    kc = acc + LunarCal[y].BaseKanChih;
    Kan = kc % 10;
    Chih = kc % 12;
     
    Age = kc % 60;
    if ( Age < 22 )
    Age = 22 - Age;
    else
    Age = 82 - Age;
     
    if ( acc <= LunarCal[y].BaseDays ) {
    y--;
    LunarYear = SolarYear - 1;
    leap = GetLeap( LunarYear );
    sm += 12;
    acc = SolarDays[leap*14 + sm] + SolarDate;
    }
    else
    LunarYear = SolarYear;
    l1 = LunarCal[y].BaseDays;
    for ( i=0; i<13; i++ ) {
    l2 = l1 + LunarCal[y].MonthDays[i] + 29;
    if ( acc <= l2 ) break;
    l1 = l2;
    }
    LunarMonth = i + 1;
    LunarDate = acc - l1;
    im = LunarCal[y].Intercalation;
    if ( im != 0 && LunarMonth > im ) {
    LunarMonth--;
    if ( LunarMonth == im ) LunarMonth = -im;
    }
    if ( LunarMonth > 12 ) LunarMonth -= 12;
    today=new Date();
    function initArray(){
    this.length=initArray.arguments.length
    for(var i=0;i<this.length;i++)
    this[i+1]=initArray.arguments[i] }
    var d=new initArray("?????????","?????????","?????????","?????????","?????????","?????????","?????????");
     
    months = ["???","???","???","???","???","???","???","???","???","???","??????","??????"];
     
    days = ["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????"];
    
    hours = ["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","??????"];
    // document.write( "??????"+`<font color="crimson";>${months[LunarMonth-1]}</font>`+"???" +`<font color="crimson";>${days[LunarDate-1]}</font>`+ "   ");
    
    luMon=LunarMonth-1;
    luDay=LunarDate-1;
    nowTime = today.getHours();
        
    if (nowTime==23){curTime=0;}
    else{curTime=Math.ceil(nowTime/2);}
    
    liushen = ["??????","??????","??????","??????","??????","??????"];
    resInd = (luMon+luDay+curTime+arg)%6;
    res = liushen[resInd];
    // res = liushen[(luMon+luDay+curTime+Math.floor(Math.random() * 6))%6];
    // document.write(`<font color="crimson";>${res}</font>`);
    return 0;
    }
     
  function GetLeap( year )
    {
    if ( year % 400 == 0 )
    return 1;
    else if ( year % 100 == 0 )
    return 0;
    else if ( year % 4 == 0 )
    return 1;
    else
    return 0;
    }

  function tagLunarCal( d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
    this.BaseDays = d;
    this.Intercalation = i;
    this.BaseWeekday = w;
    this.BaseKanChih = k;
    this.MonthDays = [ m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 ];
    }
  function output(resInd){
    daan = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    liulian = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    suxi = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    chikou = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    xiaoji = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    kongwang = ["???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????","???????????????"];
    
    daan1=["Auspicious Hexagram: ", 
    "You shall get through everything smoothly. ",
    "It is better to stay still than to make progress actively.",
    "One must pay attention to the illness coming","from the mouth or from overwork.",
    "Your lost thing might be in the southwest."
    ];

    liulian1 = ["Inauspicious Hexagram",
  " This hexagram represents obstacles and delays.",
  "You are suggested to not make any big moves, and be careful.",
"You should pay attention to the others as they might cause", "you trouble.",
"It is possible that you may suffer from stomach discomforts","caused by mental stress."];

    suxi1 = ["Auspicious Hexagram", 
    "There will be good news very soon,", "and you are suggested to take active actions.",
  "You should pay attention to the details.",
"You might have problems with heart and blood circulation,", "or with head and brain pressure, ",
"but the problem is not serious."];

    chikou1=["Inauspicious Hexagram",
    "You should pay attention when speaking","as there might be prblems caused by your words.",
  "Don't procrastinate if you are planning big, then you will succeed." ,"But trivial things won't work out.",
"Be careful about epidemic diseases and getting injured."];

    xiaoji1 = ["Auspicious Hexagram", "Everything is getting better and better.",
  "You may make money and meet people with the help of others.",
"The person you are waiting for will arrive soon."];

    kongwang1 = ["Inauspicious Hexagram", 
    "Everything is unclear and confusing,","so you may don't know what to do currently.",
  "You are suggested to listen to others' opinions,","and make judgments carefully.",
"You might be framed or dragged down by others."];

    out = [daan,liulian,suxi,chikou,xiaoji,kongwang];
    out1 = [daan1,liulian1,suxi1,chikou1,xiaoji1,kongwang1];

    // rect(300,180,900,270);
    // rect(750,530,500,200);
    // rect(650,100,400,100);
      fill(188,100,83);
      stroke(0,50);
      textSize(30);
      textFont("cursive");
      if(te){
        stroke(188,100,83);
        line(600,140,660,140);
        line(1030,140,1090,140)
        stroke(0,50);
        text("Click to check intepretation!",680,150);}
      else{
        stroke(188,100,83);
        line(600,130,660,130);
        line(1030,130,1090,130)
        stroke(0,50);
        text("Click again to go back!",680,130);}

    // if(mouseX>=850 && mouseX<=850+500 && mouseY>=530 && mouseY<=730){
    //   fill(255,134,110,fade2);
    //   fade2+=10;
    //   stroke(0,50);
    //   textSize(30);
    //   textFont("cursive");
    //   text("Click the birds to go back!",900,560);
    // }else{fade2=0;}

    if (te){
      fill(0,fade2);
      fade3=0;
      stroke(0,fade2);
      fade2+=5;
    textFont(kai);
    textSize(40);
    for(let i=0;i<out[resInd].length;i++){
      temp_width = 450+80*(i+1);
      for (let j=0;j<out[resInd][i].length;j++){
        text(out[resInd][i][j],temp_width,230+50*j);
      }
    }
  }
  else{
    fade2=0;
    fade3+=3;
    fill(0,fade3);
    stroke(0,fade3);
    textFont("cursive");
    textSize(30);
    for(let i=0;i<out1[resInd].length;i++){
        if(i==0){textSize(35);
          textStyle(BOLD);
          text(out1[resInd][i],520,200);
        }else{ textStyle(NORMAL);textSize(28);
        text(out1[resInd][i],520,220+60*i)}
    }}
    
  }



  function mousePressed(){
    // rect(650,100,400,100);
    if(mouseX>=650 && mouseX<=1050 && mouseY>=90 && mouseY<160){
      te=!te;
    }
    // if(mouseX>=750 && mouseX<=750+600 && mouseY>=530 && mouseY<=830){
    //   window.open("index.html",target="_self");
    // }
  }

  function back(){
    window.open("index.html",target="_self");
  }
