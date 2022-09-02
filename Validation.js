const Active=()=>
{
    const a=document.forms['irctc'].fno.value
    const b=document.forms['irctc'].Svalue.value
    const c=document.forms['irctc'].area.value
    const d=document.forms['irctc'].pin1.value
    const e=document.forms['irctc'].crt1.value
    const f=document.forms['irctc'].condition.value
    const g=document.forms['irctc'].mob1.value
    const h=document.forms['irctc'].state1.value
    let act=true
    //  if(a.length>0&&b.length>0)
    //  {
    //      act=true
    //      alert(act)
    //  }
    if(a.length<=0)
    {
        document.getElementById("Fdetails").innerHTML="Flat/Door/Block no. shouldn't empty"
        act=false
    }
    if(b.length<=0)
    {
        document.getElementById("Sdetails").innerHTML="Street/Lane shouldn't empty"
        act=false
    }
    if(c.length<=0)
    {
        document.getElementById("Adetails").innerHTML="Area/Locality shouldn't empty"
        act=false
    }
    if(d.length<=0 )
    {
        document.getElementById("pin").innerHTML="Pincode shouldn't empty"
        act=false
    }
    if(g.length<=0)
    {
        document.getElementById("mob").innerHTML="Phone No shouldn't empty"
        act=false
    }
    // if(!(/^[0-9]$/).test(d))
     //reg=new RegExp("^[A-Za-z]+$","g")
     if(!((/^[0-9]+$/).test(d)))
    {
        document.getElementById("pin").innerHTML="pin no Shouldn't any alphabets"
        act=false
    }
    if(!(/^[0-9]/).test(g)&&!(/^[a-zA-Z]/).test(b))
    {
        document.getElementById("mob").innerHTML="phone no shouldn't Any alphabets"
        document.getElementById("Sdetails").innerHTML="Street/lane shouldn't Any numerical"
        act=false
    }
    if(e=="")
    {
        document.getElementById("crt").innerHTML="Any one must be selected"
        act=false
    }
    if(f!=true)
    {
        act=false
    }
    if(h.length<=0)
    {
        document.getElementById("state").innerHTML="State shouldn't empty"
        act=false
    }

    return act
}