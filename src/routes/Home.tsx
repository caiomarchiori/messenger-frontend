
import { Navigate, useParams } from "react-router-dom";
import Card from "../components/cards/Card";
import MessageForm from "../components/forms/messageForm";
import Header from "../components/header/Header";
import { useAuth } from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import api from "../axios/axios";
import { IReceviedMessage } from "../models/models";
import MessageCard from "../components/cards/messageCard";

export default function Home() {

  const [messages, setMessages] = useState<IReceviedMessage[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const { token } = useAuth();
  const { id } = useParams();

  const handleOpenForm = () => {
    setIsOpen(true);
  }

  const handleCloseForm = () => {
    setIsOpen(false);
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/mensagens/${id}`);
        setMessages(response.data);
      }
      catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <button className={`bottom-20 bg-green-600 px-10 absolute right-10 rounded-full text-white py-5 text-xl translate hover:-translate-y-0.5 hover:shadow-md duration-200`} onClick={handleOpenForm}>
        Abrir o chat
      </button>
      {
        isOpen ? (
          <>
            <div className="mt-28">
              <Card className="relative h-[700px] w-[800px]">
                <div className="space-y-7 max-h-[620px] overflow-y-auto scrollbar-thin">
                  {
                    <>
                      {
                        messages.map((message: IReceviedMessage) => {
                          return (
                            <div className="mt-3 grid grid-cols-2 px-2">
                              {
                                message.emissorId == id ? (
                                  <div className="col-start-2">
                                    <MessageCard
                                      className=" bg-sky-400"
                                      emissorLogin={message.emissorLogin}
                                      dataEnvio={message.dataEnvio}
                                      conteudo={message.conteudo}
                                    />
                                  </div>
                                ) : (
                                  <div className="col-start-1">
                                    <MessageCard
                                      className="bg-gray-400 bg-opacity-20"
                                      emissorLogin={message.emissorLogin}
                                      dataEnvio={message.dataEnvio}
                                      conteudo={message.conteudo}
                                    />
                                  </div>
                                )
                              }
                            </div>
                          )
                        })
                      }
                    </>
                  }
                </div>
                <div className="w-full absolute bottom-0">
                  <MessageForm />
                </div>
              </Card>
            </div>
            <button className={`bottom-44 bg-red-600 px-9 absolute right-10 rounded-full text-white py-5 text-xl translate hover:-translate-y-0.5 hover:shadow-md duration-200`} onClick={handleCloseForm}>
              Fechar o chat
            </button>
          </>
        ) : ""
      }
    </>
  )
}