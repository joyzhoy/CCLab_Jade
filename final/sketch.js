let res,resInd,kai,bg;
let te=true;
let gif;
let url = decodeURI(window.location.href);
let argsIndex = url .split("?param=");
let arg = argsIndex[1];
let fade1 = 0;
let fade2 = 0;
  
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
}

function draw() {
  background(bg);
  gif.position(750, 430);
// gif.size(200, 400);
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
    var d=new initArray("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
     
    months = ["一","二","三","四","五","六","七","八","九","十","十一","十二"];
     
    days = ["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"];
    
    hours = ["子时","丑时","寅时","卯时","辰时","巳时","午时","未时","申时","酉时","戌时","亥时"];
    // document.write( "农历"+`<font color="crimson";>${months[LunarMonth-1]}</font>`+"月" +`<font color="crimson";>${days[LunarDate-1]}</font>`+ "   ");
    
    luMon=LunarMonth-1;
    luDay=LunarDate-1;
    nowTime = today.getHours();
        
    if (nowTime==23){curTime=0;}
    else{curTime=Math.ceil(nowTime/2);}
    
    liushen = ["大安","留连","速喜","赤口","小吉","空亡"];
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
    fill(0);
    daan = ["大安事事昌","求财在坤方","失物去不远","宅舍保安康","行人身未动","病者主无妨","将军回田野","仔细更推详"];
    liulian = ["留连事难成","求谋日未明","官事凡宜缓","去者未回程","失物南方见","急讨方心称","更须防口舌","人口且平平"];
    suxi = ["速喜喜来临","求财向南行","失物申未午","逢人路上寻","官事有福德","病者无祸侵","田宅六畜吉","行人有信音"];
    chikou = ["赤口主口舌","官非切宜防","失物速速讨","行人有惊慌","六畜多作怪","病者出西方","更须防咀咒","诚恐染瘟疫"];
    xiaoji = ["小吉最吉昌","路上好商量","阴人来报喜","失物在坤方","行人即便至","交关甚是强","凡事皆和合","病者叩穹苍"];
    kongwang = ["空亡事不详","阴人多乖张","求财无利益","行人有灾殃","失物寻不见","官事有刑伤","病人逢暗鬼","解禳保安康"];
    
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

    // rect(500,200,650,250);
    // rect(750,530,500,200);
    if(mouseX>=500 && mouseX<=550+650 && mouseY>=200 && mouseY<=450){
      fill(255,134,110,fade1);
      fade1+=10;
      stroke(0,50);
      textSize(25);
      textFont("cursive");
      if(te){
      text("Click to check intepretation!",680,150);}
    } else{fade1=0;}

    if(mouseX>=750 && mouseX<=750+500 && mouseY>=530 && mouseY<=730){
      fill(255,134,110,fade2);
      fade2+=10;
      stroke(0,50);
      textSize(25);
      textFont("cursive");
      text("Click to go back!",800,520);
    }else{fade2=0;}

    if (te){
      fill(0);
      stroke(0);
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
    fill(0);
    stroke(0,50);
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
    if(mouseX>=500 && mouseX<=550+650 && mouseY>=200 && mouseY<=450){
      te=!te;
    }
    if(mouseX>=750 && mouseX<=750+500 && mouseY>=530 && mouseY<=730){
      window.open("index.html",target="_self");
    }
  }
