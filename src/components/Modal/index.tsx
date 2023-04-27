import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContent, ModalHeader, ModalSection } from "./style";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../axios/api";

type ModalData = {
  id: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

type DetailsData = [{
    title: string;
    description: string;
    thumbnail: {
      extension: string;
      path: string;
    };
    images: [{ path: string; extension: string }];
    creators: {
      items: [{ name: string; role: string }];
    };
    prices: [{ price: number }];
  }
];

export default function Modal({ id, setOpenModal }: ModalData) {
  const { data, isLoading } = useQuery<DetailsData | null>(["comic-detail", id], async () => {
      const response = await api.get(`comics/${id}`);
      return response.data.data.results;
    },
    {
      staleTime:((1000 * 60) * 60) * 24, // O resultado fica armazenado em cache por 24h, segundo a docs da api é um bom tempo com base que os dados não mudam muito
    }
  );

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFirstLetterToUpperCase = (word: string) : string => {
    const firstLetter = word.slice(0, 1)
    const restOfTheWord = word.slice(1, word.length)
    return firstLetter.toUpperCase() + restOfTheWord
  }

  return (
    <ModalSection>
      {isLoading && <h1>Loading...</h1>}
      <ModalHeader>
        <h3>{data?.[0].title}</h3>
        <button onClick={() => handleCloseModal()}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </ModalHeader>
      <ModalContent>
        <div>
          <img
            src={`${data?.[0].images[0].path}/portrait_uncanny.${data?.[0].images[0].extension}`}
            alt={data?.[0].title}
          />
        </div>
        <div>
          <h3>
            Published Arrumar: <span>October 05, 2022</span>
          </h3>
          {data &&
            data[0].creators.items.map((item) => (
              <h3 key={item.name}>
                {handleFirstLetterToUpperCase(item.role)}: <span>{item.name}</span>
              </h3>
            ))}
          {data?.[0].prices[0].price != 0 && (
            <h3>
              Price: <span>$ {data?.[0].prices[0].price}</span>
            </h3>
          )}
          <p>{data?.[0].description}</p>
          <button>Enviar</button>
        </div>
      </ModalContent>
    </ModalSection>
  );
}
