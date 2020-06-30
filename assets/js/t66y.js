import { element } from "protractor";

(()=>{
    const tpc = document.querySelector('.tcp_content');
    tpc.querySelectorAll('.tips').forEach((n,i)=>{n.remove()})
    tpc.querySelectorAll('.t_like').forEach((n,i)=>{n.remove()})
    tpc.querySelectorAll('.image-big-text').forEach((n,i)=>{n.remove()})
    tpc.querySelectorAll('img').forEach((n,i)=>{ 
        n.removeAttribute('bs-data') 
        n.removeAttribute('data-link') 
        n.removeAttribute('ess-data') 
        n.removeAttribute('style') 
        n.setAttribute('source',n.getAttribute('src'))
    })
})()


(()=>{

    const img2b64 = (img=>{
        let cav = document.createElement('canvas');
        let ctx = cav.getContext('2d');
        c.height=img.naturalHeight;
        c.width=img.naturalWidth;
        ctx.drawImage(img, 0, 0,img.naturalWidth, img.naturalHeight);
        var base64String = c.toDataURL();
        return base64String; 
    })

    const img_list = new Array();
    for(let img of document.querySelectorAll('img.h-img')){
        img_list.push(img2b64(img))
    } 
    return img_list
})()
