import { Button } from "../components/Button";

import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>.</div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala</h1>
          <span>4 perguntas</span>
        </div>

        <form action="">
          <textarea placeholder="O que você quer perguntar" />

          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  )
}