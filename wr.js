var fs = require('fs');
var wr = function(url,data,utf,mode,flag) {
  fs.open(url,flag,mode,function(err,fd) {
    if (err) {
      console.error(err);
    }
    // fs.read()
    fs.write(fd, data, 0 , utf,function(err,written,string) {
      if(err){
        console.error(err);
      }
      console.log(written+'字节');
      console.log(string);
    });
     fs.close(fd,function(err) {
       if (err) {
         console.error(err);
       }
       console.log("close-yes");
     })
  });
}

wr("./bb.md","妈的智障\n","utf-8",0777,'w')
// fs.open("./bb.md","w+",function(err,fd) {
//   if (err) {
//     console.error(err);
//   }
//   // fs.read()
//   fs.write(fd, data, 0 , 'utf-8',function(err,written,string) {
//     if(err){
//       console.error(err);
//     }
//     console.log(written+'字节');
//     console.log(string);
//   });
//    fs.close(fd,function(err) {
//      if (err) {
//        console.error(err);
//      }
//      console.log("close-yes");
//    })
// });
