import Image from "next/image";
import loadar from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loadar} height={150} width={150} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
