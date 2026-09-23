import React from "react";
import { AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";

const beats = [
  { key: "story", label: "VISUAL STORY", symbol: "story.webp", work: "canaan.jpg", color: "#3959a8" },
  { key: "learning", label: "LEARNING", symbol: "learning.webp", work: "birzeit.webp", color: "#84704c" },
  { key: "digital", label: "DIGITAL PLACE", symbol: "digital.webp", work: "nakba.webp", color: "#3d797f" },
  { key: "systems", label: "WORKING SYSTEM", symbol: "agents.webp", work: "care.webp", color: "#376f62" }
];
const Beat: React.FC<{index:number}> = ({index}) => {
  const frame = useCurrentFrame();
  const beat = beats[index];
  const aperture = interpolate(frame,[0,13,30,48],[0,0,.8,1],{extrapolateRight:"clamp"});
  const symbolY = interpolate(frame,[0,16,38,58],[0,0,-110,-130],{extrapolateRight:"clamp"});
  const cardY = interpolate(frame,[0,14,40,58],[170,170,16,0],{extrapolateRight:"clamp"});
  const cardScale = interpolate(frame,[0,18,58],[.65,.72,1],{extrapolateRight:"clamp"});
  return <AbsoluteFill style={{background:"radial-gradient(circle at 60% 30%, #253b4f, #101a26 70%)",overflow:"hidden"}}>
    <div style={{position:"absolute",inset:"9% 6%",border:"1px solid #9caab65c",borderRadius:12}} />
    <div style={{position:"absolute",top:35,left:58,color:"#e4e9ed",font:"700 18px sans-serif",letterSpacing:5}}>{String(index+1).padStart(2,"0")} / {beat.label}</div>
    <Img src={staticFile(beat.symbol)} style={{position:"absolute",width:310,height:260,objectFit:"contain",left:80,top:170,transform:`translateY(${symbolY}px)`,opacity:interpolate(frame,[0,28,55],[1,1,.5],{extrapolateRight:"clamp"})}} />
    <div style={{position:"absolute",left:330,top:102,width:560,height:350,overflow:"hidden",border:"8px solid #d8d6cb",boxShadow:"0 28px 70px #0009",transform:`translateY(${cardY}px) scale(${cardScale})`,opacity:aperture,clipPath:`inset(0 ${(1-aperture)*50}% 0 ${(1-aperture)*50}%)`}}>
      <Img src={staticFile(beat.work)} style={{width:"100%",height:"100%",objectFit:"cover"}} />
    </div>
    <div style={{position:"absolute",right:90,bottom:54,width:100,height:3,background:beat.color}} />
  </AbsoluteFill>;
};
export const CategoryReveals:React.FC = () => <AbsoluteFill>{beats.map((_,index)=><Sequence key={index} from={index*60} durationInFrames={60}><Beat index={index}/></Sequence>)}</AbsoluteFill>;
