import { useState, FormEvent } from "react"

export default function Contact() {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (event: FormEvent) => {
        //event.preventDefault(); --> Empêcher la recharge de la page ?
        // Envoyer par mail via le back
        // Afficher un feedback
    };

    return (
        <div>
            <p>Tu souhaites rejoindre la team coeur coeur ? Ecris-nous pour te présenter !</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="telephone">Numéro de téléphone</label>
                    <input
                        type="text"
                        id="telephone"
                        value={telephone}
                        onChange={(e)=>setTelephone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
  }