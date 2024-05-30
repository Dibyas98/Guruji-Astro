import Image from "next/image";
import Weather from "./components/page/Weather";

export default function Home() {
  return (
    <div className="p-2 md:p-5 xl:p-5  bg-[#c7d1cda3] xl:h-screen">
      <Weather></Weather>
    </div>
  );
}
