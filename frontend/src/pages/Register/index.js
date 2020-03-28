import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await api.post('ongs', data);
      
      alert(`Seu ID é ${response.data.id}`);

      history.push('/');
    } catch(err) {
      alert('Erro no cadatro, porfavor tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Logo Be the hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para o logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            value={name}
            type="text" 
            placeholder="Nome da ong"
            onChange={e => setName(e.target.value)}
          />
          <input
            value={email}
            type="email" 
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            value={whatsapp}
            type="text" 
            placeholder="Whatsapp"
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              value={city}
              type="text" 
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />
            <input
              value={uf}
              type="text" 
              placeholder="UF" 
              style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
