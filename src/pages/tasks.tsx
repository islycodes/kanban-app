import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";
export default function Tasks() {
  const [params] = useSearchParams();
  const [ticket, setTicket] = useState<TicketInterface>();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const id = params.get("id");
    if (id !== null) {
      setEditMode(true);
      ApiInstance.getOneTicket(id).then((value) => {
        setTicket(value);
      });
    }
  }, []);
  return (
    <div>
      {editMode ? (
        <>
          <p>{ticket?.name}</p>
          <p>{ticket?.description}</p>
          <p>{ticket?.status}</p>
        </>
      ) : (
        <>
          <label>Nome</label>
          <input />
          <label>Descrição</label>
          <input />
        </>
      )}
    </div>
  );
}
