        function startTime() {
            const today = new Date();
            let h = today.getHours()%12;
            if(h<10)
              h="0"+h;
            let m = today.getMinutes();
            let s = today.getSeconds();
            let ampm=today.getHours()%12>=1?"pm":"am";
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('hour').innerHTML = h;
            document.getElementById('min').innerHTML = m;
            document.getElementById('sec').innerHTML = s;
            document.getElementById('ampm').innerHTML=ampm.toUpperCase();
            setTimeout(startTime, 1000);
          }
          
          function checkTime(i) {
            if (i < 10) {i = "0" + i}; 
            return i;
          }
        function Calculate(){
           var breakfast=document.getElementById("break");
           var b= breakfast.options[breakfast.selectedIndex].text;
           var lunchtime=document.getElementById("lunch");
           var l= lunchtime.options[lunchtime.selectedIndex].text;
           var dinnertime=document.getElementById("dinner");
           var d= dinnertime.options[dinnertime.selectedIndex].text;
           console.log(b);
           console.log(l);
           console.log(d);
           console.log(typeof(b));
            var timenow=new Date();
            let h = timenow.getHours()%12;
            if(h<10)
             h="0"+h;
            let m = timenow.getMinutes();
            let s = timenow.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            let ampm=timenow.getHours()%12>=1?"PM":"AM";
        
          console.log(b.slice(13,15));
           if(h==b.slice(0,2) && ampm==b.slice(13,15))
           {
               if(h==b.slice(8,10))
               {
                   if(m>=0)
                   {
                       
                   }
        
               }
               else
               {
                   document.getElementById('img1').src = "./image/wakeup_image.png";
                   console.log("executed");
               }

           }
           if(h==l.slice(0,2)&& ampm==l.slice(13,15))
           {
               if(h==l.slice(8,10))
               {
                   if(m>=0)
                   {
                       
                   }
        
               }
               else
               {
                   document.getElementById('img1').src = "./image/lunch_image.png";
                   console.log("executed");
               }

           }
           if(h==d.slice(0,2)&& ampm==d.slice(13,15))
           {
               if(h==d.slice(8,10))
               {
                   if(m>=0)
                   {
                       
                   }
        
               }
               else
               {
                   document.getElementById('img1').src = "./image/goodnight_image.png";
                   console.log("executed");
               }

           }
           document.getElementById("wake-up").innerHTML= "Wake up time : "+b;
           document.getElementById("lunch-time").innerHTML="lunch Time : "+l;
           document.getElementById("nap-time").innerHTML="Nap Time : "+d;
           if(document.getElementById("box3")){
           document.getElementById("box3").style.display="block";
           }
           



        }