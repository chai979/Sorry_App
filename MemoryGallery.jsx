const memories=[
   {
    img:"src/assets/WhatsApp Image 2026-05-09 at 5.09.18 PM (1).jpeg",
    caption:" “Your smile >>> ❤️”"
  },
  {
    img:"src/assets/WhatsApp Image 2026-05-09 at 5.09.17 PM.jpeg",
    caption:" “Pretty as always ✨”"
  },
 {
    img:"src/assets/WhatsApp Image 2026-05-09 at 5.09.18 PM.jpeg",
    caption:" “Cutiee 🌸...”"
  },
  {
    img:"src/assets/ChatGPT Image May 9, 2026, 04_53_25 PM.png",
    caption:" “You look good without even trying honestly ✨”"
  }

];

export default function MemoryGallery(){
  return(
    <div className="card">
      <h2>Your Beautiful Pics 📷</h2>

      <div className="gallery">
        {memories.map((m,index)=>(
          <div className="photo" key={index}>
            <img src={m.img} alt="" />
            <p>{m.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}