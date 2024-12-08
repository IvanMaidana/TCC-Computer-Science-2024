import { useEffect, useRef } from "react";
import { Markmap } from "markmap-view";
import { Transformer } from "markmap-lib";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export function MindMapViewer({ markdown }) {
    const divRef = useRef(null); 
    const transformer = new Transformer(); 

    useEffect(() => {
        if (!divRef.current) return;

        // Cria o elemento SVG dinamicamente
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.fontSize = '14px';

        divRef.current.appendChild(svg);

        // svg.offsetWidth;

        // Cria o mapa mental no SVG
        const mm = Markmap.create(svg); 
        const { root } = transformer.transform(markdown); 
        mm.setData(root);
        mm.fit();

        return () => {
            divRef.current.removeChild(svg);
        };
    });

    // Função para baixar como PNG
    const handleDownloadPNG = () => {
        if (!divRef.current) return;

        // Usa html2canvas para capturar o conteúdo da div
        html2canvas(divRef.current).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "mapa-mental.png"; // Nome do arquivo PNG
            link.click();
        });
    };

    // Função para baixar como PDF
    const handleDownloadPDF = () => {
        if (!divRef.current) return;

        // Usa html2canvas para capturar o conteúdo da div
        html2canvas(divRef.current).then((canvas) => {
            const pdf = new jsPDF("landscape", "mm", [300, 200]);
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 300; // Largura em mm para A4 landscape
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("mapa-mental.pdf"); // Nome do arquivo PDF
        });
    };

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#f9f9f9",
                padding: "1rem",
            }}
        >
            {/* Div para o SVG */}
            <div
                ref={divRef}
                style={{
                    width: "100vw",
                    height: "calc(100vh - 5rem)", // Altura ajustada para incluir espaço para botões
                }}
            ></div>

            {/* Botões para baixar o mapa */}
            <div
                style={{
                    position: "relative",
                    bottom: "2rem",
                    left: "1rem", 
                    display: "flex",
                    gap: "1rem",
                }}
            >

                <button
                    onClick={handleDownloadPNG}
                    style={{
                        padding: "1rem 2rem",
                        fontSize: "1.6rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Baixar PNG
                </button>
                <button
                    onClick={handleDownloadPDF}
                    style={{
                        padding: "1rem 2rem",
                        fontSize: "1.6rem",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Baixar PDF
                </button>
            </div>
        </div>
    );
}
