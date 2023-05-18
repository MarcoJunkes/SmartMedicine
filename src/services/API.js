import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000", 
});

export const getUsers = async () => {
    
    const response = await instance.get('/user/listAllUsers');
    const json = await response.data;
    return json;
};

export const postUser =  async (object) => {
    instance.post('/user/newUser', {
        data: {
            "email": object.email,
            "nome": object.nome,
            "telefone": object.celular,
            "senha": object.senha,
            "nome_responsavel": object.nomeResp,
            "contato_responsavel": object.contatoResp,

        },
        headers: {
          'Content-Type': 'application/json' 
        }
      })
      .then(response => {
            if(response.status === 200) {
                return true
            }
      })
      .catch(error => {
            console.warn(error);
            return false
      });
}