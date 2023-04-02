import React from "react";
import Image from "next/image";
import images from "@/constants/images";

export default function Custom500() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Image src={images.logo_footer} alt="Logo" width={200} height={200} />
      <h1
        style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        Błąd 500 - Strona nie znaleziona
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        Coś poszło nie tak po stronie serwera. Spróbuj ponownie za jakiś czas.
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Fizjoterapia Joanna Ejsmont
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "20px" }}>
        <b>tel:</b> 793-183-080
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "20px" }}>
        <b>adres:</b> Osidele Centrum 21, 16-100 Sokółka
      </p>
    </div>
  );
}