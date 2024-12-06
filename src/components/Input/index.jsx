import { useRef, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Container } from "./styles";

export function Input({ onSend }){
    const [message, setMessage] = useState("");
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        const textarea = textareaRef.current;
        textarea.style.height = "4rem"
        const scrollHeight = e.target.scrollHeight;
        const maxHeight = 15 * 10;
        textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
        setMessage(e.target.value);// Atualiza o estado com a mensagem
    }

    const handleSend = () => {
        if(message.trim()){
            onSend(message); // Envia a mensagem para o componente pai
            setMessage(""); // Limpa o campo de texto após o envio
            const textarea = textareaRef.current;
            textarea.style.height = "4rem"; // Redefine a altura para o valor inicial
        }
    }

    return(
        <Container>
            <textarea 
                type="text" 
                placeholder="Digite sua mensagem..." 
                value={message}
                ref={textareaRef}
                onInput={handleInput}
                onKeyDown={(e) => {
                    if(e.key === "Enter" && !e.shiftKey){
                        e.preventDefault();
                        handleSend();
                    }
                }}
                
                required/>
            <button id="send" onClick={handleSend}>
                <RiSendPlaneLine id="search" />
                </button>
        </Container>
    );
};