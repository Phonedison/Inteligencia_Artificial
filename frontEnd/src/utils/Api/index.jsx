import axios from "axios";

export const EnviarPergunta = async (pergunta, idSessao = null) => {
  const URL = "http://localhost:8080/chat/perguntar";
  const dados = { pergunta, sessionId: idSessao };

  try {
    const response = await axios.post(URL, dados);
    const resposta = response.data;
    return resposta;
  } catch (error) {
    if (error.response)
      console.error("Erro backend: ", error.response, error.response.data);
    else console.error("Erro conectar servidor: ", error.message);

    throw error;
  }
};
