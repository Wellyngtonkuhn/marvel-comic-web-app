import { useState } from 'react'
import { useQuery } from "react-query";
import Modal from '../../components/Modal';
import { api } from "../../axios/api";
import { Main, Ul } from "./style";
import { Container } from "../../styles/styles";

type Results = {
  title: string,
  id: number
  thumbnail:{
    extension: string,
    path: string,
  },
  urls: { 
    type: string , 
    url: string
  },
}

type ResultsData = {
  count: number,
  limit: number,
  offset: number,
  results: Results[]
}

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  
  const { data, isLoading } = useQuery<ResultsData | null>(["comics"], async () => {
    const response = await api.get(`comics`);
    return response.data.data;
  },{
    staleTime: ((1000 * 60) * 60) * 24, // O resultado fica armazenado em cache por 24h, segundo a docs da api é um bom tempo com base que os dados não mudam muito
  }
  );

  const handleOpenModal = () => {
    return setOpenModal(prev => !prev)
  }
  
  return (
    <Main>
      <Container>
        {isLoading && <h1>Loading...</h1>}
          <Ul>
            {data && 
              data?.results.map(item => (
                <li key={item.id}>
                  <button onClick={() => handleOpenModal()}>
                    <img src={`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`} alt={item.title} loading="lazy" />
                    <p>{item.title}</p>
                  </button>
                </li>
              ))
            }
          </Ul>
          {openModal && <Modal id={123} setOpenModal={setOpenModal} /> }
      </Container>
    </Main>
  )
}
