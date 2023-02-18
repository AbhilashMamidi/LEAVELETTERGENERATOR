function range()
{
   var rg=document.getElementById("range").value
   document.getElementById("change").style.fontSize=rg+"px"
   localStorage.setItem("HEADING",rg)
   
}
function col1()
{
    var clr=document.getElementById("col1").value
    document.getElementById("change").style.color=clr
    localStorage.setItem("BACKGROUNG-COLOR",clr)
}
function col2()
{
    var clr2=document.getElementById("col2").value
    document.getElementById("div3").style.backgroundColor=clr2
    localStorage.setItem("BG-COLOUR",clr2)
}
function col3()
{
    var clr3=document.getElementById("col3").value
    document.getElementById("fontcolor").style.color=clr3
    localStorage.setItem("FONT-COLOR",clr3)
}
function left()
{
    document.getElementById("background").style.textAlign="left"
    localStorage.setItem("TEXT-ALIGN","left")

}
function justify()
{
    document.getElementById("background").style.textAlign="justify"
    localStorage.setItem("TEXT-ALIGN","justify")

}
function center()
{
    document.getElementById("background").style.textAlign="center"
    localStorage.setItem("TEXT-ALIGN","center")

}
function right()
{
    document.getElementById("background").style.textAlign="right"
    localStorage.setItem("TEXT-ALIGN","right")

}
function storinginputdata()
{
    var a=document.getElementById("fmname").value
    localStorage.setItem("from",a)
    var b=document.getElementById("fmaddress").value
    localStorage.setItem("address",b)
    var c=document.getElementById("today").value
    localStorage.setItem("TODAYS.DATE",c)
    var d=document.getElementById("tname").value
    localStorage.setItem("TO NAME",d)
    var e=document.getElementById("taddress").value
    localStorage.setItem("TO ADDRESS",e)
    var f=document.getElementById("category").value
    localStorage.setItem("SUB",f)
    var g=document.getElementById("subject").value
    localStorage.setItem("SUBJECT",g)
    var h=document.getElementById("reason").value
    localStorage.setItem("REASON",h)
    var i=document.getElementById("frmdate").value
    localStorage.setItem("FROM",i)
    var j=document.getElementById("ltdate").value
    localStorage.setItem("TO",j)
    var k=document.getElementById("nofdays").value
    localStorage.setItem("NO.OF.DAYSLEAVE",k)
}
 
function outputdata()
{
    var A=localStorage.getItem("from")
    document.getElementById("FromName").innerHTML=A
    var B=localStorage.getItem("address")
    document.getElementById("FromAddress").innerHTML=B
    var C=localStorage.getItem("TODAYS.DATE")
    document.getElementById("todayDate").innerHTML=C
    var D=localStorage.getItem("TO NAME")
    document.getElementById("toName").innerHTML=D
    var E=localStorage.getItem("TO ADDRESS")
    document.getElementById("toAddres").innerHTML=E
    var F=localStorage.getItem("SUB")
    document.getElementById("todaysdate").innerHTML=F
    var G=localStorage.getItem("SUBJECT")
    document.getElementById("Category").innerHTML=G
    var H=localStorage.getItem("REASON")
    document.getElementById("Reason").innerHTML=H
    var I=localStorage.getItem("FROM")
    document.getElementById("fromDate").innerHTML=I
    var J=localStorage.getItem("TO")
    document.getElementById("toDate").innerHTML=J
    var K=localStorage.getItem("NO.OF.DAYSLEAVE")
    document.getElementById("nofDays").innerHTML=K
    

    var M=localStorage.getItem("BACKGROUNG")
    document.getElementById("HEAD").style.color=M
   

    
    document.getElementById("hding").style.color=localStorage.getItem("BACKGROUNG-COLOR")

    
    document.getElementById("bkgc").style.backgroundColor=localStorage.getItem("BG-COLOUR")

   
    document.getElementById("hding").style.textAlign=localStorage.getItem("TEXT-ALIGN")
    document.getElementById("hding").style.fontSize=localStorage.getItem("HEADING")+"px"

   
    document.getElementById("body").style.color=localStorage.getItem("FONT-COLOR")
}


















