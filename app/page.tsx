'use client'
import { useState } from "react"

export default function Home() {
  type dto={
   ESP1:{
    Sensor1:number,
    Sensor2:number,
    Sensor3:number,
    Sensor4:number,
    relay:boolean
   },
   ESP2:{
    Sensor1:number,
    Sensor2:number,
    Sensor3:number,
    Sensor4:number
   },
   ESP3:{
    Sensor1:number,
    Sensor2:number,
    Sensor3:number,
    Sensor4:number
   },
   ESP4:{
    Sensor1:number,
    Sensor2:number,
    Sensor3:number,
    Sensor4:number
   },
  }
  let values:dto = {
    ESP1:{
      'Sensor1':2,
      'Sensor2':3,
      'Sensor3':2,
      'Sensor4':2,
      'relay':true
    },
    ESP2:{
      'Sensor1':2,
      'Sensor2':3,
      'Sensor3':2,
      'Sensor4':2,
    },
    ESP3:{
      'Sensor1':2,
      'Sensor2':3,
      'Sensor3':2,
      'Sensor4':2,
    },
    ESP4:{
      'Sensor1':2,
      'Sensor2':3,
      'Sensor3':2,
      'Sensor4':2,
    },
  }
  const [reading, setReading] = useState(values);
  const handleClick = () => {
    //api call switch on off relay
    setReading((prevState) => ({
      ...prevState,
      ESP1: {
        ...prevState.ESP1,
        relay: !prevState.ESP1.relay,
      },
    }));
  };
  return (
   <>
   <div className="h-screen bg-green-300 flex flex-wrap justify-center">
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" bg-cyan-500 flex w-[100%] h-[10%]">ESP1
    {reading.ESP1.relay&&<div onClick={handleClick} className="relative w-[50%] ml-[40%] h-[100%] bg-green-500">
    relay
    </div>}
    {!reading.ESP1.relay&&<div onClick={handleClick}  className="relative w-[50%] ml-[40%] h-[100%] bg-red-500">
    relay
    </div>}
    </div>
    <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 1</div>
  {reading.ESP1.Sensor1}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR2</div>
  {reading.ESP1.Sensor2}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 3</div>
    {reading.ESP1.Sensor3}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 4</div>
    {reading.ESP1.Sensor4}
   </div>
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className="bg-cyan-500 w-[100%] h-[10%]">ESP2</div>
    <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 1</div>
    {reading.ESP2.Sensor1}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR2</div>
    {reading.ESP2.Sensor2}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 3</div>
    {reading.ESP2.Sensor3}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 4</div>
    {reading.ESP2.Sensor4}
   </div>
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className="bg-cyan-500 w-[100%] h-[10%]">ESP3</div>
    <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 1</div>
    {reading.ESP3.Sensor1}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR2</div>
    {reading.ESP3.Sensor2}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 3</div>
    {reading.ESP3.Sensor3}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 4</div>
    {reading.ESP3.Sensor4}
   </div>
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className="bg-cyan-500 w-[100%] h-[10%]">ESP4</div>
    <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 1</div>
    {reading.ESP4.Sensor1}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR2</div>
    {reading.ESP4.Sensor2}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 3</div>
    {reading.ESP4.Sensor3}
   </div>
   <div className="mx-auto my-auto  h-[45%] w-[45%] bg-cyan-400 flex flex-wrap">
    <div className=" w-[100%] h-[10%]">SENSOR 4</div>
    {reading.ESP4.Sensor4}
   </div>
   </div>
   </div>
   </>
  )
}
