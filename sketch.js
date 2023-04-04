//第一個作業
// function draw() { // 畫圖的函數，每秒進到函數執行(大約60次）
//   background(255); // 設定畫布的背景顏色，背景顏色為255(白)
//   translate(width/2, height/2); //原本原點在左上角，此指令是把原點放到視窗的中心
//   scale(1, -1);  // 放大縮小的指令，第二參數為Y軸的放大縮小，負號為上下顛倒
//   // 從第一點跟第二點連成一線，接著，第二點與第三點連成一線，以此類推到最後一點
//   for (let i = 0; i < points.length-1; i++) {   // i++ = i+1
//     line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]); // 0代表Ｘ軸，1代表Ｙ軸，points[i][0]第一個點Ｘ軸，points[i][1]第一點Ｙ軸，points[i+1][0]第二點Ｘ軸，points[i+1][1]第二點Y軸
//   }
//   // 最後一個點與第一點連成一線
//   line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
// }
//=====================================
// let points = [[-11,0],[-14,1],[-12,2],[-9,3],[-4,3],[-2,7],[0,3],[3,2],[9,1],[14,5],[13,3],[12,0],[13,-2],[10,-1],[4,-2],[3,-4],[1,-3],[-4,-3],[-6,-2],[-6,-7],[-8,-5],[-9,-2],[-13,-1]]; // 利用串列設定23個點
// let startColor, endColor; // 聲明startColor, endColor
// function setup() {  //只會執行一次的函數，會先進行執行
//   createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度（windowWidth），高度為整個視窗的高度（windowHeight）
//    //把points 內的值都*50
//   for (let i = 0; i < points.length; i++) {
//     for (let j = 0; j < points[i].length; j++) {
//       points[i][j] = points[i][j] * 30;
//     }
//   }
//   startColor = color(255, 0, 0); // 設定起始顏色
//   endColor = color(0, 255, 0); // 設定結束顏色
// }

// function draw() { // 畫圖的函數，每秒進到函數執行(大約60次）
//   background(255); // 設定畫布的背景顏色，背景顏色為255(白)
//   translate(width/2, height/2); //原本原點在左上角，此指令是把原點放到視窗的中心
//   scale(1, -1); // 放大縮小的指令，第二參數為Y軸的放大縮小，負號為上下顛倒
//   // 從第一點跟第二點連成一線，接著，第二點與第三點連成一線，以此類推到最後一點
//   for (let i = 0; i < points.length-1; i++) { // i++ = i+1
//     // 計算起點與終點之間的漸層顏色
//     let gradientColor = lerpColor(startColor, endColor, i / (points.length-1));
//     stroke(gradientColor); // 設定線條顏色為漸層顏色
//     line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);// 0代表Ｘ軸，1代表Ｙ軸，points[i][0]第一個點Ｘ軸，points[i][1]第一點Ｙ軸，points[i+1][0]第二點Ｘ軸，points[i+1][1]第二點Y軸
//   }
//   // 把最後一個點與第一個點連線
//   let gradientColor = lerpColor(startColor, endColor, (points.length-1) / (points.length-1)); //設定漸變效果
//   stroke(gradientColor); // 線條顏色為gradientColor
//   strokeWeight(20); // 線條設定粗路為20
//   line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
// }

// let points = [[-11,0],[-14,1],[-12,2],[-9,3],[-4,3],[-2,7],[0,3],[3,2],[9,1],[14,5],[13,3],[12,0],[13,-2],[10,-1],[4,-2],[3,-4],[1,-3],[-4,-3],[-6,-2],[-6,-7],[-8,-5],[-9,-2],[-13,-1]]; // 利用串列設定23個點
// function setup() {   //只會執行一次的函數，會先進行執行
//   createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度（windowWidth），高度為整個視窗的高度（windowHeight）
//   //把points 內的值都*50
//   for (let i = 0; i < points.length; i++) {
//     for (let j = 0; j < points[i].length; j++) {
//       points[i][j] = points[i][j] * 30;
//     }
//   }
// }



// let ctx;
// function setup() { //只會執行一次的函數，會先進行執行
// 	createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度（windowWidth），高度為整個視窗的高度（windowHeight）
// 	background("#ade8f4"); //設定背景顏色
// 	ctx = canvas.getContext('2d');
// 	ctx.lineWidth = 20; //線條寬度
// 	ctx.lineCap = 'round'// 線條端點的形狀為圓形
	
//   colorMode(HSB, 360, 100, 100)
//   noStroke() // 無線條描邊
// const num = 20 //線條數量
// for (let i = 0; i < num; i++) { //建立迴圈
//   gradientLine(ctx,random(width), random(height), random(width), random(height), color(random(60), 50, 80), color(random(30, 90), 50, 100), 40) //每條線條都是從隨機位置到隨機位置
// }
// }
// function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//   gradient.addColorStop(0, c1);
//   gradient.addColorStop(1, c2);
//   ctx.strokeStyle = gradient;

//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }


// let ctx;
// let points = [[-11,0],[-14,1],[-12,2],[-9,3],[-4,3],[-2,7],[0,3],[3,2],[9,1],[14,5],[13,3],[12,0],[13,-2],[10,-1],[4,-2],[3,-4],[1,-3],[-4,-3],[-6,-2],[-6,-7],[-8,-5],[-9,-2],[-13,-1]]; // 利用串列設定23個點
// function setup() {
// 	//基礎設定
// 	createCanvas(windowWidth, windowHeight);
// 	background(100);
//   for (let i = 0; i < points.length; i++) {
//     for (let j = 0; j < points[i].length; j++) {
//       points[i][j] = points[i][j] * 30; //設定鯊魚大小
//     }
// 	ctx = canvas.getContext('2d');
// 	ctx.lineWidth = 20;
// 	ctx.lineCap = 'round'
// 	//------
// 	gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
// 	gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
// 	gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')
// }
// }
// function draw() {	
//   background(255); // 設定畫布的背景顏色，背景顏色為255(白)
//   translate(width/2, height/2); //此指令是把原點放到視窗的中心(原本原點在左上角)
//   scale(1, -1);  // 放大縮小的指令，第二參數為Y軸的放大縮小，負號為上下顛倒
//   // 從第一點跟第二點連成一線，接著，第二點與第三點連成一線，以此類推到最後一點
//   for (let i = 0; i < points.length-1; i++) {   // i++ = i+1
//     line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]); // 0代表Ｘ軸，1代表Ｙ軸，points[i][0]第一個點Ｘ軸，points[i][1]第一點Ｙ軸，points[i+1][0]第二點Ｘ軸，points[i+1][1]第二點Y軸
//   }
//   // 最後一個點與第一點連成一線
//   line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線

// }

// // 以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化

// function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//   gradient.addColorStop(0, c1);
//   gradient.addColorStop(1, c2);
//   ctx.strokeStyle = gradient;

//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }
// function gradientLine(ctx,x1,y1,x2,y2,c1,c2){
  // const gradient = ctx.createCanvasGradient(x1, y1, x2, y2);
  //   gradient.addColorStop(0, c1);
  //   gradient.addColorStop(1, c2);
  //   ctx.strokeStyle = gradient;


let points = [[-11,0],[-14,1],[-12,2],[-9,3],[-4,3],[-2,7],[0,3],[3,2],[9,1],[14,5],[13,3],[12,0],[13,-2],[10,-1],[4,-2],[3,-4],[1,-3],[-4,-3],[-6,-2],[-6,-7],[-8,-5],[-9,-2],[-13,-1],]; // 利用串列設定23個點
let startColor, endColor; // 聲明startColor, endColor
function setup() {  //只會執行一次的函數，會先進行執行
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度（windowWidth），高度為整個視窗的高度（windowHeight）
   //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 30;
    }
  }
  startColor = color(255, 0, 0); // 設定起始顏色
  endColor = color(0, 255, 0); // 設定結束顏色
}
function gradientLine(ctx,x1,y1,x2,y2,c1,c2){
  const gradient = ctx.createCanvasGradient(x1, y1, x2, y2);
   gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
   ctx.strokeStyle = gradient;
}
function draw() { // 畫圖的函數，每秒進到函數執行(大約60次）
  background(255); // 設定畫布的背景顏色，背景顏色為255(白)
  translate(width/2, height/2); //原本原點在左上角，此指令是把原點放到視窗的中心
  // 計算縮放比例
  const scaleAmount = map(mouseX, 0, width, 1, 2);
  
  // 重置縮放比例
  resetMatrix();

  // 設定縮放比例
  scale(scaleAmount);
  textSize(50); // 設定文字大小為50
 fill(0); // 設定文字顏色為黑色
 text("鯊魚", 0, 0); // 在畫面中央加入文字“鯊魚”
  scale(1, -1); // 放大縮小的指令，第二參數為Y軸的放大縮小，負號為上下顛倒
  // 從第一點跟第二點連成一線，接著，第二點與第三點連成一線，以此類推到最後一點
  for (let i = 0; i < points.length-1; i++) { // i++ = i+1
    // 計算起點與終點之間的漸層顏色
    let gradientColor = lerpColor(startColor, endColor, i / (points.length-1));
    stroke(gradientColor); // 設定線條顏色為漸層顏色
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);// 0代表Ｘ軸，1代表Ｙ軸，points[i][0]第一個點Ｘ軸，points[i][1]第一點Ｙ軸，points[i+1][0]第二點Ｘ軸，points[i+1][1]第二點Y軸
  }
  // 把最後一個點與第一個點連線
  let gradientColor = lerpColor(startColor, endColor, (points.length-1) / (points.length-1)); //設定漸變效果
  stroke(gradientColor); // 線條顏色為gradientColor
  strokeWeight(20); // 線條設定粗路為20

  for(let i=0;i<points.length-1;i++){
    line((points[i][0]),(points[i[1]]),(points[i+1][1]))
    line((points[i][0])*1.1,(points[i[1]])*1.1,(points[i+1][1])*1.1)
    line((points[i][0])*1.2,(points[i[1]])*1.2,(points[i+1][1])*1.2)
    line((points[i][0])*1.3,(points[i[1]])*1.3,(points[i+1][1])*1.3)
    line((points[i][0])*1.4,(points[i[1]])*1.4,(points[i+1][1])*1.4)
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
}